import React from 'react';

import NotificationBody from '../components/NotificationBody';
import contentNotification from '../constants/ContentNotification';

const ResultPage = ({isSuccess}) => {

    const getData = () => {
        if(!isSuccess) {
            return contentNotification.error();
        }
        return contentNotification.success();
    }
    const link = isSuccess ? '/notification-form' : '/'

    return (
        <div>
            <NotificationBody link={link} {...getData()} />
        </div>
    );
};

export default ResultPage;