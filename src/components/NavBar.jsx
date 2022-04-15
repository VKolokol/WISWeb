import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from "./buttons/ShareButton";


const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/"><img className="nav-bar__logo" src="/img/logo.svg" alt="logo"/></Link>
            <ShareButton />
        </div>
    );
};

export default NavBar;
