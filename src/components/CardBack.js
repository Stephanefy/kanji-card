import React from 'react';

import './cardFace.css';

export default function CardBack({ kanjiInfo, fetchRandomKanjis }) {

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
            <div className="card-face-height w-64 mb-5 rounded shadow-xl border-8 border-yellow-500 bg-white">
                <div className="flex justify-center ">
                {kanjiInfo.category ? <p className="font-bold text-5xl">Catégorie: {kanjiInfo.category}</p> : <p className="text-center font-semibold">Cliquez pour afficher un caractère et ses informations</p>} 
                </div>
                <div>
                    <p className="text-center text-6xl">{kanjiInfo.character}</p>
                </div>
                <div className="flex justify-center items-center mt-6 h-auto">
                     <div className="font-semibold text-center flex flex-col">
                         <p className="text-1xl"><span className="text-center font-semibold">{kanjiInfo.meaning}</span></p>
                        {kanjiInfo.kunyomi && <p className="text-center">Kun yomi: {kanjiInfo.kunyomi}</p>}
                        {kanjiInfo.onyomi && <p className="text-center">On yomi: {kanjiInfo.onyomi}</p>}
                    </div>
                </div>
              
                                  
            </div>
        </>
    )
}
