import React from 'react';

const ShareButton = ({setIsCopied}) => {

    const copyURL = () => {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setIsCopied(true)
  }
    return (
        <div>
            <button onClick={copyURL} className="btn-share"> <img src="/img/Vector.svg" alt="share"/></button>
        </div>
    );
};

export default ShareButton;