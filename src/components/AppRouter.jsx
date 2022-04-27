import React from 'react';
import { Route, Routes} from "react-router-dom";
import Index from '../pages/Index';
import ResultPage from '../pages/result';
import NotificationAboutInterview from '../pages/NotificationAboutInterview';
import NotificationAboutWork from '../pages/NotificationAboutWork';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/notification-about-interview" element={<NotificationAboutInterview />} />
            <Route path="/notification-about-work" element={<NotificationAboutWork />} />
            <Route path="/result/:success" element={<ResultPage />} />
            <Route path={"/"} element={<Index />} />
        </Routes>
    );
};

export default AppRouter;