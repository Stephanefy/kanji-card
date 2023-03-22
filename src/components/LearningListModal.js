import React, { useEffect, useState, useContext } from 'react'
import './LearningListModal.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Modal from './Modal'
import { LearningListContext } from '../context/LearningListContext'
import { Link } from 'react-router-dom'

const LearningListModal = ({ setIsOpen }) => {
    const [error, setError] = useState(false)
    const [isOpen, setisOpen] = useState(false)
    const [selectedKanji, setSelectedKanjis] = useState('')

    const { learningList, setLearningList: setLearningListContext } =
        useContext(LearningListContext)

    useEffect(() => {
        localStorage.setItem('learningList', JSON.stringify(learningList))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleFlushLearningList = () => {
        setLearningListContext([])
        localStorage.removeItem('learningList')
    }

    return (
        <>
            <div
                className="learning-modal h-screen w-full flex flex-col justify-center items-center learning-list-modal"
                style={{ background: 'rgba(0, 0, 0, 0.2) 100% 100%' }}
            >
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
                                            <span className="text-align-center">
                                                traits
                                            </span>
                                            <span>rang</span>
                                        </li>
                                        {learningList?.map((i, idx) => (
                                            <li
                                                key={idx}
                                                className="kanji-item bg-red-600 p-3 text-white flex justify-between my-2"
                                                onClick={() => {
                                                    console.log('is Clicked')
                                                    setSelectedKanjis(i.kanji)
                                                    setisOpen(true)
                                                }}
                                            >
                                                <span>{i.kanji}</span>
                                                <span>{i.stroke_count}</span>
                                                <span>{i.grade}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="h-20 flex items-center justify-between p-3">
                            <div>
                                <button onClick={handleFlushLearningList}>
                                    <RiDeleteBin6Fill size={25} />
                                </button>
                            </div>
                            <Link to="/quizz"nclassName="add-button">
                                <span onClick={() => setIsOpen(false)} className='text-2xl'>commencer le quizz</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal setIsOpen={setisOpen} selectedKanji={selectedKanji} />
            )}
        </>
    )
}

export default LearningListModal
