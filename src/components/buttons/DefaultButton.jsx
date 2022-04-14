import React from 'react';

const DefaultButton = ({classesBtn, ...props}) => {
    return (
        <div>
            <button className={classesBtn ? classesBtn.join(' ') : 'default-btn'} {...props}> СОЗДАТЬ </button>
        </div>
    );
};

export default DefaultButton;