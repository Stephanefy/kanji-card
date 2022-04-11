import React, {useState} from 'react';
import { TiThMenu } from "react-icons/ti";
import { TiTimes} from "react-icons/ti";
import MobileMenu from './Mobile-menu';

import { useRouteMatch, Link } from 'react-router-dom';

import { ReactComponent as ReactLogo} from '../images/kanji-card-app-logo.svg'


import './Nav.css';

 const Nav = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <>
        <nav className="nav-bar w-2/3 flex justify-between items-center">
            <div className="logo">
                <ReactLogo width="130" height="130" />
            </div>
            <ul className="hidden md:flex justify-around">
                <li className="mx-2"><Link to="/">Accueil</Link></li>
                <li className="mx-2"><Link to="/les-kanjis">Les Kanjis</Link></li>
                <li className="mx-2"><Link to="/quizz">Quizz</Link></li>
                <li className="mx-2"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="flex md:hidden" onClick={handleClick}>
                {open ? <TiTimes className="menu-icon-open" /> : <TiThMenu className="menu-icon" /> }
            </div>
        </nav>
        {open && <MobileMenu/>}
        </>
    )
}


export default Nav;