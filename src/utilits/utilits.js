 export const getTimeInFligth = (min) => {
    return (
        `${Math.floor(min / 60)}ч ${min % 60}м`
    )
};

export const getStartAndFinish = (start, duration) => {
    const startFl = new Date(start);
    const finishFl = new Date(startFl.getTime() + duration * 60 * 1000);

    const formatTime = (date) =>
        `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;

    return `${formatTime(startFl)} - ${formatTime(finishFl)}`;
};

export const getTransfers = (stops) => {
    return stops.length > 0 ? stops.join(', ') : 'Пересадок нет'
};

export const getPrettyPrice = (price) => {
    if (price > 1000) {
        return `${ Math.floor(price / 1000)} ${price % 1000}`
    }
};

export const sortData = (arr, param) => {
    switch (param) {
        case 'cheap':
            return arr.sort((a, b) => a.price - b.price);

        case 'fast':
            return arr.sort((a, b) => a.segments[0].duration - b.segments[0].duration);

        case 'optimal':
            return arr.sort((a, b) => {

                const maxPrice = Math.max(...arr.map(t => t.price));
                const maxDuration = Math.max(...arr.map(t => t.segments[0].duration));

                const weightPrice = 1.5;
                const weightDuration = 1;

                const optimalA = (a.price / maxPrice) * weightPrice + (a.segments[0].duration / maxDuration) * weightDuration;
                const optimalB = (b.price / maxPrice) * weightPrice + (b.segments[0].duration / maxDuration) * weightDuration;

                return optimalA - optimalB;
            });

        default:
            return arr;
    }
}

export const sortDataForTransfers = (arr, transfers) => {
     if (transfers.includes('All')) {
         return arr;
     }

     const result = [];

     if (transfers.includes('Stright')) {
         result.push(...arr.filter(item => item.segments[0].stops.length === 0));
     }
     if (transfers.includes('One')) {
         result.push(...arr.filter(item => item.segments[0].stops.length === 1));
     }
     if (transfers.includes('Two')) {
         result.push(...arr.filter(item => item.segments[0].stops.length === 2));
     }
     if (transfers.includes('Three')) {
         result.push(...arr.filter(item => item.segments[0].stops.length === 3));
     }

     return result;
 };


