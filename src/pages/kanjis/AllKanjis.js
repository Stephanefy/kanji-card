import React from 'react'

const AllKanjis = ({pushToGrade}) => {
  return (
    <div className="h-56 w-40 relative transform  hover:scale-95 card__border transition duration-300 rounded-lg cursor-pointer mb-5 mx-8">
    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div className="absolute inset-0  ">
                <div 
                    className="h-full w-full r bg-white rounded-lg shadow-2xl flex justify-center items-center"
                    
                    >
                    <butont onClick={() => pushToGrade("all")}><h3 className="text-5xl  text-center font-extrabold">全</h3></butont>
                </div>
        </div>
</div>
  )
}

export default AllKanjis