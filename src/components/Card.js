import React from 'react';

import Tilt from 'react-parallax-tilt';
import ReactCardFlip from 'react-card-flip';
import Kanjis from '../data/kanji.json';
import CardFront from './CardFront';
import CardBack from './CardBack';


import './Card.css';




export default function CardContainer() {
    let [kanji, setKanji] = React.useState({})  
    let [isClicked, setIsClicked] = React.useState(false)

    let [flipped, setIsFlipped] = React.useState({isFlipped: false})   
    const [scale, setScale] = React.useState(1.15);

    const fetchKanjis = () => {
        let randomIndex = Math.floor(Math.random() * Kanjis.length) + 1
        setKanji(Object.assign({}, Kanjis[randomIndex]))
        setIsClicked(true)
    }

    const handleClick = (e) =>{
        e.preventDefault();
        setIsFlipped(!flipped)
    }

 



    return (

            <>
            
                    <div className="flex justify-center items-center">
                            <div className="px-3 py-3 flex justify-center flex-col">
                                <Tilt reset={true} perspective={1000} scale={scale}>
                                        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}> 
                                        <CardBack back kanjiInfo={kanji}  />
                                        <CardFront front character={kanji}  />
                                        </ReactCardFlip>    
                                </Tilt>
                                <div className='flex flex-col items-center justify-center'>
                                    <button className="card-button w-full md:w-30 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded mt-2" onClick={() => fetchKanjis()} type='button'>
                                    {
                                        isClicked ?  <p className='text-base'>Afficher un nouveau caractère</p> : <p className='text-base'>Afficher un caractère</p>
                                    }
                                    </button>
                                    {
                                       isClicked && <button className="card-button w-full md:w-30 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded mt-2" onClick={(e) => handleClick(e)}  type='button'>Tourner la carte</button>

                                    }

                                </div>
                           </div>
                           </div>
                           
            
            </>
       
  
      
        
     
    )
}
