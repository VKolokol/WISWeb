import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from "./buttons/ShareButton";


const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/"><img src="/img/logo.svg"/></Link>
            <ShareButton />
        </div>
    );
};

export default NavBar;
