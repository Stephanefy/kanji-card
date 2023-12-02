import {createContext, useState, useEffect} from 'react';


export const LearningListContext = createContext({
    learningList: [],
})





export const LearningListContextProvider = ({ children }) => {




    const [learningList, setLearningList] = useState(() => JSON.parse(localStorage.getItem('learningList')) || [])

  



    return (
        <LearningListContext.Provider value={{ learningList, setLearningList }}>
            {children}
        </LearningListContext.Provider>
    )

}