import React from 'react';

import './Nav.css';

 const Nav = () => {
    return (
        <nav className="nav-bar w-2/3 h-16 flex justify-between items-center">
            <div>
                Logo
            </div>
            <ul className="flex justify-around">
                <li className="mx-2">Accueil</li>
                <li className="mx-2">Liste par niveau</li>
                <li className="mx-2">Contact</li>
            </ul>
        </nav>
    )
}


export default Nav;