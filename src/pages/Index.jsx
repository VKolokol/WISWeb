import React from 'react';

import NotificationBody from '../components/NotificationBody';
import contentNotification from '../constants/ContentNotification';

const Index = () => {

    return (
        <div>
            <NotificationBody {...contentNotification.index()} link='/notification-form'  />
        </div>
    );
};

export default Index;