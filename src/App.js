import React, {useState} from 'react';
import HaruNatsuMode from './HaruNatsuMode/index';
import AkiFuyuMode from './AkiFuyuMode/index';
import Card from './components/Card';
import Footer from './components/Footer';

import './styles/App.css'
import './styles/haru-theme.css';

function App() {
  
  const [theme, setTheme] = useState(localStorage.setItem('theme','haru'));


  return (
    <>
    <div className="App">
      <header>
      <div className='w-full flex justify-end mr-2 sm:mr-0'> 
        <HaruNatsuMode/>
        <AkiFuyuMode/>
      </div>
      </header>
      <Card />
    </div>         
    <Footer/>
    </>
  );
}

export default App;
