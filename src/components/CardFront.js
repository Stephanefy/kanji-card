import React from "react";

import "./cardFace.css";

export default function CardFront({character, fetchRandomKanjis}) {
  return (
    <>
      <div className="card-face w-full mb-5 rounded shadow-xl border-8 border-yellow-500 bg-white">
        <div className="flex justify-center">
          {character.category ? (
            <p className="font-bold text-5xl p-4">
              Catégorie: {character.category}
            </p>
          ) : (
            <div className="flex flex-col h-64 justify-center p-2 mt-10">
              <p className="text-center font-semibold mt-5">
                <span role='img' aria-label='emoji'>👆</span>Une fois la catégorie choisie 
                <br/>    
                <p className='mt-3'><span role='img' aria-label='emoji'>👉</span>cliquez sur '意味' pour découvrir la signification et les differentes lectures du caractère<br/></p>
                <p className='mt-3'><span role='img' aria-label='emoji'>👉</span>cliquez sur '次' pour découvrir afficher le prochain caractère<br/></p>
                <p className='mt-3'><span role='img' aria-label='emoji'>👉</span>cliquez sur '前' pour découvrir retourner au caractère précédent<br/></p>
              </p>
              <div className='w-full flex justify-center mt-5'>
                <p className='cheerful-text'>皆さん頑張りましょう！</p>
                <p><span role='img' aria-label='emoji'>💪</span></p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white">
          <p className="text-center text-6xl text-black">
            {character.character}
          </p>
        </div>
      </div>
    </>
  );
}
