import React, {useState} from 'react';
import { TiThMenu } from "react-icons/ti";
import { TiTimes} from "react-icons/ti";
import MobileMenu from './Mobile-menu';
import HaruNatsuMode from '../HaruNatsuMode/index'
import { useRouteMatch, Link } from 'react-router-dom';
import NavLink from './NavLink';

import { ReactComponent as ReactLogo} from '../images/kanji-card-app-logo.svg'


import './Nav.css';

 const Nav = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <>
        <nav className="nav-bar w-full flex justify-between items-center">
            <div className="logo">
                <ReactLogo width="130" height="130" />
            </div>
            <div className='pl-32'>
                <ul className="hidden md:flex flex-initial w-full px-auto">
                    <li className="mx-2"><NavLink to="/" label="Accueil" activeOnlyWhenExact={true}/></li>
                    <li className="mx-2"><NavLink to="/les-kanjis" label="Les Kanjis"/></li>
                    {/* <li className="mx-2"><Link to="#">Quizz</Link></li> */}
                </ul>

            </div>
            <div>
                <HaruNatsuMode/>
            </div>

            <div className="flex md:hidden" onClick={handleClick}>
                {open ? <TiTimes className="menu-icon-open" /> : <TiThMenu className="menu-icon" /> }
            </div>
        </nav>
        {open && <MobileMenu/>}
        </>
    )
}


export default Nav;