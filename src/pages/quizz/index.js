import React, { useEffect, useState } from 'react'
import QuizzCard from './QuizzCard'
import { Link } from 'react-router-dom'
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
            setCardIndex((prev) => prev + 1)
            setChangerCard(false)
        }
    }

    const handleChangePreviousCard = () => {
        if (cardIndex > 0) {
            setCardIndex((prev) => prev - 1)
            setChangerCard(false)
        }
    }

    useEffect(() => {
        const learningList = localStorage.getItem('learningList') 
        console.log(learningList)
        
        if (learningList) {
            JSON.parse(learningList)?.filter(
                (_, index) => index % 2 === 0
            )
            setKanjiList(learningList)

        }

        setKanjiList(JSON.parse(learningList))

    }, [])


    return (
        <main className="min-h-screen">
            <section className="h-100 w-100 mt-64 md:mt-8 flex items-center justify-center flex-col p-4">
                
                {kanjiList ? kanjiList?.map((kanji, index) => {
                    if (cardIndex === index) {
                        return (
                            <div key={kanji}>
                                <QuizzCard
                                    kanjiDetails={kanji}
                                    changeCard={changeCard}
                                    randomMeaning={[
                                        ...kanjiList?.filter(
                                            (e, index, arr) =>
                                                index < 3 && e.kanji !== kanji.kanji
                                        ),
                                    ]}
                                    correctMeaning={kanji.meanings[0]}
                                />
                            </div>
                        )
                    }
                }): (
                    <>
                        <p className="text-white">
                            Aucune sélection de Kanji dans votre liste
                        </p>
                        <div className="btn-group mt-2">
                            <button className="nav-btn rounded-full bg-red-800 px-3 py-2">
                                <Link
                                    to="/les-kanjis"
                                    className="text-white p-2 mx-auto"
                                >
                                    Aller à la page Kanjis
                                </Link>
                            </button>
                        </div>
                    </>
                
                )}
                {kanjiList?.length > 0 ? (
                    <div className="flex justify-center w-full mx-auto">
                        <button
                            className="text-white nav-btn bg-red-800 rounded-full mx-5 p-4"
                            onClick={handleChangePreviousCard}
                        >
                            précédent
                        </button>
                        <button
                            className="text-white nav-btn bg-red-800 rounded-full mx-5 p-4"
                            onClick={handleChangeNextCard}
                        >
                            suivant
                        </button>
                    </div>
                ) : null 
                }
            </section>
        </main>
    )
}

export default QuizzIndexPage
