import React from 'react';
import { Link } from 'react-router-dom';
import DefaultButton from './buttons/DefaultButton';

const NotificationBody = ({image, header, text, btn_event, btn_text, link}) => {
    return (
        <div className="content">
            <img src={image} width="320px"/>
                <h1 className="title">{header}</h1>
                {text ? <p className="text-info"> {text} </p> : ''}
                <a href={link}>
                    <DefaultButton classesBtn={['default-btn', 'mt-35']}>{btn_text}</DefaultButton>
                </a>
        </div>
    );
};

export default NotificationBody;