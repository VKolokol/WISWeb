import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './style.css';

import TextInput from "../FormInput/TextInput";
import FileInput from "../FormInput/FileInput";
import DateTimeInput from "../FormInput/DateTimeInput";
import DefaultSelect from "../FormSelect/DefaultSelect";
import DefaultButton from "../../buttons/DefaultButton";
import createNote from '../../../API/NotificationService';


const ModalForm = ({setIsSuccess, setIsSend, setLoading}) => {
    const { register, reset, setValue, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const array = Object.entries(data);
        const formData = new FormData()
        
        array.forEach((el) => {
            formData.append(el[0], el[1])
        })
        
        createNote(formData, setIsSuccess, setLoading);
        setIsSend(true)
        
        reset({
            date: ''
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <section className='form-content'>
                 <div class='form-head'>
                     <h2 class='form-head__header'>Создать уведомление</h2>
                     <p class='form-head__info'>Уведомление о собеседовании</p>
                 </div>
 
                <div onSubmit={handleSubmit(onSubmit)} className="container-grid">
                     <TextInput register={
                            register('title', {required: true})
                        } placeholder='* Название'/>

                     <TextInput register={register('name', { required: true })}  placeholder='* Фамилия Имя Отчество'/>
                     <DefaultSelect register={register('master', { required: true })}  defaultValue='* Кто проводит'/>
                     <DefaultSelect register={register('responsible', { required: true })} defaultValue='* Ответственный'/>
                     <DateTimeInput register={register('date', { required: true })} placeholder="* Дата" />
                     <FileInput imgClip='/img/clip.svg' label='Загрузите резюме' setValue={setValue} />
                 </div>
 
                 <DefaultButton classesBtn={['default-btn', 'w-100']} type={'submit'}> СОЗДАТЬ </DefaultButton>
             </section>
         </form>
    )
}

export default ModalForm;