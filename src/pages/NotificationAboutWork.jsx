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


const NotificationAboutWork = () => {
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const { register, reset, handleSubmit } = useForm();

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
                >
                         <TextInput
                             register={register('full_name', { required: true })}
                             placeholder='* Фамилия Имя Отчество'
                         />
                         <DateTimeInput
                             register={register('execution_time', { required: true })}
                             placeholder="* Дата"
                         />
                         <DefaultSelect
                             register={register('id_interviewer', { required: true})}
                             defaultValue='* Кто проводит' collections={InterviewerList}
                         />
                         <DefaultSelect
                             register={register('id_responsible', { required: true })}
                             defaultValue='* Ответственный' collections={ResponsibleList}
                         />
                         <TextAreaInput
                            register={register('comments', { required: true })}
                            placeholder="* Комментарий"
                        />
                        
                </ModalForm>
                : <div> {
                    !isLoading 
                        ? <Navigate to={`/result/${isSuccess}`} replace={true} />
                        : <Loader /> 
                    }
                </div>
            }
        </div>
    );
};

export default NotificationAboutWork;