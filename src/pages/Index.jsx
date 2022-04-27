import React from 'react';

import Menu from "../components/menu/Menu";
import MenuItems from "../constants/MenuItems";

const Index = () => {

    return (
        <div className="main_box m-box">
            <h1 className="main_logo">Создать уведомление</h1>
            <Menu menu={MenuItems}/>
        </div>
    );
};

export default Index;