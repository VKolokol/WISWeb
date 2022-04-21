import React from 'react';
import { useForm } from 'react-hook-form';

import './style.css';

import TextInput from "../FormInput/TextInput";
import FileInput from "../FormInput/FileInput";
import DateTimeInput from "../FormInput/DateTimeInput";
import DefaultSelect from "../FormSelect/DefaultSelect";
import DefaultButton from "../../buttons/DefaultButton";
import NotificationService from "../../../API/NotificationService";
import {useNavigate} from "react-router-dom";
import ResponsibleList from "../../../constants/ResponsibleList";
import InterviewerList from "../../../constants/InterviewerList";


const ModalForm = ({setIsSuccess, setIsSend, setLoading}) => {
    const { register, reset, setValue, handleSubmit } = useForm()
    const history = useNavigate();
    let note = new NotificationService()

    const closeForm = () => {
        history('/')
    }

    const onSubmit = (data) => {

        const newData = {
            ...data,
            id_responsible: Number(data.id_responsible),
            id_interviewer: Number(data.id_interviewer)
        }

        const fd = new FormData('type_task', 0);
        const array = Object.entries(newData);

        array.forEach((el) => {
            fd.append(...el)
        })

        note.createNote(fd, setIsSuccess, setLoading)
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
                         <TextInput register={
                                register('title', {required: false})
                            } placeholder='* Название'/>

                         <TextInput
                             register={register('full_name', { required: true })}
                             placeholder='* Фамилия Имя Отчество'
                         />
                         <DefaultSelect
                             register={register('id_interviewer', { required: true})}
                             defaultValue='* Кто проводит' collections={InterviewerList}
                         />
                         <DefaultSelect
                             register={register('id_responsible', { required: true })}
                             defaultValue='* Ответственный' collections={ResponsibleList}
                         />
                         <DateTimeInput
                             register={register('execution_time', { required: true })}
                             placeholder="* Дата"
                         />
                         <FileInput imgClip='/img/clip.svg' label='Загрузите резюме' setValue={setValue} />
                     </div>

                     <DefaultButton classesBtn={['default-btn', 'w-100']} type={'submit'}> СОЗДАТЬ </DefaultButton>
                 </section>
             </form>
    )
}

export default ModalForm;