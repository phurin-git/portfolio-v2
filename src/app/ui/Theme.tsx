'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Theme = () => (
    <button
    type="button"
    onClick={() => document.documentElement.classList.toggle('dark')}
    className='absolute top-10 right-10 size-7 rounded-full flex justify-center items-center'
    >
        <FontAwesomeIcon icon={faSun} className='absolute opacity-100 dark:opacity-0 w-full h-full' />
        <FontAwesomeIcon icon={faMoon} className='absolute opacity-0 dark:opacity-100 w-full h-full' />
    </button>
);

export default Theme;