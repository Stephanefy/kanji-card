import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal'
import Gakushu from './Gakushu';
import Joyou from './Joyou';
import Jinmeiyou from './Jinmeiyou';
import Card from '../../components/card/Card'
import './kanjiListCard.css'


const KangiGrade = [
    {
        title: "一"
    },
    {
        title: "二"
    },
    {
        title: "三"
    },
    {
        title: "四"
    },
    {
        title: "五"
    }
]


const KanjiListType = [
    {
        name: 'jouyou'
    },
    {
        name: 'jinmeiyou'
    },
    {
        name: 'gakushu'
    },
    {
        name: 'jlpt'
    }
]



const KanjisIndex = () => {
 


  const [grade, setGrade] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState(false)


  const history = useHistory()
  
  const onSelectKanjiCollection = (e) => {
      console.log(e.currentTarget.textContent)
      setSelectedCollection(e.currentTarget.textContent)
  }

  const pushToGrade = (params) => {
      history.push(`/gakushu-kanji/${params}`,{params: params})
  }
  

  const onSearch = (e) => {
    e.preventDefault();
    if(searchTerm === "") {
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
  },[error])

  return (
    <div className='w-full'>
        <section className="min-h-screen flex md:flex-column items-center flex-wrap sm:flex-col">
            <div className="flex flex-col items-center pt-56 mx-auto">
                <div>
                {
                    KanjiListType.map(b => (
                        <button onClick={(e) => onSelectKanjiCollection(e)} className='kanji-category-btn bg-red-800 text-white p-2 mx-2 rounded-full font-semibold'>
                            {b.name === "jouyou" && "常用"}
                            {b.name === "gakushu" && "学習"}
                            {b.name === "jinmeiyou" && "人名"}
                            {b.name === "jlpt" && "JLPT"}
                        </button>
                    ))
                }
                </div>

     
                <div className='relative mt-10'>
                    <form onSubmit={onSearch}>
                        <input className="text-2xl search-input w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:outline-none"
                            type="search" 
                            name="search" 
                            placeholder="Rechercher" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="search-btn-icon mt-5 mr-4">
                                <svg className="absolute right-0 magnifier" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                            </button>
                    </form>
                </div>
            </div>
                {error && <span className='text-white'>Vous devez entrer le caractère recherché (Romaji non accepté)</span>}
            <div className='flex justify-center items-center'>
                <h2 className='text-white text-5xl'>
                    {selectedCollection === "gakushu" && "Gakushū kanji" }   
                </h2>
            </div>
            <ul className="flex justify-between mx-auto selection-cards">
                {selectedCollection === "学習" && KangiGrade.map((grade, idx) => (
                    <li className='gakushu-cards'>
                        <Gakushu grade={grade} idx={idx} pushToGrade={pushToGrade} />
                    </li>

                ))}
                {selectedCollection === "常用" && (
                   <li>
                   <Joyou pushToGrade={pushToGrade} />
                   </li> 

                )}
                {selectedCollection === "人名" && (
                    <li>
                        <Jinmeiyou pushToGrade={pushToGrade} />
                    </li>

                )}
                {selectedCollection === "JLPT" && (
                    <li>
                        <Card />
                    </li>

                )}
            </ul>
                {isOpen && <Modal setIsOpen={setIsOpen} selectedKanji={searchTerm} />}
        </section>
    </div>
  )
}

export default KanjisIndex