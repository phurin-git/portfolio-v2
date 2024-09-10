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
        <div className={className}>
            <button
            type="button"
            title='Change theme'
            onClick={toggleTheme}
            className={`size-8 rounded-full flex justify-center items-center`}
            >
                <FontAwesomeIcon icon={faSun} className={`absolute opacity-100 dark:opacity-0 size-full transition-all sm:duration-500 ${isRotated ? '-rotate-[360deg] sm:rotate-[360deg]' : ''}`} />
                <FontAwesomeIcon icon={faMoon} className={`absolute opacity-0 dark:opacity-100 size-full transition-all sm:duration-500 ${isRotated ? '' : '-rotate-[360deg] sm:rotate-[360deg]'}`} />
            </button>
        </div>
    );
};

export default Theme;