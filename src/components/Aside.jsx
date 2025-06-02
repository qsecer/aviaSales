import { toggleFilter } from '../store/asideSlice.js';

import { useDispatch, useSelector } from "react-redux";

export default function Aside() {
    const dispatch = useDispatch();
    const handleChange = (value) => {
        dispatch(toggleFilter(value))
    }
    const selected = useSelector((state) => state.asideFilters)
    return (
        <div className="radio-checkbox-wrapper">
            <h5 className='filters-menu--header'>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <ul className='filters-menu'>
                <li className='filters-menu--item'>
                    <label>
                        <input
                            type='checkbox'
                            value='All'
                            checked={selected.includes('All')}
                            onChange={() => handleChange('All')}/>
                        Все
                    </label>
                </li>
                <li className='filters-menu--item'>
                    <label>
                        <input type='checkbox'
                               value='Stright'
                               checked={selected.includes('Stright')}
                               onChange={() => handleChange('Stright')}/>
                        Без пересадок
                    </label>
                </li>
                <li className='filters-menu--item'>
                    <label>
                        <input type='checkbox'
                               value='One'
                               checked={selected.includes('One')}
                               onChange={() => handleChange('One')}/>
                        1 пересадка
                    </label>
                </li>
                <li className='filters-menu--item'>
                    <label>
                        <input type='checkbox'
                               value='Two'
                               checked={selected.includes('Two')}
                               onChange={() => handleChange('Two')}/>
                        2 пересадки
                    </label>
                </li>
                <li className='filters-menu--item'>
                    <label>
                        <input type='checkbox'
                               value='Three'
                               checked={selected.includes('Three')}
                               onChange={() => handleChange('Three')}/>
                        3 пересадки
                    </label>
                </li>
            </ul>
        </div>
    );
}

