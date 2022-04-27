import React from 'react';
import DefaultButton from "../../buttons/DefaultButton";
import {useNavigate} from "react-router-dom";

import './style.css';

const MenuElement = ({symbol, alt, title, link}) => {
    const history = useNavigate();

    const redirectToForm = () => {
        history(link)
    }

    return (
        <div className="menu_item">
            <div className="menu_head">
                <img className="menu_head__img" src={symbol} alt={alt} />
                <p className="menu_head__title"> {title} </p>
            </div>
            <DefaultButton classesBtn={['default-btn', 'menu_btn']} onClick={redirectToForm}> СОЗДАТЬ <img src="img/Path.png" alt="pointer"/></DefaultButton>
        </div>
    );
};

export default MenuElement;