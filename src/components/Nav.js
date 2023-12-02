import React, {useState , useContext} from 'react';
import { TiThMenu } from "react-icons/ti";
import { TiTimes} from "react-icons/ti";
import MobileMenu from './Mobile-menu';
import HaruNatsuMode from '../HaruNatsuMode/index'
import { useRouteMatch, Link } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize'
import { LearningListContext } from '../context/LearningListContext'
import { Navbar } from 'flowbite-react';


import { ReactComponent as Logo} from '../images/kanji-card-app-logo.svg'



import './Nav.css';

 const Nav = () => {

    const [open, setOpen] = useState(false)

    const windowSize = useWindowSize()

    const handleClick = () => {
        setOpen(!open)
    }

    const { learningList } = useContext(LearningListContext)


    return (
        <>
        <Navbar id="header-nav" className="w-12/12 flex items-center justify-between z-50 py-0">
            <Navbar.Brand className="logo">
                <Logo width="130" height="130" />
            </Navbar.Brand>
            <div className='flex items-center'>
                    <Navbar.Collapse className="hidden md:flex list-none w-full px-auto mr-9">
                        <li className="mx-2 cursor-pointer text-1xl hover:transform hover:scale-110 font-bold ease-in duration-100 text-slate-700"><Link to="/" label="Accueil" >Accueil</Link></li>
                        <li className="mx-2 cursor-pointer text-1xl hover:transform hover:scale-110 font-bold ease-in duration-100 text-slate-700"><Link to="les-kanjis" label="Les Kanjis">Les Kanjis</Link></li>
                        {/* <li className="mx-2 cursor-pointer text-1xl hover:transform hover:scale-110 font-bold ease-in duration-100 text-slate-700"><Link to="dictionnaire" label="Dictionnaire">Dictionnaire</Link></li> */}
                       { learningList?.length > 2 && <li className="mx-2 cursor-pointer text-1xl hover:transform hover:scale-110 font-bold ease-in duration-100 text-slate-700"><Link to="quizz" label="Quizz">Quizz</Link></li> }
                    </Navbar.Collapse>

                <div>
                    {windowSize.width > 560 && <HaruNatsuMode/> }
                </div>
            </div>

            <div className="flex md:hidden" onClick={handleClick}>
                {open ? <TiTimes className="menu-icon-open z-50" /> : <TiThMenu className="menu-icon z-50" /> }
            </div>
        </Navbar>
        {open && <MobileMenu setOpen={setOpen}/>}
        </>
    )
}


export default Nav;