import React from 'react'

const Magnifier = (props) => {
    return (
        <button type="submit" className='cursor-pointer'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox='0 0 24 24'
                {...props}
            >
                <path d="m23.111 20.058-4.977-4.977a9.767 9.767 0 0 0 1.523-5.251c0-5.42-4.409-9.83-9.829-9.83C4.408 0 0 4.41 0 9.83s4.408 9.83 9.829 9.83a9.764 9.764 0 0 0 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zM3.047 9.83c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749a7.002 7.002 0 0 0-9.922-.749z" />
            </svg>
        </button>
    )
}

export default Magnifier
