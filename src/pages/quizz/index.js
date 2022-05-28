import React, { useEffect, useState } from 'react'
import QuizzCard from './QuizzCard';
import { Link } from 'react-router-dom';
import './quizz.css'

const QuizzIndexPage = () => {

    const [kanjiList, setKanjiList] = useState([])  
    const [cardIndex, setCardIndex] = useState(0)
    const [changeCard, setChangerCard] = useState(false)




    useEffect(() => {
        setChangerCard(true)
        console.log('card index', cardIndex)
    }, [cardIndex])

    const handleChangeNextCard = () => {
        if (cardIndex < kanjiList.length - 1) {
            setCardIndex(prev => prev + 1)
            setChangerCard(false)
        }
    }

    const handleChangePreviousCard = () => {
        if (cardIndex > 0 ) {
                setCardIndex(prev => prev - 1)
                setChangerCard(false)
        }
    }

    useEffect(() => {
      const learningList = localStorage.getItem('learningList') && JSON.parse(localStorage.getItem('learningList')).filter((_,index) => index % 2 === 0)
      
      setKanjiList(learningList)
      console.log(learningList)
    }, [])



    return (
        <main className="h-screen">
            <section className="h-100 w-100 mt-64 flex items-center justify-center flex-col">
                <div>
                    {
                            kanjiList?.map((kanji, index) => {
                                if(cardIndex === index){
                                    return <QuizzCard 
                                    kanjiDetails={kanji}
                                    changeCard={changeCard}
                                    />
                                }
                            })
                        }
                        {
                            !kanjiList && (
                                <>
                                    <p className="text-white">Aucune sélection de Kanji dans votre liste</p>
                                    <div className="btn-group mt-2">
                                    <button className="nav-btn rounded-full bg-red-800">
                                        <Link to="/les-kanjis" className="text-white p-2 mx-auto">Aller à la page Kanjis</Link>
                                    </button>
                                    </div>
                                </>
                            )
                        }
                </div>
                {
                    kanjiList &&  (
                        <div className="flex justify-center w-full mx-auto">
                            <button className="nav-btn bg-red-800 rounded-full mx-5" onClick={handleChangePreviousCard}>précédent</button>
                            <button className="nav-btn bg-red-800 rounded-full mx-5" onClick={handleChangeNextCard}>suivant</button>
                        </div>

                    )
                }
            </section>
        </main>
    )
}


export default QuizzIndexPage;