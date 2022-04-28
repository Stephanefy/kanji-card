import React, { useState } from 'react'
import Definitions from '../../components/Definitions';


const DictionaryIndexPage = () => {


  const [searchTerm, setSearchTerm] = useState();
  const [results, setResult] = useState(null)



  const onSearch = (e) => {
    e.preventDefault();
    console.log(e)
    fetch(`/.netlify/functions/index?search=${searchTerm}`)
      .then(res => res.json())
      .then(res=> {
        let  { data } = res
        console.log(data)
        setResult(data.data)
      })
    

  }



  return (
    <section className='min-h-screen'>
                <div className='relative mt-56'>
                    <form onSubmit={onSearch} className="flex justify-center">
                      <div className="flex justify-center relative w-6/12">
                        <input className="relative text-2xl search-input w-full border-gray-300 bg-white h-10 px-5 rounded-lg focus:outline-none"
                            type="search" 
                            name="search" 
                            placeholder="Rechercher" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="search-btn-icon absolute magnifier-dictionary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-6/12 flex justify-start mx-auto">
                  <ul className="w-full">
                    {
                      results?.map(item => (
                        <li 
                          key={item.slug}
                          className="my-3 w-full text-left text-gray-700 bg-white p-3 flex"
                          > <div>
                                 <span className="text-tiny">{item.japanese[0].reading}</span>
                                <p className="text-2xl font-semibold">{item.slug}</p>
                          </div>
                          <div className="mx-auto px-3 w-3/4">
                            <p>Définitions</p>
                            <ul>
                              {
                                item.senses.map((e, i) => (
                                  <Definitions definitions={e.english_definitions} index={i}/>
                                ))
                              }
                            </ul>
                          </div>           
                          </li>
                      ))
                    }
                  </ul>
                </div>
    </section>
  )
}

export default DictionaryIndexPage