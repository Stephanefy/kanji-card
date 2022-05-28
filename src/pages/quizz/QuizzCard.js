import React, { useState, useEffect } from 'react'
import '../../components/card/Card.css'
import { Transition } from 'react-transition-group'

const QuizzCard = ({ kanjiDetails, changeCard }) => {
    const defaultStyles = {
        transition: `opacity 500ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    }

    const { kanji } = kanjiDetails

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
                    <div className="h-32 flex justify-center items-center">
                        <p className="text-5xl cheerful-text">
                            Testez vos connaissances
                        </p>
                    </div>
                    <div className="flex justify-center w-full">
                        <form className="flex flex-col">
                            <label htmlFor="meaning">
                                Quelle est le sens de ce caractère ?
                            </label>
                            <input 
                                className="border-red-200 border-4"
                                id="meaning"
                                type="text" 
                            />
                        </form>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default QuizzCard
