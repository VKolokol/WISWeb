import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import ResultPage from './result';
import ModalForm from '../components/form/ModelForm/ModelForm';
import Loader from '../components/Loader/Loader';


const Form = () => {
    const [isSend, setIsSend] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(true)

    return (
        <div className="content">
            {!isSend 
                ? <ModalForm setIsSend={setIsSend} setIsSuccess={setIsSuccess} setLoading={setIsLoading} />
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

export default Form;