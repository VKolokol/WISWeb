import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ShareButton from "./buttons/ShareButton";
import {Alert, Button} from "@mui/material";


const NavBar = () => {
    const [isCopied, setIsCopied] = useState(false)

    return (
        <div className="navigation">

            {isCopied &&
                <Alert className="nav-message" onClose={() => {setIsCopied(false)}}> Ссылка скопирована!</Alert>
            }

            <div className="nav-bar">
                <Link to="/"><img className="nav-bar__logo" src="/img/logo.svg" alt="logo"/></Link>
                <ShareButton setIsCopied={setIsCopied}/>
            </div>

        </div>
    );
};

export default NavBar;
