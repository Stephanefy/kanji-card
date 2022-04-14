// KisetsuMode/index.js

import React, { useState, useEffect} from 'react';

import '../styles/haru-theme.css';
import '../styles/natsu-theme.css';
import '../styles/aki-theme.css';
import '../styles/fuyu-theme.css';

import './index.css';

const seasons = [[0,1,2], [3,4,5], [6,7,8], [9,10,11]]

const KisetsuModeToggle = () => {
    const [isHaru, setIsHaru] = useState(localStorage.getItem("theme") === "haru" ? true : false);
    const [isNatsu, setIsNatsu] = useState(localStorage.getItem("theme") === "natsu" ? true : false);
    const [isAki, setIsAki] = useState(localStorage.getItem("theme") === "aki" ? true : false)
    const [isFuyu, setIsFuyu] = useState(localStorage.getItem("theme") === "aki" ? true : false)

    useEffect(() => {

      const month = new Date().getMonth()

      seasons[1].includes(month) && localStorage.setItem("theme", "haru")
      seasons[2].includes(month) && localStorage.setItem("theme", "natsu")
      seasons[3].includes(month) && localStorage.setItem("theme", "aki")
      seasons[0].includes(month) && localStorage.setItem("theme", "fuyu")

      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    },[]);

    

    const toggleHaruNatsuChange = (e, currentMonth) => {
      

        if (e.target?.value === "haru") {
          
          localStorage.setItem("theme", "haru");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsHaru(true);
            setIsNatsu(false);
            setIsAki(false);
            setIsFuyu(false);
        } 
        if (e.target?.value === "natsu"){
          localStorage.setItem("theme", "natsu");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsHaru(false);  
            setIsNatsu(true);
            setIsAki(false);
            setIsFuyu(false);

        }
        if (e.target?.value === "aki"){
          localStorage.setItem("theme", "aki");
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsHaru(false); 
            setIsNatsu(false);
            setIsAki(true);
            setIsFuyu(false);
        }
        if (e.target?.value === "fuyu" ){
          localStorage.setItem("theme", "fuyu" );
          document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            setIsHaru(false)  
            setIsNatsu(false)
            setIsAki(false) 
            setIsFuyu(true)
        }
    }





      return (
        <>
        <div className='flex flex-col'>
        <div className="switch-parent">

        <label className="switch">
            <input
              name="kisetsu"
              id="haru"
              type="radio"
              value="haru"
              onClick={(e) => toggleHaruNatsuChange(e)}
            />
            <span className='switch-kanji font-bold text-white'>春</span> 
            <span className="slider round" />
          </label>
          <label className="switch">

            <input
              name="kisetsu"
              id="natsu"
              type="radio"
              value="natsu"
              onClick={(e) => toggleHaruNatsuChange(e)}
            />
            <span className='switch-kanji font-bold text-white'>夏</span> 
            <span className="slider round" />
          </label>

          <label className="switch">

            <input
              name="kisetsu"
              id="aki"
              type="radio"
              value="aki"
              onClick={(e) => toggleHaruNatsuChange(e)}
            />
            <span className='switch-kanji font-bold text-white'>秋</span> 
            <span className="slider round" />
          </label>

          <label className="switch">

            <input
              name="kisetsu"
              id="fuyu"
              type="radio"
              value="fuyu"
              onClick={(e) => toggleHaruNatsuChange(e)}
            />
            <span className='switch-kanji font-bold text-white'>冬</span> 

            <span className="slider round" />
          </label>
        </div>
        </div>
     

       
        </>
      )
}

export default KisetsuModeToggle;