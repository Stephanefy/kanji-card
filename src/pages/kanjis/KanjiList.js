import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../../../node_modules/@splidejs/splide/dist/css/splide.min.css';
import Modal from '../../components/Modal';
import { FixedSizeList } from 'react-window';

import "./kanjiListCard.css"

const KanjiList = () => {


    const location = useLocation()

    const [kanjis, setKanjis] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [selectedKanji, setSelectedKanjis] = useState("")

    let params = location.state.params

    useEffect(() => {


        console.log(params)
        if (params === "jouyou") {
            fetch(`https://kanjiapi.dev/v1/kanji/jouyou`,{
                method:"GET"
            })
            .then((response) => response.json())
            .then((data) => setKanjis(data))
        }
        if (params === "jinmeiyou") {
            fetch(`https://kanjiapi.dev/v1/kanji/jinmeiyou`,{
                method:"GET"
            })
            .then((response) => response.json())
            .then((data) => setKanjis(data))
        }
        if (params !== "jinmeiyou" && params !== "jouyou"){

            fetch(`https://kanjiapi.dev/v1/kanji/grade-${params}`,{
                method:"GET"
            })
            .then((response) => response.json())
            .then((data) => setKanjis(data))
        }
    }, [params])

    const setPerPage = (p) => {
        
        if (p === "1" || "2" || "3" || "4" || "5") {
            return 30
        }
        if (p === "jouyou") {
            return 5
        }

    }

    const KanjiListTitle = (locationParams) => {

        let title;

        if(locationParams === "jouyou") title = "常用漢字";
        if(locationParams === "jinmeiyou") title = "人名用漢字";
        if(locationParams === "jouyou") title = "常用漢字";
        if(locationParams === 1) title = "Première année";
        if(locationParams === 2) title = "Deuxième année";
        if(locationParams === 3) title = "Troisième année";
        if(locationParams === 4) title = "Quatrième année";
        if(locationParams === 5) title = "Cinquième année";

        return title

    };
    

    function splitArrayIntoChunksOfLen(arr, len) {
        let chunks = [];
        let i = 0;
        let n = arr.length;

        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
        return chunks;
    }
    
        

    console.log(splitArrayIntoChunksOfLen(kanjis, kanjis.length / 100).map(k => console.log(k)))

    return (
        <section className="min-h-screen w-full flex md:flex-column items-center flex-wrap sm:flex-col">
        <div className='flex h-26 justify-center items-center'>
            <h2 className='text-white text-5xl mt-32'>{KanjiListTitle(location.state.params)}</h2>
        </div>
        {
            kanjis.length === 0 ? (
                <div className='h-56 flex justify-center items-center'>
                    <span class="loader"></span>
                </div>
            ) : (
                <ul className="flex flex-col w-full justify-center items-center my-24">
            {(params === "1" || "2" || "3" || "4" || "5" || "jinmeiyou" ) && params !== "jouyou" && splitArrayIntoChunksOfLen(kanjis, 100).map((subArr, idx) => (
                <>
                    <h4 className='text-3xl text-white mb-5'>Série {idx + 1} </h4>
                    <Splide
                options={{
                    perPage: subArr.length < 8 ? 1 : 10,
                    height: 300,
                    gap   : '2rem',
                    padding: '10rem',
                    pagination: true,
                    arrows: false,
                    perMove: 1,
                    keyboard: 'global',
                    preloadPages: 1
                }}>
                    {
                        subArr.map((data, index) => (
                            <SplideSlide key={data[index]}>
                                            <div className="h-32 cursor-pointer mb-5 mx-auto ">
                                            <div className="absolute inset-0 transform  hover:scale-95 transition duration-300">
                                                    <div 
                                                        className="card__border h-56 w-12/12 bg-white rounded-lg shadow-2xl flex justify-center items-center"
                                                        onClick={() => {
                                                            setIsOpen(true)
                                                            setSelectedKanjis(data)
                                                        }}
                                                        >
                                                        <h3 className="text-5xl font-extrabold">{data}</h3>
                                                    </div>
                                            </div>
                                            </div>

                                    </SplideSlide>

                        ))
                    }
                </Splide>

                </>
        


            ))}
        {(params === "jouyou" && splitArrayIntoChunksOfLen(kanjis, 100).map((subArr, idx) => (
            <>
            <h4 className='text-3xl text-white mb-5'>Série {idx + 1} </h4>
                <Splide
                options={{
                    perPage:subArr.length === 100 ? 5 : 2,
                    height: 300,
                    gap   : '1.5rem',
                    padding: '10rem',
                    pagination: true,
                    arrows: false,
                    perMove: 1,
                    keyboard: 'global',
                    preloadPages: 1
                }}>
                    {
                        subArr.map((data, index) => (
                            <SplideSlide key={data[index]}>
                                            <div className="h-32 cursor-pointer mb-5 mx-auto ">
                                            <div className="absolute inset-0 transform  hover:scale-95 transition duration-300">
                                                    <div 
                                                        className="card__border h-56 w-12/12 bg-white rounded-lg shadow-2xl flex justify-center items-center"
                                                        onClick={() => {
                                                            setIsOpen(true)
                                                            setSelectedKanjis(data)
                                                        }}
                                                        >
                                                        <h3 className="text-5xl font-extrabold">{data}</h3>
                                                    </div>
                                            </div>
                                            </div>

                                    </SplideSlide>

                        ))
                    }
                </Splide>

            </>
        )

        ))}
        </ul>
            )}  
        
      
        {isOpen && <Modal setIsOpen={setIsOpen} selectedKanji={selectedKanji} />}
        {kanjis.length !== 0 && <p className='text-5xl font-semibold text-white'>{kanjis.length} Caractères</p>}

    </section>
    )
}

export default KanjiList