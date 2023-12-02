import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import Gakushu from './Gakushu'
import Joyou from './Joyou'
import Jinmeiyou from './Jinmeiyou'
import Card from '../../components/card/Card'
import './kanjiListCard.css'
import { LearningListContextProvider } from '../../context/LearningListContext'
import { TextInput } from 'flowbite-react'
import Magnifier from '../../components/svg/Magnifier'

const KangiGrade = [
    {
        title: '一',
    },
    {
        title: '二',
    },
    {
        title: '三',
    },
    {
        title: '四',
    },
    {
        title: '五',
    },
]

const KanjiListType = [
    {
        name: 'jouyou',
    },
    {
        name: 'jinmeiyou',
    },
    {
        name: 'gakushu',
    },
    {
        name: 'jlpt',
    },
]

const KanjisIndex = () => {
    const location = useLocation()

    console.log(location)

    const [grade, setGrade] = useState(0)
    const [selectedCollection, setSelectedCollection] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const onSelectKanjiCollection = (e) => {
        console.log(e.currentTarget.textContent)
        setSelectedCollection(e.currentTarget.textContent)
    }

    const pushToGrade = (params) => {
        navigate(`/gakushu-kanji/${params}`, { params: params })
    }

    const onSearch = (e) => {
        e.preventDefault()
        if (searchTerm === '') {
            setError(true)
            return
        }
        setIsOpen(true)
    }

    useEffect(() => {
        let timeOut = setTimeout(() => {
            setError(false)
        }, 1500)

        return () => {
            clearTimeout(timeOut)
        }
    }, [error])

    return (
        <div className="w-full h-full">
            <section className="min-h-screen flex md:flex-column items-center flex-wrap sm:flex-col">
                <div className="flex flex-col items-center md:mt-14 mx-auto">
                    <div>
                        {KanjiListType.map((b) => (
                            <button
                                key={b.name}
                                onClick={(e) => onSelectKanjiCollection(e)}
                                className="kanji-category-btn bg-red-800 text-white p-2 mx-2 rounded-full font-semibold"
                            >
                                {b.name === 'jouyou' && '常用'}
                                {b.name === 'gakushu' && '学習'}
                                {b.name === 'jinmeiyou' && '人名'}
                                {b.name === 'jlpt' && 'JLPT'}
                            </button>
                        ))}
                    </div>

                    <div className="relative mt-10">
                        <form onSubmit={onSearch}>
                            <TextInput
                                rightIcon={Magnifier}
                                size={'xl'}
                                className='text-3xl'
                                color="default"
                                type="search"
                                name="search"
                                placeholder="Rechercher"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        
                        </form>
                    </div>
                </div>
                {error && (
                    <span className="text-white mt-5">
                        Vous devez entrer le caractère recherché (Romaji non
                        accepté)
                    </span>
                )}
                <div className="flex justify-center items-center mt-5">
                    <h2 className="text-white text-5xl">
                        {selectedCollection === 'gakushu' && 'Gakushū kanji'}
                    </h2>
                </div>
                <ul className="flex justify-between mx-auto selection-cards">
                    {selectedCollection === '学習' &&
                        KangiGrade.map((grade, idx) => (
                            <li className="gakushu-cards">
                                <Gakushu
                                    grade={grade}
                                    idx={idx}
                                    pushToGrade={pushToGrade}
                                />
                            </li>
                        ))}
                    {selectedCollection === '常用' && (
                        <li>
                            <Joyou pushToGrade={pushToGrade} />
                        </li>
                    )}
                    {selectedCollection === '人名' && (
                        <li>
                            <Jinmeiyou pushToGrade={pushToGrade} />
                        </li>
                    )}
                    {selectedCollection === 'JLPT' && (
                        <li>
                            <Card />
                        </li>
                    )}
                </ul>
                {isOpen && (
                    <Modal
                        setIsOpen={setIsOpen}
                        selectedKanji={searchTerm}
                        setError={setError}
                        error={error}
                    />
                )}
            </section>
        </div>
    )
}

export default KanjisIndex
