import React from 'react';

import './style.css';

const FileInput = ({setValue, key, imgClip, label}) => {
    const handleChange = (event) => {
        setValue('file', event.target.files[0])
    }
    return (
        <div>
            <div>
                <label>
                    <p className='input_file'>
                        {imgClip ? <img src={imgClip} alt="clip"/> : ''} {label}
                    </p>
                    <input
                        id="files"
                        style={{visibility: "hidden"}}
                        accept=".pdf,.doc,.docx,"
                        type="file"
                        onChange={handleChange}
                    />
                </label>
		     </div>
        </div>
    );
};

export default FileInput;