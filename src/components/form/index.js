import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './style.css';

import TextInput from "./FormInput/TextInput";
import DateTimeInput from "./FormInput/DateTimeInput";
import DefaultSelect from "./FormSelect/DefaultSelect";
import FileInput from "./FormInput/FileInput";
import DefaultButton from "../buttons/DefaultButton";

const Form = () => {
    const { register, reset, setValue, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log('123')
        const array = Object.entries(data);
        const formData = new FormData()
        array.forEach((el) => {
            formData.append(el[0], el[1])
        })
        axios.post('url', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })
        reset({
            date: ''
        });
    }

    console.log('errrrrrrr', errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>

           <section className='form-content'>
                <div>
                    <h2>Создать уведомление</h2>
                    <p>Уведомление о собеседовании</p>
                </div>

               <form className="container-grid">
                    <TextInput register={register('title', {
                        required: true
                    })} placeholder='Название'/>
                    <TextInput register={register('name', { required: true })}  placeholder='Фамилия Имя Отчество'/>
                    <DefaultSelect register={register('master', { required: true })}  defaultValue='* Кто проводит'/>
                    <DefaultSelect register={register('responsible', { required: true })} defaultValue='* Ответственный'/>
                    <DateTimeInput register={register('date', { required: true })} />
                    <FileInput imgClip='/img/clip.svg' label='Загрузите резюме' setValue={setValue} />
                </form>

                <DefaultButton classesBtn={['default-btn', 'w-100']} type={'submit'}/>
            </section>
        </form>
    );
};

export default Form;