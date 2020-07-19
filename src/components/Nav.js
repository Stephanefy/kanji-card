import React from 'react';

import { ReactComponent as ReactLogo} from '../images/kanji-card-app-logo.svg'


import './Nav.css';

 const Nav = () => {
    return (
        <nav className="nav-bar w-2/3 flex justify-between items-center">
            <div className="logo">
                <ReactLogo width="130" height="130" />
            </div>
            <ul className="flex justify-around">
                <li className="mx-2"><a href="#">Accueil</a></li>
                <li className="mx-2"><a href="#">Liste par niveau</a></li>
                <li className="mx-2"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}


export default Nav;