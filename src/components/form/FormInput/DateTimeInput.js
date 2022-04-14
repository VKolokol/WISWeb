import React from 'react';

const DateTimeInput = ({register, key}) => {
    return (
        <div>
            <input className="form-input" type="datetime-local" required {...register}/>
        </div>
    );
};

export default DateTimeInput;