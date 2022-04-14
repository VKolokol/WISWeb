import React from 'react';

const DefaultButton = ({children, classesBtn, ...props}) => {
    
    return (
        <div>
            <button className={classesBtn ? classesBtn.join(' ') : 'default-btn'} {...props}> {children} </button>
        </div>
    );
};

export default DefaultButton;