import React from 'react';

import NotificationBody from '../components/NotificationBody';
import contentNotification from '../constants/ContentNotification';
import {useParams} from "react-router-dom";

const ResultPage = () => {
    const params = useParams()
    const isSuccess = params.success;

    const getData = () => {
        if(isSuccess === 'true') {
            return contentNotification.success();
        }
        return contentNotification.error();
    }
    const link = isSuccess ? '/notification-form' : '/'

    return (
        <div>
            <NotificationBody link={link} {...getData()} />
        </div>
    );
};

export default ResultPage;