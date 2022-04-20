import React, {useState} from 'react'
import Footer from './Footer';
import Nav from './Nav';
import { Link } from 'react-router-dom'
import LearningListModal from './LearningListModal';

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='App'>
            <header id="header-nav" className='w-full h-24 flex justify-center'>
            <Nav link={Link} />
            </header>
            {children}
            <Footer/>
            {isOpen ? <LearningListModal setIsOpen={setIsOpen} /> : <button className='z-50 list-btn text-white' onClick={() => setIsOpen(true)}>Liste</button>}
      </div>  
    )
}

export default Layout
