import React from 'react';

const NotificationBody = ({image, header, text, btn_event, btn_text}) => {
    return (
        <div className="content">
            <img src={image} width="320px"/>
                <h1 className="title">{header}</h1>
                {text ? <p className="text-info"> {text} </p> : ''}
                <button className="default-btn"> {btn_text}</button>
        </div>
    );
};

export default NotificationBody;