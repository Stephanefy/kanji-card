import React from 'react';
import NavLink from './NavLink';

const MobileMenu = () => {
    return (
        <>
            <ul className="mobile-menu">
                    <li className="mx-2"><NavLink to="/" label="Accueil" activeOnlyWhenExact={true}/></li>
                    <li className="mx-2"><NavLink to="/les-kanjis" label="Les Kanjis"/></li>
                    <li className="mx-2"><NavLink to="/dictionnaire" label="Dictionnaire"/></li>
                    <li className="mx-2"><NavLink to="/quizz" label="Quizz"></NavLink></li>
            </ul>
        </>
    )
}


export default MobileMenu;