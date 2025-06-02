import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setTab} from "../store/tabSlice.js";


const Tabs = () => {
    const dispatch = useDispatch();
    const handleClick = (tab) => {
        dispatch(setTab(tab))
    };
    const activeTab = useSelector(state => state.tabs);
    return (
        <div className='tabs'>
            <button className= {activeTab === 'cheap' ? 'active' : ''}
            onClick={() => handleClick('cheap')}>
                Самый дешевый
            </button>

            <button className= {activeTab === 'fast' ? 'active' : ''}
                    onClick={() => handleClick('fast')}>
                Самый быстрый
            </button>

            <button className= {activeTab === 'optimal' ? 'active' : ''}
                    onClick={() => handleClick('optimal')}>
                Оптимальный
            </button>
        </div>
    );
};

export default Tabs;
