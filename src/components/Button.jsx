import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { numberInc } from "../store/butonSlice.js";

const Btn = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(numberInc())
    };
    return (
        <button
            className='Btn--of--app'
            onClick={handleClick}
        >
            Показать еще 5 билетов!
        </button>
    );
};

export default Btn;

