import React, { useState, useEffect } from 'react'
import '../../components/card/Card.css'
import { Transition } from 'react-transition-group'



function shuffle(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        arr[i] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    return arr
}


const QuizzCard = ({ kanjiDetails, changeCard, randomMeaning, correctMeaning }) => {

    
    let answerArray = randomMeaning.length > 1 && randomMeaning?.map((meaning, index) => {
        return meaning.meanings[0]
    }).concat(correctMeaning)

    const [correctAnswersNum, setCorrectAnswersNum] = useState(0);



    console.log('correctMeaning', correctMeaning)
    console.log('randomMeaning', randomMeaning)

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
                if (answerArray.includes(element)) {
                    setCorrectAnswersNum(prev => prev + 1)
                }
            })
        }

    }, [])

   

    



    return (
        <Transition in={changeCard} transition={500} timeout={300}>
            {(state) => (
                <div
                    className="quizz-card-face mx-auto w-full mb-5 rounded shadow-xl"
                    style={{
                        ...defaultStyles,
                        ...transitionStyles[state],
                    }}
                >
                    <div className="flex justify-center">
                        <p className="text-8xl">{kanji}</p>
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
                                randomMeaning.length > 1 && shuffle(answerArray)?.map((meaning, index) => (
                                    <div key={index} className="flex justify-between items-center w-full">
                                        <input
                                            label={meaning} 
                                            type="checkbox" 
                                            value={meaning} 
                                            />
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
