import React, { useState, useRef } from 'react';

import './style.css';
import DeleteFile from "../IconForm/DeleteFile";

const FileInput = ({setValue, key, imgClip, label}) => {
    const [nameFile, setNameFile] = useState(label)
    const [isLoad, setIsLoad] = useState(false);
    const ref = useRef(null)
    
    const deleteFile = (e) => {
        e.preventDefault()
        setValue('file', '')
        setNameFile(label)
        setIsLoad(false)
        ref.current.value = null
    }

    
    const handleChange = (event) => {
        setValue('file', event.target.files[0])
        setNameFile(event.target.files[0].name)
        setIsLoad(true)
    }

    return (
        <div>
            <div>
                <label>
                    <p className='input_file text-placeholder'>
                        {imgClip ? <img style={{marginRight: 5}} src={imgClip} alt="clip"/> : ' '}
                        {nameFile} <div id="delete-file" onClick={deleteFile}> <DeleteFile value={isLoad}   /></div>
                    </p>
                    <label className="text-placeholder format-file">File requirements: pdf, doc, docx</label>
                    <input
                        ref={ref}
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