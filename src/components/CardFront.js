import React from 'react';

import './cardFace.css';


export default function CardFront({ character, fetchRandomKanjis }) {

     // Create state variables

// fetches data
// React.useEffect(() => {
//    const fetchData = () => {
//          api.getKanjiDetails()
//        .then((response )=>{
//            setResponseData(response.data) 
//        })
//        .catch((error) => {
//            console.log(error)
//        })
//    }
//    fetchData()
// }, [kanji])





    return (

        <>
        
            <div className="card-face w-full mb-5 rounded shadow-xl border-8 border-yellow-500 bg-white">
                    <div className="flex justify-center">
                            {character.category ? <p className="font-bold text-5xl">Catégorie: {character.category}</p> : <p className="text-center font-semibold">Cliquez pour afficher un caractère et ses informations</p>} 
                    </div>
                    <div>
                        <p className="text-center text-6xl">{character.character}</p>
                    </div>
            </div>
           
        </>
    )
}


    