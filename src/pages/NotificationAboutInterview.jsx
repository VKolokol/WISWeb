import React, { useState } from 'react';
import {Navigate} from "react-router-dom";
import ModalForm from '../components/form/ModelForm/ModelForm';
import Loader from '../components/Loader/Loader';
import {useForm} from "react-hook-form";
import TextInput from "../components/form/FormInput/TextInput";
import DefaultSelect from "../components/form/FormSelect/DefaultSelect";
import InterviewerList from "../constants/InterviewerList";
import ResponsibleList from "../constants/ResponsibleList";
import DateTimeInput from "../components/form/FormInput/DateTimeInput";
import FileInput from "../components/form/FormInput/FileInput";
import URLs from "../API/URLs";


const NotificationAboutInterview = () => {
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const { register, reset, setValue, handleSubmit } = useForm();
    const notification = 'interview'

    return (
        <div className="content main_box">
            {!isSend 
                ?
                <ModalForm
                    setIsSend={setIsSend}
                    reset={reset}
                    type={0}
                    handleSubmit={handleSubmit}
                    setIsSuccess={setIsSuccess}
                    setLoading={setIsLoading}
                    url={URLs.task}
                >
                    <TextInput register={
                                register('title', {required: false})
                            } placeholder='* Название'/>

                         <TextInput
                             register={register('full_name', { required: true })}
                             placeholder='* Фамилия Имя Отчество'
                         />
                         <DefaultSelect
                             register={register('id_mentor', { required: true})}
                             defaultValue='* Кто проводит' collections={InterviewerList}
                         />
                         <DefaultSelect
                             register={register('id_hr', { required: true })}
                             defaultValue='* Ответственный' collections={ResponsibleList}
                         />
                         <DateTimeInput
                             register={register('execution_time', { required: true })}
                             placeholder="* Дата"
                         />
                         <FileInput imgClip='/img/clip.svg' label='Загрузите резюме' setValue={setValue} />
                </ModalForm>
                : <div> {
                    !isLoading 
                        ? <Navigate to={`/result/${notification}/${isSuccess}`} replace={true} />
                        : <Loader /> 
                    }
                </div>
            }
        </div>
    );
};

export default NotificationAboutInterview;