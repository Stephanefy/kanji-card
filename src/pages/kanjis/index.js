import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Gakushu from './Gakushu';
import Joyou from './Joyou';
import Jinmeiyou from './Jinmeiyou';
import Card from '../../components/card/Card'

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



const Kanjis = () => {
 


  const [grade, setGrade] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState("")

  const history = useHistory()
  
  const onSelectKanjiCollection = (e) => {
      console.log(e.currentTarget.textContent)
      setSelectedCollection(e.currentTarget.textContent)
  }

  const pushToGrade = (params) => {
      history.push(`/gakushu-kanji/${params}`,{params: params})
  }

  

  return (
    <div className='h-screen w-full'>
        <section className="p-56 min-h-screen flex md:flex-column items-center justify-between flex-wrap sm:flex-col">
            <div className="flex justify-between">
                {
                    KanjiListType.map(b => (
                        <button onClick={(e) => onSelectKanjiCollection(e)} className='bg-blue-100 p-2 mx-2 rounded-b-2xl font-semibold'>{b.name}</button>
                    ))
                }
            </div>
            <div className='my-auto flex justify-center items-center'>
                <h2 className='text-white text-5xl'>
                    {selectedCollection === "gakushu" && "Gakushū kanji" }   
                </h2>
            </div>
            <ul className="flex justify-between">
                {selectedCollection === "gakushu" && KangiGrade.map((grade, idx) => (
                    <li>
                        <Gakushu grade={grade} idx={idx} pushToGrade={pushToGrade} />
                    </li>

                ))}
                {selectedCollection === "jouyou" && (
                    <Joyou pushToGrade={pushToGrade} />

                )}
                {selectedCollection === "jinmeiyou" && (
                    <Jinmeiyou pushToGrade={pushToGrade} />

                )}
                {selectedCollection === "jlpt" && (
                    <Card />

                )}
            </ul>
        </section>
    </div>
  )
}

export default Kanjis