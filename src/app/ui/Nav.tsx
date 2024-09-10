'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Theme from './Theme';
import { data } from '../data/resume';

const Nav = () => {
    const [isAbout, setIsAbout] = useState(false);
    const [isExperience, setIsExperience] = useState(false);
    const [isEducation, setIsEducation] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [hamMenu, setHamMenu] = useState(false);

    const handleCurrentNavState = useCallback(() => {
        const interlock = (...element: boolean[]) => (element.reduce((acc: boolean, curr: boolean) => acc && !curr));
        // get how far the element is from the top of element the top of the viewport
        const getExperienceRect: number = Number(document.getElementById('experience')?.getBoundingClientRect().top);
        const getEducationRect: number = Number(document.getElementById('education')?.getBoundingClientRect().top);
        const getProjectsRect: number = Number(document.getElementById('projects')?.getBoundingClientRect().top);

        // get the height of the viewport
        const viewportHeight = window.innerHeight;

        // get how far the element is from the bottom of element to the bottom of the viewport
        const getContactRect: number = Number(document.getElementById('contact')?.getBoundingClientRect().bottom) - Number(viewportHeight);

        // set the state of the nav bar
        setIsExperience(interlock(getExperienceRect < 10, isEducation, isProjects, isContact));
        setIsEducation(interlock(getEducationRect < 10, isProjects, isContact));
        setIsProjects(interlock(getProjectsRect < 10, isContact));
        setIsContact(getContactRect < 10);
        setIsAbout(!(isExperience || isEducation || isProjects || isContact));
    }, [isExperience, isEducation, isProjects, isContact]);

    useEffect(() => {
        handleCurrentNavState();
    }, [handleCurrentNavState]);

    useEffect(() => {
        window.addEventListener('scroll', handleCurrentNavState);
        return () => window.removeEventListener('scroll', handleCurrentNavState);
    }, [handleCurrentNavState]);

    useEffect(() => {
        window.addEventListener('scrollend', handleCurrentNavState);
        return () => window.removeEventListener('scrollend', handleCurrentNavState);
    }, [handleCurrentNavState]);
    
    // Disable scroll when hamMenu is true
    useEffect(() => {
        document.body.classList.toggle('max-sm:overflow-hidden', hamMenu);
    
        // Cleanup function to enable scroll when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [hamMenu]);

    const isActive = (name: string) => {
        switch (name) {
            case 'About':
                return isAbout;
            case 'Education':
                return isEducation;
            case 'Experience':
                return isExperience;
            case 'Projects':
                return isProjects;
            case 'Contact':
                    return isContact;
            default:
                break;
        };
    };

    useEffect(() => {
        const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList.toggle('dark', isDark);
    } , []);
    
    const getNavButton = (data: {
        name: string;
        url: string
    }, index: number) => (

        data.name === 'Resume'
        ? <li key={index} onClick={() => setHamMenu(!hamMenu)} className='rounded-md flex bg-black dark:bg-white'>
            <a href={data.url} target='_blank' rel='noopener noreferrer' className='rounded-md border border-black dark:border-white px-12 sm:px-4 py-5 sm:py-3 font-mono text-black dark:text-white bg-white dark:bg-black transition-all hover:-translate-x-1 hover:-translate-y-1'>{data.name}</a>
        </li>
        : <li key={index} onClick={() => setHamMenu(!hamMenu)} className='flex'>
            <Link href={data.url} className={`p-[10px] transition-colors hover:text-black dark:hover:text-white ${isActive(data.name) ? 'text-black dark:text-white' : 'text-gray'}`}>{data.name}</Link>
        </li>
    );

    return (
        <header className='sticky top-0 z-50 bg-white dark:bg-black px-6 max-sm:p-6 rounded-lg sm:-mx-6 dark:shadow-white/60 shadow-lg transition-all duration-300'>
            <nav>
                <Theme className='absolute top-5 left-5 sm:hidden z-50'/>
                <button type='button' title='Toggle nav menu' onClick={() => setHamMenu(!hamMenu)} className='sm:hidden ml-auto flex flex-col items-end gap-1'>
                    <div className={`w-8 h-1 rounded-full transition-colors duration-300 ${hamMenu ? 'bg-black dark:bg-white' : 'bg-gray-500'}`}></div>
                    <div className={`w-8 h-1 rounded-full transition-colors duration-300 ${hamMenu ? 'bg-black dark:bg-white' : 'bg-gray-500'}`}></div>
                    <div className={`w-8 h-1 rounded-full transition-colors duration-300 ${hamMenu ? 'bg-black dark:bg-white' : 'bg-gray-500'}`}></div>
                </button>
                <ul className={`flex flex-col sm:flex-row sm:justify-evenly items-center py-7 sm:py-3 bg-white dark:bg-black max-sm:gap-5 max-sm:absolute max-sm:left-0 max-sm:w-screen max-sm:overflow-y-scroll transition-all duration-300 ${hamMenu ? 'max-sm:h-screen' : 'max-sm:h-0 max-sm:opacity-0'}`}>
                    {data.navBar.map(getNavButton)}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;