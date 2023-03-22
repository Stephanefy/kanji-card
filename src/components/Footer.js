import React from 'react';
import { FaReact } from 'react-icons/fa'

import './Footer.css';

export default function Footer() {
    return (
        <div className='footer flex justify-center items-center w-full'>
            <div>
                <p className='sm:text-base text-center md:text-2xl'>&copy; 2023 Made with <span><FaReact className="react-icon-footer inline bg-blue-300"/></span> by Stephane Fy <span role='img' aria-label='emoji'>😄</span></p>
            </div>
        </div>
    )
}
