import React from "react";

import './style.css';

const TextInput = ({register, type="text", placeholder}) => {
    return (
        <div>
            <input
                {...register}
                className='form-input'
                type={type}
                placeholder={placeholder}
            />
        </div>

    );
};

export default TextInput;