'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Theme = ({className}: {className: string}) => (
    <button
    type="button"
    onClick={() => document.documentElement.classList.toggle('dark')}
    className={`${className} rounded-full flex justify-center items-center`}
    >
        <FontAwesomeIcon icon={faSun} className='absolute opacity-100 dark:opacity-0 size-full' />
        <FontAwesomeIcon icon={faMoon} className='absolute opacity-0 dark:opacity-100 size-full' />
    </button>
);

export default Theme;