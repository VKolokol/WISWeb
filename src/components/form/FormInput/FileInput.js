import React, { useState } from 'react';
import ShareButton from '../../buttons/ShareButton';

import './style.css';

const FileInput = ({setValue, key, imgClip, label}) => {
    const [nameFile, setNameFile] = useState(label)
    
    const deleteFile = (e) => {
        e.preventDefault()
        setValue('file', '')
        setNameFile(label)
    }
    
    const handleChange = (event) => {
        setValue('file', event.target.files[0])
        setNameFile(event.target.files[0].name)
    }
    return (
        <div>
            <div>
                <label>
                    <p className='input_file text-placeholder'>
                        {imgClip ? <img src={imgClip} alt="clip"/> : ''} 
                        {nameFile} <img id="delete-file" src="/img/delete.png" onClick={deleteFile}/>
                    </p>
                    <label className="text-placeholder format-file">File requirements: pdf, doc, docx</label>
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