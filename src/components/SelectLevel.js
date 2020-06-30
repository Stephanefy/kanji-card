import React,{useState} from 'react';
import Kanjis from '../data/kanji.json';



export default function SelectLevel() {
    
    const N5 = Kanjis.filter(k => k.category === 'jlptn5')
    console.log(N5)
    
    

    return (
        <div>
        Hello there ! 
        </div>
    )
}
