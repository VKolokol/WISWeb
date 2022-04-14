import React from "react";

import './style.css';

const TextInput = ({register, key, placeholder}) => {
    return (
        <div>
            <input
                {...register}
                className='form-input'
                type='text'
                placeholder={placeholder}
            />
        </div>

    );
};

export default TextInput;