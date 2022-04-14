import React, { useEffect, useState } from 'react'
import '../pages/kanjis/kanjiListCard.css'

const Modal = ({ setIsOpen, selectedKanji }) => {


    const [kanji, setKanji] = useState(null)

    useEffect(() => {



        fetch(`https://kanjiapi.dev/v1/kanji/${selectedKanji}`,{
            method:"GET"
        })
        .then((response) => response.json())
        .then((data) => {
            setKanji(data)
            console.log(data)
        })
    }, [])



  return (
    <div 
        class="h-screen w-full flex flex-col justify-center items-center sm:py-12 fixed z-10" 
        onClick={() => setIsOpen(false)}
        style={{background:'rgba(0, 0, 0, 0.2) 100% 100%'}}
        >
        {!kanji ? (
            <div className='flex justify-center'>
                <span class="loader"></span>
            </div>
        ) : (
            <div class="py-auto w-4/12 sm:max-w-xl sm:mx-auto">
                <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                <div class="px-12 py-5">
                    <h2 class="text-gray-800 text-3xl font-semibold  flex justify-center">{kanji.grade}e année</h2>
                </div>
                <div class="bg-gray-200 w-full flex flex-col items-center">
                    <div class="flex flex-col items-center py-6 space-y-3">
                    <span class="text-gray-800 text-6xl">{kanji.kanji}</span>
                    </div>
                    <div class="w-3/4 flex flex-col">
                    <div rows="3" class="p-4 text-gray-500 rounded-xl resize-none">
                        <ul className='text-2xl'>
                            <li>Niveau JLPT: {kanji.jlpt}</li>
                            <li>Lecture Kun: {kanji.kun_readings}</li>
                            <li>Lecture On: {kanji.on_readings}</li>
                            <li className='bg-white p-3'>Définitions: {kanji.meanings.map(m => (
                                <p className='text-base'>{m}</p>
                            ))}</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="h-20 flex items-center justify-center">
                    <button className="text-gray-600">Fermer</button>
                </div>
                </div>

                <div class="mt-8 text-gray-700">
                Crédits <a class="font-bold" href="https://dribbble.com/shots/12052834-Rating-popup">Goga</a>
                </div>
            </div>

        )}
        </div>
        )
}

export default Modal