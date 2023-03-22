import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '../../../node_modules/@splidejs/splide/dist/css/splide.min.css'
import Modal from '../../components/Modal'
import { SiCheckmarx } from 'react-icons/si'

import './kanjiListCard.css'

const KanjiList = () => {
    const location = useLocation()
    const { params } = useParams()

    const [kanjis, setKanjis] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedKanji, setSelectedKanjis] = useState('')

    const learningList = JSON.parse(localStorage.getItem('learningList'))

    useEffect(() => {
        console.log(params)
        if (params === 'jouyou') {
            fetch(`https://kanjiapi.dev/v1/kanji/jouyou`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => setKanjis(data))
        }
        if (params === 'jinmeiyou') {
            fetch(`https://kanjiapi.dev/v1/kanji/jinmeiyou`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => setKanjis(data))
        }
        if (params !== 'jinmeiyou' && params !== 'jouyou') {
            fetch(`https://kanjiapi.dev/v1/kanji/grade-${params}`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => setKanjis(data))
        }
    }, [params])

    const setPerPage = (p) => {
        if (p === '1' || '2' || '3' || '4' || '5') {
            return 30
        }
        if (p === 'jouyou') {
            return 5
        }
    }

    const KanjiListTitle = (locationParams) => {
        let title

        if (locationParams === 'jouyou') title = '常用漢字'
        if (locationParams === 'jinmeiyou') title = '人名用漢字'
        if (locationParams === 'jouyou') title = '常用漢字'
        if (locationParams === 1) title = 'Première année'
        if (locationParams === 2) title = 'Deuxième année'
        if (locationParams === 3) title = 'Troisième année'
        if (locationParams === 4) title = 'Quatrième année'
        if (locationParams === 5) title = 'Cinquième année'

        return title
    }

    function splitArrayIntoChunksOfLen(arr, len) {
        let chunks = []
        let i = 0
        let n = arr.length

        while (i < n) {
            chunks.push(arr.slice(i, (i += len)))
        }
        return chunks
    }

    console.log(
        splitArrayIntoChunksOfLen(kanjis, kanjis.length / 100).map((k) =>
            console.log(k)
        )
    )

    return (
        <section className="min-h-screen w-full flex md:flex-column items-center flex-wrap sm:flex-col">
      

            <div className="flex flex-col space-y-2 h-26 w-full justify-center items-center">
                <h2 className="text-white text-5xl mt-32">
                    {KanjiListTitle(params)}
                </h2>
                {kanjis.length !== 0 && (
                <p className="text-5xl font-semibold text-white mx-auto">
                    {kanjis.length} Caractères
                </p>
            )}
            </div>
            {kanjis.length === 0 ? (
                <div className="h-56 flex justify-center items-center mx-auto">
                    <span class="loader"></span>
                </div>
            ) : (
                <ul className="flex flex-col w-full justify-center items-center my-24">
                    {(params === '1' ||
                        '2' ||
                        '3' ||
                        '4' ||
                        '5' ||
                        'jinmeiyou') &&
                        params !== 'jouyou' &&
                        splitArrayIntoChunksOfLen(kanjis, 300).map(
                            (subArr, idx) => (
                                <>
                                    <h4 className="text-3xl text-white mb-5">
                                        Série {idx + 1}{' '}
                                    </h4>
                                    <Splide
                                        options={{
                                            perPage: subArr.length < 8 ? 1 : 10,
                                            breakpoints: {
                                                1024: {
                                                    perPage: 2,
                                                },
                                                640: {
                                                    perPage: 1,
                                                },
                                            },
                                            height: 300,
                                            width: '100vw',
                                            gap: '10em',
                                            pagination: false,
                                            arrows: false,
                                            perMove: 1,
                                            keyboard: 'global',
                                            preloadPages: 1,
                                        }}
                                    >
                                        {subArr.map((data, index) => (
                                            <SplideSlide key={data[index]}>
                                                <div className="h-32 cursor-pointer mb-5 mx-auto">
                                                    <div className="absolute transform hover:scale-95 transition duration-300 w-full">
                                                        <div
                                                            className="relative card__border h-56 xs:w-12/12 lg:w-64 bg-white rounded-lg shadow-2xl flex justify-center items-center"
                                                            onClick={() => {
                                                                setIsOpen(true)
                                                                setSelectedKanjis(
                                                                    data
                                                                )
                                                            }}
                                                        >
                                                            <h3 className="character text-5xl font-extrabold">
                                                                {data}
                                                            </h3>
                                                            {learningList?.includes(
                                                                data
                                                            ) && (
                                                                <p className="absolute top-0">
                                                                    <SiCheckmarx
                                                                        size={
                                                                            30
                                                                        }
                                                                    />
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </SplideSlide>
                                        ))}
                                    </Splide>
                                </>
                            )
                        )}
                    {params === 'jouyou' &&
                        splitArrayIntoChunksOfLen(kanjis, 100).map(
                            (subArr, idx) => (
                                <>
                                    <h4 className="text-3xl text-white mb-5">
                                        Série {idx + 1}{' '}
                                    </h4>
                                    <Splide
                                        options={{
                                            perPage:
                                                subArr.length === 100 ? 5 : 2,
                                            height: 300,
                                            breakpoints: {
                                                1024: {
                                                    perPage: 2,
                                                },
                                                640: {
                                                    perPage: 1,
                                                },
                                            },
                                            width: '100vw',
                                            gap: '10em',
                                            padding: '5rem',
                                            pagination: false,
                                            arrows: false,
                                            perMove: 1,
                                            keyboard: 'global',
                                            preloadPages: 1,
                                        }}
                                    >
                                        {subArr.map((data, index) => (
                                            <SplideSlide key={data[index]}>
                                                <div className="h-32 cursor-pointer mb-5 mx-auto ">
                                                    <div className="absolute inset-0 transform  hover:scale-95 transition duration-300 w-full">
                                                        <div
                                                            className="relative card__border h-56 xs:w-12/12 lg:w-64 bg-white rounded-lg shadow-2xl flex justify-center items-center"
                                                            onClick={() => {
                                                                setIsOpen(true)
                                                                setSelectedKanjis(
                                                                    data
                                                                )
                                                            }}
                                                        >
                                                            <h3 className="text-5xl font-extrabold">
                                                                {data}
                                                            </h3>
                                                            {learningList?.includes(
                                                                data
                                                            ) && (
                                                                <p className="absolute bottom-0 ">
                                                                    Dans ma
                                                                    liste
                                                                </p>
                                                            )}
                                                            <button>
                                                                <i></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SplideSlide>
                                        ))}
                                    </Splide>
                                </>
                            )
                        )}
                </ul>
            )}

            {isOpen && (
                <Modal setIsOpen={setIsOpen} selectedKanji={selectedKanji} />
            )}
        </section>
    )
}

export default KanjiList
