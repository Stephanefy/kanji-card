import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../../../node_modules/@splidejs/splide/dist/css/splide.min.css';
import Modal from '../../components/Modal';


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
            fetch(`https://kanjiapi.dev/v1/kanji/${params}`,{
                method:"GET"
            })
            .then((response) => response.json())
            .then((data) => setKanjis(data))
        }
        if (params === "jinmeiyou") {
            fetch(`https://kanjiapi.dev/v1/kanji/${params}`,{
                method:"GET"
            })
            .then((response) => response.json())
            .then((data) => setKanjis(data))
        }
        else {

            fetch(`https://kanjiapi.dev/v1/kanji/grade-${params}`,{
                method:"GET"
            })
            .then((response) => response.json())
            .then((data) => setKanjis(data))
        }
    }, [])

    const setPerPage = (p) => {
        
        if (p === "1" || "2" || "3" || "4" || "5") {
            return 30
        }
        if (p === "joyou") {
            return 500
        }

    }
        



    return (
        <section className="min-h-screen flex md:flex-column items-center flex-wrap sm:flex-col">
        <div className='flex h-26 justify-center items-center'>
            <h2 className='text-white text-5xl mt-32'>{location.state.params}</h2>
        </div>
        {
            kanjis.length === 0 ? (
                <div className='h-56 flex justify-center items-center'>
                    <span class="loader"></span>
                </div>
            ) : (
                <ul className="flex justify-center items-center w-full my-auto">
        <Splide 
            options={{
                perPage:setPerPage(params),
                width: 3500,
                height: 300,
                gap   : '1rem',
                padding: '2rem',
                pagination: false,
                arrows: false
            }}
        >
            {(params === "1" || "2" || "3" || "4" || "5") && kanjis && kanjis.map((k, idx) => (
                <SplideSlide>
                        <div className="h-56 relative cursor-pointer mb-5 mx-4">
                            <div className="h-56 w-40 absolute inset-0 transform  hover:translate-y-6 transition duration-300">
                                    <div 
                                        className="card__border h-full w-40 bg-white rounded-lg shadow-2xl flex justify-center items-center"
                                        onClick={() => {
                                            setIsOpen(true)
                                            setSelectedKanjis(k)
                                        }}
                                        >
                                        <h3 className="text-5xl font-extrabold">{k}</h3>
                                    </div>
                            </div>
                        </div>

                </SplideSlide>


            ))}
            {(params === "jouyou" && kanjis && kanjis.map((k, idx) => (
                <SplideSlide>
                        <div className="h-32 cursor-pointer mb-5 ">
                        <div className=" absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                        <div className="absolute inset-0 transform  hover:scale-95 transition duration-300">
                                <div 
                                    className="card__border h-56 w-6/12 bg-white rounded-lg shadow-2xl flex justify-center items-center"
                                    onClick={() => {
                                        setIsOpen(true)
                                        setSelectedKanjis(k)
                                    }}
                                    >
                                    <h3 className="text-5xl font-extrabold">{k}</h3>
                                </div>
                        </div>
                        </div>

                </SplideSlide>


            )))}

        </Splide>
        </ul>
            )
        }
      
        {isOpen && <Modal setIsOpen={setIsOpen} selectedKanji={selectedKanji} />}

    </section>
    )
}

export default KanjiList