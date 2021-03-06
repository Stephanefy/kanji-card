import React from 'react';
import HaruNatsuMode from './HaruNatsuMode/index';
import AkiFuyuMode from './AkiFuyuMode/index';

import Nav from './components/Nav';
import Card from './components/Card';
import Footer from './components/Footer';

import './styles/App.css'
import './styles/haru-theme.css';

function App() {


  return (
    <>
    <div className="App">
      <header id="header-nav" className='w-full h-24 flex justify-center'>
        <Nav />
      </header>
        <div className='w-full flex flex-col justify-center items-center mt-24'>
        <h1 className='text-white font-semibold mb-16 text-5xl'>Choisissez une ambiance saisonnière</h1>
          <div className="flex">        
          <HaruNatsuMode/>
          <AkiFuyuMode/>
          </div>

        </div>
      
      <Card />
      <Footer/>
    </div>         
   
    </>
  );
}

export default App;
