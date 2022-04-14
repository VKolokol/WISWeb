import React, { useState } from 'react';

import './style.css';

const DefaultSelect = ({register, key, defaultValue, collections }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    console.log(value)
    return (
        <div className='select-container'>
            {!value ? <span className='select-label text-placeholder'>{defaultValue}</span> : '' }
            <select required placeholder='asdasdasdasddsa' className={"form-input"} name="select" {...register} onChange={handleChange}>
                <option disabled selected value={null}></option>
                <option value="value1"> Значение 1 </option>
                <option value="value2"> Значение 2 </option>
			</select>
        </div>
    );
};

export default DefaultSelect;