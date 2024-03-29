import React from 'react'

import './cardFace.css'

export default function CardBack({ kanjiInfo }) {
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
            <div className="card-face mb-5 rounded shadow-xl">
                <div className="flex justify-center">
                    {kanjiInfo.category ? (
                        <p className="font-bold text-2xl mt-24">
                            Catégorie: {kanjiInfo.category}
                        </p>
                    ) : (
                        <p className="text-center font-semibold">
                            <span role="img" aria-label="emoji">
                                ☝️
                            </span>
                            Choisissez une catégorie pour commencer !
                        </p>
                    )}
                </div>
                {kanjiInfo.category && (
                    <div className="bg-white text-black text-3xl">
                        <p className="text-center text-6xl">
                            {kanjiInfo.character}
                        </p>
                    </div>
                )}

                <div className="flex justify-center items-center mt-6 h-auto p-4">
                    <div className="font-semibold text-center flex flex-col">
                        <p className="text-1xl">
                            <span className="text-center font-semibold">
                                {kanjiInfo.meaning}
                            </span>
                        </p>
                        {kanjiInfo.kunyomi && (
                            <p className="text-center">
                                Kun yomi: {kanjiInfo.kunyomi}
                            </p>
                        )}
                        {kanjiInfo.onyomi && (
                            <p className="text-center">
                                On yomi: {kanjiInfo.onyomi}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
