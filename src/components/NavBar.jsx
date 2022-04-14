import React from 'react';
import ShareButton from "./buttons/ShareButton";


const NavBar = () => {
    return (
        <div className="nav-bar">
            <img src="/img/logo.svg"/>
            <ShareButton />
        </div>
    );
};

export default NavBar;
