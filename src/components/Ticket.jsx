import {getTimeInFligth, getTransfers, getStartAndFinish, getPrettyPrice} from "../utilits/utilits.js";

const Ticket = ( { ticket } ) => {
    const firstSegment = ticket.segments[0];
    const secondSegment = ticket.segments[1];
    const duration1 = firstSegment.duration;
    const duration2 = secondSegment.duration;
    return (
        <div className='ticket'>
            <div className='cup--of--ticket' >
                <h1 className='cup--of--ticket-price' >{getPrettyPrice(ticket.price)}</h1>
                <div className='avia--company-logo'>
                    <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier}/>
                </div>
            </div>
            <ul className='ticket--info'>
                <li className='ticket--info-item'>
                    <div className='cities--and--time'>
                        <h5 className='cities'>{`${firstSegment.origin} - ${firstSegment.destination}`}</h5>
                        <p className='time'>{getStartAndFinish(firstSegment.date, duration1)}</p>
                    </div>
                    <div className='time--in--flight'>
                        <h5 className='time--in--flight-h5'>В пути</h5>
                        <p className='time--in--flight-p'>{getTimeInFligth(duration1)}</p>
                    </div>
                    <div className='transfers'>
                        <h5 className='numder-of-transfers'>{ firstSegment.stops.length }</h5>
                        <p className='city-transfer'>{getTransfers(firstSegment.stops)}</p>
                    </div>
                </li>
                <li className='ticket--info-item'>
                    <div className='cities--and--time'>
                        <h5 className='cities'>{`${secondSegment.origin} - ${secondSegment.destination}`}</h5>
                        <p className='time'>{getStartAndFinish(secondSegment.date, duration2)}</p>
                    </div>
                    <div className='time--in--flight'>
                        <h5 className='time--in--flight-h5'>В пути</h5>
                        <p className='time--in--flight-p'>{getTimeInFligth(duration2)}</p>
                    </div>
                    <div className='transfers'>
                        <h5 className='numder-of-transfers'>{secondSegment.stops.length}</h5>
                        <p className='city-transfer'>{getTransfers(secondSegment.stops)}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Ticket;