import React from 'react';
import DefaultButton from './buttons/DefaultButton';
import {useNavigate,} from "react-router-dom";

const NotificationBody = ({image, header, text, btn_event, btn_text, link}) => {
    const history = useNavigate();

    const handleRedirect = () => {
        console.log(link)
        history(link)
    }

    return (
        <div className="content landing-box">
            <img className="landing-box__img" src={image} alt="landing-img"/>
                <h1 className="landing-box__title">{header}</h1>
                {text ? <p className="text-info"> {text} </p> : ''}
            <DefaultButton onClick={handleRedirect} classesBtn={['default-btn', 'mt-35']}>{btn_text}</DefaultButton>
        </div>
    );
};

export default NotificationBody;