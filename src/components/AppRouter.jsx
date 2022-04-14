import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Index from '../pages/Index';
import ResultPage from '../pages/result';
import Form from '../pages/form';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/notification-form" element={<Form />} />
            <Route path={"/"} element={<Index />} />
        </Routes>
    );
};

export default AppRouter;