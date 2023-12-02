import React, { useEffect, useState, useContext } from 'react'
import '../pages/kanjis/kanjiListCard.css'
import './Modal.css'
import { MdOutlineLibraryAdd } from 'react-icons/md'
import { LearningListContext } from '../context/LearningListContext'
import { Card } from 'flowbite-react'

const Modal = ({ setIsOpen, selectedKanji }) => {
    const [kanji, setKanji] = useState(null)
    const [error, setError] = useState(false)
    
    const { learningList, setLearningList } = useContext(LearningListContext)

    useEffect(() => {
        fetch(`https://kanjiapi.dev/v1/kanji/${selectedKanji}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    throw new Error()
                }
                setKanji(data)
            })
            .catch((err) => {
                console.log('reached')
                setError(true)
                setIsOpen(false)
            })
    }, [])

 
   

    const handleCloseModal = (e) => {

        setIsOpen(false)
        setError(false)
    }

    const handleAddToLearningList = () => {
        if (learningList) {
            setLearningList([...learningList, kanji])
        } else {
            setLearningList([kanji])
        }
        handleCloseModal()
    }

    useEffect(() => {
        console.log(error)

        let timeOut = setTimeout(() => {
            setError(false)
        }, 2500)

        return () => {
            clearTimeout(timeOut)
        }
    }, [error])

    return (
        <div
            className="modal sm:h-64 min-h-screen w-full flex flex-col justify-center items-center fixed top-0"
            style={{ background: 'rgba(0, 0, 0, 0.2) 100% 100%' }}
        >
            {!kanji ? (
                <div className="flex justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                kanji.meanings &&
                !error && (
                    <div className="w-6/12">
                        <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg relative">
                            <button
                                className="text-gray-600 absolute right-0 p-2"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                            <div className="px-5 py-5">
                                <h2 className="text-gray-800 text-3xl font-semibold  flex justify-center">
                                    {kanji.grade}e année
                                </h2>
                            </div>
                            <div className="bg-gray-200 w-full flex flex-col items-center">
                                <div className="flex flex-col items-center py-4 space-y-3">
                                    <span className="bg-white p-6 rounded-lg text-gray-800 text-6xl">
                                        {kanji.kanji}
                                    </span>
                                </div>
                                <div className="w-full flex flex-col rounded-md">
                                    <div
                                        rows="3"
                                        className="p-2 text-gray-500 rounded-xl resize-none w-full"
                                    >
                                        <ul className="text-2xl flex flex-col w-full rounded-lg">
                                            <li>Niveau JLPT: {kanji.jlpt}</li>
                                            <li className="bg-red-600 p-3 text-white rounded-tr-lg rounded-tl-lg">
                                                Lecture Kun:{' '}
                                                {kanji.kun_readings}
                                            </li>
                                            <li className="bg-gray-800 p-3 text-white">
                                                Lecture On: {kanji.on_readings}
                                            </li>
                                            <li className="bg-white p-3">
                                                Définitions:{' '}
                                                {kanji.meanings.map((m) => (
                                                    <p className="text-base">
                                                        {m}
                                                    </p>
                                                ))}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="h-20 flex items-center justify-center">
                                <button className="add-button">
                                    <MdOutlineLibraryAdd
                                        className="add-button-icon"
                                        size={30}
                                        onClick={() => {
                                            handleAddToLearningList()
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
            {error && (
                <p className="text-white font-semibold">
                    Aucune information concernant ce caractère <br />
                    Veuillez noter qu'il est impossible à l'heure actuelle de
                    rechercher un caractère en Romaji
                </p>
            )}
        </div>
    )
}

export default Modal
