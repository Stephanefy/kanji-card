import React from 'react';

import Tilt from 'react-parallax-tilt';
import ReactCardFlip from 'react-card-flip';
import Kanjis from '../data/kanji.json';
import CardFront from './CardFront';
import CardBack from './CardBack';





export default function CardContainer() {
    let [kanji, setKanji] = React.useState({})  
    let [flipped, setIsFlipped] = React.useState({isFlipped: false})   
    const [scale, setScale] = React.useState(1.15);

    const fetchKanjis = () => {
        let randomIndex = Math.floor(Math.random() * Kanjis.length) + 1
        setKanji(Object.assign({}, Kanjis[randomIndex]))
        console.log(kanji)
    }

    const handleClick = (e) =>{
        e.preventDefault();
        setIsFlipped(!flipped)
    }




    return (

            <>
                    <div className="flex justify-center items-center h-screen">
                            <div className="px-6 py-4 flex justify-center flex-col">
                                <Tilt reset={true} perspective={1000} scale={scale}>
                                        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}> 
                                        <CardBack back kanjiInfo={kanji}  />
                                        <CardFront front character={kanji}  />
                                        </ReactCardFlip>    
                                </Tilt>
                                <div className="mt-16">
                                    <button className="w-30 mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => fetchKanjis()}  type='button'>Nouveau Kanji</button>
                                    <button className="w-30 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(e) => handleClick(e)}  type='button'>Tournez la carte</button>

                                </div>
                           </div>
                           </div>
                           
            
            </>
       
  
      
        
     
    )
}
