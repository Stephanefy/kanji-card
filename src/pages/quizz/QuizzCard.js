import React, { useState, useEffect } from 'react'
import '../../components/card/Card.css'
import { Transition } from 'react-transition-group'

const QuizzCard = ({ kanjiDetails, changeCard, randomMeaning }) => {

    const [correctAnswersNum, setCorrectAnswersNum] = useState(0);


    const defaultStyles = {
        transition: `opacity 500ms ease-in-out`,
        opacity: 0,
    }
    const { kanji } = kanjiDetails


    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    }


    useEffect(() => {
        if(kanji) {
            kanjiDetails.meanings.forEach((element) => {
                if (randomMeaning.includes(element)) {
                    setCorrectAnswersNum(prev => prev + 1)
                }
            })
        }

    }, [])


    console.log(correctAnswersNum)


  

    console.log(randomMeaning)


    useEffect(() => {
        console.log(kanjiDetails)
    },[] )


    return (
        <Transition in={changeCard} transition={500}>
            {(state) => (
                <div
                    className="quizz-card-face mx-auto w-full mb-5 rounded shadow-xl"
                    style={{
                        ...defaultStyles,
                        ...transitionStyles[state],
                    }}
                >
                    <div className="flex justify-center">
                        <p className="text-5xl">{kanji}</p>
                    </div>
                    {/* character here*/}
                    <div className="bg-white">
                        <p className="text-center text-6xl text-black">
                            {/* character here*/}
                        </p>
                    </div>
                    <div className="h-32 flex flex-col justify-center items-center">
                        <p className="text-5xl cheerful-text">
                            Choisissez la ou les bonne(s) réponse(s)
                        </p>
                        <p>
                            {correctAnswersNum} {`réponse${correctAnswersNum > 1 ? "s" : ""} possible${correctAnswersNum > 1 ? "s" : ""}`}
                        </p>
                    </div>
                    <div className="flex justify-center w-full">
                        <form className="flex flex-col w-full">
                            {
                                randomMeaning.map(meaning => (
                                    <div className="flex justify-between items-center w-full">
                                        <input
                                            label={meaning} 
                                            type="checkbox" 
                                            value={meaning} />
                                        <label>
                                            {meaning}
                                        </label>
                                    </div>
                                ))
                            }
                        </form>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default QuizzCard
