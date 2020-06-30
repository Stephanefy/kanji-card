// KisetsuMode/index.js

import React, { useState, useEffect} from 'react';

import '../styles/haru-theme.css';
import '../styles/natsu-theme.css';

import './index.css';


const KisetsuModeToggle = () => {
    const [isHaru, setIsHaru] = useState(localStorage.getItem("theme") === "haru" ? true : false);
    // const [isNatsu, setIsNatsu] = useState(localStorage.getItem("theme") === "natsu" ? true : false);
    // const [isAki, setIsAki] = useState(localStorage.getItem("theme") === "aki" ? true : false)

    useEffect(() => {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    },[]);

    const toggleHaruNatsuChange = () => {
        if (isHaru === false) {
          localStorage.setItem("theme", "haru");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsHaru(true);
        } else {
          localStorage.setItem("theme", "natsu");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsHaru(false)  
      }
    }

      return (
        <>
        <div className='flex flex-col'>
        <div className='flex justify-center w-16 mr-1'>
          {
            isHaru ? <span className='text-black'>春</span> : <span className='text-black'>夏</span>
          }
          
        </div>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={isHaru}
              onChange={() => toggleHaruNatsuChange()}
            />
            <span className="slider round" />
          </label>
        </div>
     

       
        </>
      )
}

export default KisetsuModeToggle;