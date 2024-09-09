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

    const handleCurrentNavState = useCallback(() => {
        const interlock = (element1: boolean, element2: boolean) => element1 && !element2;
        // get how far the element is from the top of element the top of the viewport
        const getExperienceRect: number = Number(document.getElementById('experience')?.getBoundingClientRect().top);
        const getEducationRect: number = Number(document.getElementById('education')?.getBoundingClientRect().top);
        const getProjectsRect: number = Number(document.getElementById('projects')?.getBoundingClientRect().top);

        // get the height of the viewport
        const viewportHeight = window.innerHeight;

        // get how far the element is from the bottom of element to the bottom of the viewport
        const getContactRect: number = Number(document.getElementById('contact')?.getBoundingClientRect().bottom) - Number(viewportHeight);

        // set the state of the nav bar
        setIsExperience(interlock(getExperienceRect < 10, getEducationRect < 10));
        setIsEducation(interlock(getEducationRect < 10, getProjectsRect < 10));
        setIsProjects(interlock(getProjectsRect < 10, getContactRect < 10));
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
            <Link href={data.url} target='_blank' rel='noopener noreferrer' className='px-4 py-3 border border-black rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-transform bg-white font-mono'>{data.name}</Link>
        </li>
        : <li key={index} className='flex'>
            <Link href={data.url} className={`p-[10px] transition-colors  ${isActive(data.name) ? 'text-black' : 'text-gray-500'}`}>{data.name}</Link>
        </li>
    );

    return (
        <header className='sticky top-0 rounded-lg shadow-lg bg-white z-10 -mx-6'>
            <nav>
                <ul className='flex justify-evenly items-center py-3'>
                    {data.navBar.map(getNavButton)}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;