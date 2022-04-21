import React, { useEffect, useState } from 'react';
import './LearningListModal.css';
import {RiDeleteBin6Fill} from 'react-icons/ri'

const LearningListModal = ({ setIsOpen }) => {
    const [error, setError] = useState(false)
    const [isOpen, setisOpen] = useState(false)
    const [learningList, setLearningList] = useState(
        JSON.parse(localStorage.getItem('learningList'))
    )



    const handleFlushLearningList = () => {
        setLearningList([])
        localStorage.removeItem('learningList')
    }

    return (
                    <div
                        className="h-screen w-full flex flex-col justify-center items-center learning-list-modal"
                        style={{ background: 'rgba(0, 0, 0, 0.2) 100% 100%' }}>
                        <div className="py-auto sm:w-10/12 xxl:w-4/12 sm:max-w-xl  sm:mx-auto">
                            <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg relative">
                                <button
                                    className="text-gray-600 absolute right-0 p-3"
                                    onClick={() => {
                                        setIsOpen(false)
                                        setError(false)
                                    }}
                                >
                                    X
                                </button>
                                <div className="px-12 py-5">
                                    <h2 className="text-gray-800 text-3xl font-semibold  flex justify-center">
                                        Ma liste d'apprentissage
                                    </h2>
                                </div>
                                <div className="bg-gray-200 w-full flex flex-col items-center">
                                    <div className="w-3/4 flex flex-col">
                                        <div
                                            rows="3"
                                            className="p-4 text-gray-500 rounded-xl resize-none"
                                        >
                                            <ul className="h-64 text-2xl overflow-auto">
                                                        <li className="text-gray-600 flex justify-between p-0">
                                                                <span>caractères</span>
                                                                <span className='text-align-center'>traits</span>
                                                                <span>rang</span>
                                                            </li>
                                                {   
                                                    learningList?.map((i, idx) => (
                                                        idx % 2 === 0 ? (
                                                            <li className="bg-red-600 p-3 text-white flex justify-between">
                                                                <span>{i.kanji}</span>
                                                                <span>{i.stroke_count}</span>
                                                                <span>{i.grade}</span>
                                                            </li>

                                                        ) : (
                                                            <li className="bg-gray-800 p-3 text-white flex justify-between">
                                                            </li>

                                                        )

                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-20 flex items-center justify-between p-3">
                                    <button className="add-button">commencer le quizz</button>
                                    <div>
                                        <button onClick={handleFlushLearningList}><RiDeleteBin6Fill size={25}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    )
            
    
}

export default LearningListModal
