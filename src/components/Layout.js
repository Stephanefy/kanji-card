import React from 'react'
import Footer from './Footer';
import Nav from './Nav';
import { Link } from 'react-router-dom'


const Layout = ({children}) => {
    return (
        <div className="App">
            <header id="header-nav" className='w-full h-24 flex justify-center'>
            <Nav link={Link} />
            </header>
            {children}
            <Footer/>
      </div>  
    )
}

export default Layout
