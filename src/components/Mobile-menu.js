import React from 'react';
import { Link } from 'react-router-dom';
const MobileMenu = () => {
    return (
        <>
            <ul className="mobile-menu h-2/6">
                    <li className="mx-2"><Link to="/" label="Accueil"/>Accueil</li>
                    <li className="mx-2"><Link to="/les-kanjis" label="Les Kanjis"/>Les Kanjis</li>
                    <li className="mx-2"><Link to="/dictionnaire" label="Dictionnaire"/>Dictionnaire</li>
                    <li className="mx-2"><Link to="/quizz" label="Quizz">Quizz</Link></li>
            </ul>
        </>
    )
}


export default MobileMenu;