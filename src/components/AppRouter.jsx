import React from 'react';
import { Route, Routes} from "react-router-dom";
import Index from '../pages/Index';
import ResultPage from '../pages/result';
import NotificationAboutInterview from '../pages/NotificationAboutInterview';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/notification-about-interview" element={<NotificationAboutInterview />} />
            <Route path="/result/:success" element={<ResultPage />} />
            <Route path={"/"} element={<Index />} />
        </Routes>
    );
};

export default AppRouter;