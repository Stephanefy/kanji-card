import React from 'react'

const Gakushu = ({pushToGrade, idx, grade}) => {
  return (
    <div className="h-32 w-32 relative cursor-pointer mb-5 mx-8">
        <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:scale-95 transition duration-300">
                    <div 
                        className="h-full w-full bg-white rounded-lg shadow-2xl flex justify-center items-center"
                        onClick={() => pushToGrade(idx+1)}
                        >
                        <h3 className="font-extrabold text-6xl">{grade.title}</h3>
                    </div>
            </div>
    </div>
  )
}

export default Gakushu