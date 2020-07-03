import React from 'react';

import './Footer.css';

export default function Footer() {
    return (
        <div className='footer flex justify-center items-center'>
            <div>
                <p className='sm:text-base text-center md:text-2xl'>&copy; 2020 Made with React by Stephane Fy <span role='img' aria-label='emoji'>😄</span></p>
            </div>
        </div>
    )
}
