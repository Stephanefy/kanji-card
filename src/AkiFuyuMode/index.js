// KisetsuMode/index.js

import React, { useState, useEffect} from 'react';


import '../styles/aki-theme.css';
import '../styles/fuyu-theme.css';
import './index.css';


const KisetsuModeToggle = () => {
    const [isAki, setIsAki] = useState(localStorage.getItem("theme") === "aki" ? true : false);
    // const [isNatsu, setIsNatsu] = useState(localStorage.getItem("theme") === "natsu" ? true : false);
    // const [isAki, setIsAki] = useState(localStorage.getItem("theme") === "aki" ? true : false)

    useEffect(() => {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    },[]);

    const toggleAkiFuyuChange = () => {
        if (isAki === false) {
          localStorage.setItem("theme", "aki");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsAki(true);
        } else {
          localStorage.setItem("theme", "fuyu");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsAki(false)  
      }
    }

      return (
        <>
           <div className='flex flex-col'>
        <div className='flex justify-center w-16 mr-1'>
          {
            isAki ? <span className='text-black mx-auto'>秋</span> : <span className='text-black'>冬</span>
          }
          
        </div>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => toggleAkiFuyuChange()}
          />
          <span className="slider-2 round" />
        </label>
        </div>
        </>
      )
}

export default KisetsuModeToggle;