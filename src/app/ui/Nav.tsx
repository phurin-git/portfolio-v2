'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
        window.addEventListener('scrollend', handleCurrentNavState)
        return () => {
            window.removeEventListener('scrollend', handleCurrentNavState)
        }  
    }, [handleCurrentNavState]);
    
    // Disable scroll when hamMenu is true
    useEffect(() => {
        if (hamMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
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
        }
    };

    const getNavButton = (data: {
        name: string;
        url: string
    }, index: number) => (

        data.name === 'Resume'
        ? <li key={index} className='flex bg-black rounded-md'>
            <Link href={data.url} target='_blank' rel='noopener noreferrer' className='px-12 sm:px-4 py-5 sm:py-3 border border-black rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-transform bg-white font-mono'>{data.name}</Link>
        </li>
        : <li key={index} onClick={() => setHamMenu(!hamMenu)} className='flex'>
            <Link href={data.url} className={`p-[10px] transition-colors  ${isActive(data.name) ? 'text-black' : 'text-gray-500'}`}>{data.name}</Link>
        </li>
    );

    return (
        <header className='sticky top-0 z-50 bg-white px-6 max-sm:p-6 rounded-lg -mx-6 shadow-lg'>
            <nav>
                <button type='button' onClick={() => setHamMenu(!hamMenu)} className='sm:hidden ml-auto flex flex-col items-end gap-1'>
                    <div className={`w-8 h-1 rounded-full transition-colors duration-300 ${hamMenu ? 'bg-black' : 'bg-gray-500'}`}></div>
                    <div className={`w-8 h-1 rounded-full transition-colors duration-300 ${hamMenu ? 'bg-black' : 'bg-gray-500'}`}></div>
                    <div className={`w-8 h-1 rounded-full transition-colors duration-300 ${hamMenu ? 'bg-black' : 'bg-gray-500'}`}></div>                    
                </button>
                <ul className={`flex flex-col sm:flex-row sm:justify-evenly items-center py-7 sm:py-3 transition-all duration-300 bg-white max-sm:gap-5 max-sm:absolute max-sm:left-0 max-sm:w-screen max-sm:overflow-y-scroll ${hamMenu ? 'max-sm:h-screen' : 'max-sm:h-0 max-sm:opacity-0'}`}>
                    {data.navBar.map(getNavButton)}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;