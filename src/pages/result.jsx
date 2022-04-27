import React from 'react';

import NotificationBody from '../components/NotificationBody';
import contentNotification from '../constants/ContentNotification';
import {useParams} from "react-router-dom";
import getAttr from "../utils/getAttr";


const ResultPage = () => {
    const params = useParams()
    const {notification, success} = params;
    const {isMethod, method} = getAttr(contentNotification, notification)

    const getData = () => {
        if(success === 'true' && isMethod) {
            return method();
        }
        return contentNotification.error();
    }
    return (
        <div>
            <NotificationBody {...getData()} />
        </div>
    );
};

export default ResultPage;