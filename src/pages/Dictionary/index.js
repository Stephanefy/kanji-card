import React, { useState } from 'react'

const DictionaryIndexPage = () => {


  const [searchTerm, setSearchTerm] = useState();



  const onSearch = (e) => {
    e.preventDefault();
    console.log(e)
    fetch('http://localhost:8888/.netlify/functions/index').then(res => console.log(res.body))
    

  }



  return (
    <div className='h-screen'>
                <div className='relative mt-56'>
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
  )
}

export default DictionaryIndexPage