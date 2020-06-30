import React, {useState, useEffect} from 'react';
import BackgroundPaper from './components/BackgroundPaper';
import HaruNatsuMode from './HaruNatsuMode/index';
import AkiFuyuMode from './AkiFuyuMode/index';
import Card from './components/Card';

import './styles/App.css'
import './styles/haru-theme.css';

function App() {
  
  const [theme, setTheme] = useState(localStorage.setItem('theme','haru'));


  return (
    <div className="App">
      <header>
      <div className='w-full flex justify-end mr-2 p-10'> 
        <HaruNatsuMode/>
        <AkiFuyuMode/>
      </div>
      </header>
      
      <Card />
     
    
    </div>
  );
}

export default App;
