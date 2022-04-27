import React from 'react';

import DefaultButton from "../../buttons/DefaultButton";
import NotificationService from "../../../API/NotificationService";
import {useNavigate} from "react-router-dom";

import './style.css';

const ModalForm = ({children, type, setIsSuccess, reset, handleSubmit, setIsSend, setLoading, url}) => {
    const history = useNavigate();
    let note = new NotificationService()

    const closeForm = () => {
        history('/')
    }

    const onSubmit = (data) => {

        const newData = {
            title: 'work',
            ...data,
            type_task: type,
            id_hr: Number(data.id_hr),
            id_mentor: Number(data.id_mentor)
        }

        const fd = new FormData();
        const array = Object.entries(newData);

        array.forEach((el) => {
            fd.append(...el)
        })

        note.createNote(url, fd, setIsSuccess, setLoading)
        setIsSend(true)
        
        reset({
            date: ''
        });
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <section className='form-content'>
                    <div className="close-form" onClick={closeForm}>
                        <img className="close-form__img" src="/img/Close.png" alt='close-form'/>
                    </div>
                     <div className='form-head'>
                         <h2 className='form-head__header'>Создать уведомление</h2>
                         <p className='form-head__info'>Уведомление о собеседовании</p>
                     </div>

                    <div onSubmit={handleSubmit(onSubmit)} className="box-form">
                        {children}
                     </div>

                     <DefaultButton classesBtn={['default-btn', 'w-100']} type={'submit'}> СОЗДАТЬ </DefaultButton>
                 </section>
             </form>
    )
}

export default ModalForm;