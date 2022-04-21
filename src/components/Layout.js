import React, {useState} from 'react'
import Footer from './Footer';
import Nav from './Nav';
import { Link } from 'react-router-dom'
import LearningListModal from './LearningListModal';
import { useWindowSize } from '../hooks/useWindowSize';
import HatsuNatsuMode from '../HaruNatsuMode/index'

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);


    const windowsSize = useWindowSize()

    return (
        <div className='h-full'>
            <header id="header-nav" className='w-full h-24 flex justify-center'>
            <Nav link={Link} />
            </header>
            {children}
            <Footer/>
            {windowsSize.width < 560 && ( 
                    <HatsuNatsuMode/> 
            )}
            {isOpen ? <LearningListModal setIsOpen={setIsOpen} /> : <button className='z-50 list-btn text-white' onClick={() => setIsOpen(true)}>Liste</button>}
      </div>  
    )
}

export default Layout
