import React, { useEffect, useState } from 'react'
import '../pages/kanjis/kanjiListCard.css'
import './Modal.css'
import { MdOutlineLibraryAdd } from 'react-icons/md'

const Modal = ({ setIsOpen, selectedKanji }) => {
    const [kanji, setKanji] = useState(null)
    const [error, setError] = useState(false)
    const [learningList, setLearningList] = useState(JSON.parse(localStorage.getItem('learningList')))

    useEffect(() => {
        fetch(`https://kanjiapi.dev/v1/kanji/${selectedKanji}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setKanji(data)
                console.log(data)
            })
            .catch((err) => {
                setError(true)
            })
    }, [])


    useEffect(() => {
        console.log(learningList)
        localStorage.setItem('learningList', JSON.stringify(learningList))

       
    }, [learningList])



    return (
        <div
            className="h-screen w-full flex flex-col justify-center items-center sm:py-12 fixed z-10"
            style={{ background: 'rgba(0, 0, 0, 0.2) 100% 100%' }}
        >
            {!kanji ? (
                <div className="flex justify-center">
                    <span className="loader"></span>
                </div>
            ) : kanji.meanings && !error ? (
                <div className="py-auto w-4/12 sm:max-w-xl sm:mx-auto">
                    <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg relative">
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
                                {kanji.grade}e année
                            </h2>
                        </div>
                        <div className="bg-gray-200 w-full flex flex-col items-center">
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-gray-800 text-6xl">
                                    {kanji.kanji}
                                </span>
                            </div>
                            <div className="w-3/4 flex flex-col">
                                <div
                                    rows="3"
                                    className="p-4 text-gray-500 rounded-xl resize-none"
                                >
                                    <ul className="text-2xl">
                                        <li>Niveau JLPT: {kanji.jlpt}</li>
                                        <li className="bg-red-600 p-3 text-white">
                                            Lecture Kun: {kanji.kun_readings}
                                        </li>
                                        <li className="bg-gray-800 p-3 text-white">
                                            Lecture On: {kanji.on_readings}
                                        </li>
                                        <li className="bg-white p-3">
                                            Définitions:{' '}
                                            {kanji.meanings.map((m) => (
                                                <p className="text-base">{m}</p>
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
                                        setLearningList(prevState => prevState ? [...prevState, kanji, kanji.kanji] : [kanji,kanji.kanji])
                                        setTimeout(() => {
                               
                                            setIsOpen(false)
                                        }, 500)
                                        }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
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
