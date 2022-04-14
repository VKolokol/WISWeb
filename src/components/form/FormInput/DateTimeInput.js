import React from 'react';

const DateTimeInput = ({register, placeholder}) => {
    const changeTypeOnDateTime = (e) => {
        e.target.type = 'datetime-local'
    }
    const changeTypeOnText = (e) => {
        e.target.type = 'text'
    }
    return (
        <div>
            <input 
                className="form-input" 
                type="text"
                placeholder={placeholder} 
                required 
                {...register} 
                onFocus={changeTypeOnDateTime}
                onBlur={changeTypeOnText}
            />
        </div>
    );
};

export default DateTimeInput;