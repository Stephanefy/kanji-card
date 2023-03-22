import React from 'react';
import { Link } from 'react-router-dom';
const MobileMenu = ({setOpen}) => {
    return (
        <>
            <ul className="mobile-menu h-2/6 transform translate-y-28 ease-in duration-300">
                    <li onClick={() => setOpen(false)} className="mx-2"><Link to="/" label="Accueil">Accueil</Link></li>
                    <li onClick={() => setOpen(false)} className="mx-2"><Link to="/les-kanjis" label="Les Kanjis">Les Kanjis</Link></li>
                    <li onClick={() => setOpen(false)} className="mx-2"><Link to="/dictionnaire" label="Dictionnaire">Dictionnaire</Link></li>
                    <li onClick={() => setOpen(false)} className="mx-2"><Link to="/quizz" label="Quizz">Quizz</Link></li>
            </ul>
        </>
    )
}


export default MobileMenu;