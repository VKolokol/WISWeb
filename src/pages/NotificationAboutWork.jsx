import React, { useState } from 'react';
import {Navigate} from "react-router-dom";
import ModalForm from '../components/form/ModelForm/ModelForm';
import Loader from '../components/Loader/Loader';
import {useForm} from "react-hook-form";
import TextInput from "../components/form/FormInput/TextInput";
import DateTimeInput from "../components/form/FormInput/DateTimeInput";
import TextAreaInput from '../components/form/FormInput/TextAreaInput';
import DefaultSelect from "../components/form/FormSelect/DefaultSelect";
import InterviewerList from "../constants/InterviewerList";
import ResponsibleList from "../constants/ResponsibleList";
import URLs from "../API/URLs";


const NotificationAboutWork = () => {
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const { register, reset, handleSubmit } = useForm();
    const notification = 'workFromHome'

    return (
        <div className="content main_box">
            {!isSend 
                ?
                <ModalForm
                    setIsSend={setIsSend}
                    reset={reset}
                    type={1}
                    handleSubmit={handleSubmit}
                    setIsSuccess={setIsSuccess}
                    setLoading={setIsLoading}
                    url={URLs.work}
                >
                         <TextInput
                             register={register('full_name', { required: true })}
                             placeholder='* Фамилия Имя Отчество'
                         />
                         <DateTimeInput
                             register={register('day_off_datetime', { required: true })}
                             placeholder="* Дата"
                         />
                         <DefaultSelect
                             register={register('id_mentor', { required: true})}
                             defaultValue='* Кто проводит' collections={InterviewerList}
                         />
                         <DefaultSelect
                             register={register('id_hr', { required: true })}
                             defaultValue='* Ответственный' collections={ResponsibleList}
                         />
                         <TextAreaInput
                            register={register('comment', { required: true })}
                            placeholder="* Комментарий"
                        />
                        
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

export default NotificationAboutWork;