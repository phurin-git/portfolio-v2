'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Theme = ({className}: {className: string}) => {
    const [isRotated, setIsRotated] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsRotated(!isRotated);
    };

    return (
        <button
        type="button"
        title='Change theme'
        onClick={toggleTheme}
        className={`${className} rounded-full flex justify-center items-center transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`}
        >
            <FontAwesomeIcon icon={faSun} className='absolute opacity-100 dark:opacity-0 size-full' />
            <FontAwesomeIcon icon={faMoon} className='absolute opacity-0 dark:opacity-100 size-full' />
        </button>
    );
};

export default Theme;