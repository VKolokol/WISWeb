import React, { useState } from 'react';

import './style.css';

const DefaultSelect = ({register, defaultValue, collections }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='select-container'>
            {!value ? <span className='select-label text-placeholder'>{defaultValue}</span> : '' }
            <select required className={"form-input"} name="select" {...register} onChange={handleChange}>
                <option disabled selected value={null}></option>
                {collections.map(option =>
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            )}
			</select>
        </div>
    );
};

export default DefaultSelect;