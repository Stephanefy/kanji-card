import React from 'react';

import './cardFace.css';


export default function CardFront({ character, fetchRandomKanjis }) {

    return (

        <>
        
            <div className="card-face w-full mb-5 rounded shadow-xl border-8 border-yellow-500 bg-white">
                    <div className="flex justify-center">
                            {character.category ? <p className="font-bold text-5xl p-4">Catégorie: {character.category}</p> :<div className='flex flex-col h-64 justify-center p-4'><p className="text-center font-semibold">Cliquez sur "Nouveau Kanji" pour afficher le premier caractère, cliquez ensuite sur "tourner la carte" pour afficher sa signifcation et ses différentes lectures</p></div>} 
                    </div>
                    <div className='bg-white'>
                        <p className="text-center text-6xl text-black">{character.character}</p>
                    </div>
            </div>
           
        </>
    )
}


    