import React from 'react';
import { Checkbox } from 'antd';
import  { useState } from 'react';


export default function CheckBox() {
    const [selectedRadio, setSelectedRadio] = useState('');
    const [checkedItems, setCheckedItems] = useState([]);

    const handleRadioChange = (e) => {
        setSelectedRadio(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setCheckedItems((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="radio-checkbox-wrapper">
            <p>Количество пересадок</p>
            <label>
                <input
                    type="checkbox"
                    value="milk"
                    checked={checkedItems.includes('milk')}
                    onChange={handleCheckboxChange}
                />
                Все
            </label>
            <label>
                <input
                    type="checkbox"
                    value="milk"
                    checked={checkedItems.includes('milk')}
                    onChange={handleCheckboxChange}
                />
                Без пересадок
            </label>
            <label>
                <input
                    type="checkbox"
                    value="bread"
                    checked={checkedItems.includes('bread')}
                    onChange={handleCheckboxChange}
                />
                1 пересадка
            </label>
            <label>
                <input
                    type="checkbox"
                    value="bread"
                    checked={checkedItems.includes('bread')}
                    onChange={handleCheckboxChange}
                />
                2 пересадки
            </label>
            <label>
                <input
                    type="checkbox"
                    value="bread"
                    checked={checkedItems.includes('bread')}
                    onChange={handleCheckboxChange}
                />
                3 пересадки
            </label>
        </div>
    );
}
