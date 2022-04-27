import React from "react";

import './style.css';

const TextAreaInput = ({register, placeholder, maxLength}) => {
    return (
        <div className="comments">
            <label>
                <textarea
                    {...register} 
                    className='form-input'
                    placeholder={placeholder} 
                    maxLength={maxLength}
                    rows="1"
                    style={{resize:"none"}}>
                </textarea>
                <label className="text-placeholder format-file">Не более 100 символов</label>
            </label>
        </div>
    )
}

export default TextAreaInput;