import React from 'react'

const HomeIndex = () => {
  return (
    <main className='min-h-screen'>
        <section className='h-full flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-5xl mt-56 text-white font-semibold'>Bienvenue sur Kanji card</h1>
            </div>
            <div className="mt-8">
                <h3 className='text-3xl text-white'>Retrouvez les 13 000 kanjis de la langue japonaise</h3>
                <p className='text-1xl text-white'>Naviguez vers la page kanjis où vous trouverez les différentes catégories de caractères tels que les Jouyou kanjis et les Gakushuu kanji, une liste de caractères par niveau du JLTP est également disponible.</p>
                <br/>
                <p className='text-white'>les caractères et leurs informations sont proposés par l'API <span className="font-bold"><a href="https://kanjiapi.dev/">kanjiapi.dev</a></span></p>
            </div>
            <div className="mt-8">
                <p className="text-white font-serif italic">Ce projet est toujours en cours de développement</p>

            </div>

        </section>

    </main>
  )
}

export default HomeIndex