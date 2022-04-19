import React from 'react';

const ShareButton = () => {

    const copyURL = () => {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        alert('Ссылка скопирована!')
  }
    return (
        <div>
            <button onClick={copyURL} className="btn-share"> <img src="/img/Vector.svg" alt="share"/></button>
        </div>
    );
};

export default ShareButton;