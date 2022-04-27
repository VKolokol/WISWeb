import React from "react";

import './style.css';

const TextAreaInput = ({register, placeholder, maxLength}) => {
    return (
        <div>
            <label>
                <textarea
                    {...register} 
                    className='form-input'
                    placeholder={placeholder} 
                    maxLength={maxLength}
                    rows="1"
                    style={{resize:"none"}}>
                </textarea>
                <label className="text-placeholder format-file">File requirements: pdf, doc, docx</label>
            </label>
        </div>
    )
}

export default TextAreaInput;