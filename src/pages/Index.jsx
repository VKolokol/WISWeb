import React from 'react';

import NotificationBody from '../components/NotificationBody';
import contentNotification from '../constants/ContentNotification';

const Index = () => {
    return (
        <div>
            <NotificationBody link="/notification-form" {...contentNotification.index()}/>
        </div>
    );
};

export default Index;