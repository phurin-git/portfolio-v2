import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data } from '../data/resume';

const getCard = (data: {
    title: string;
    href: string;
    dates: string;
    description: string;
    technologies: string[];
    image: string;
    video: string;
    links: {
        type: string;
        href: string;
    }[];
}, index: number) => (
    <div key={index} className='h-full rounded-lg flex flex-col overflow-hidden border dark:border-white/20 hover:shadow-lg transition-all ease-out duration-300'>
        <Link href={data.href} title={data.title} target='_blank' rel='noopener noreferrer' className='relative w-full h-40'>
            <Image src={data.image} alt='' fill className='object-cover object-top mx-auto'/>
        </Link>
        <div className='flex grow flex-col space-y-1 px-2'>
            <h3 className='font-semibold text-base tracking-tight mt-1'>{data.title}</h3>
            <Markdown className='text-xs text-pretty'>{data.description}</Markdown>
        </div>
        <div className='flex flex-wrap gap-1 font-sans text-sm text-pretty px-2 mt-2'>
            {data.technologies.map((tech, index) => (
                <div key={index} className='rounded-md items-center font-semibold text-xs text-black dark:text-white bg-gray-400/20 hover:bg-gray-400/15 dark:bg-white/20 hover:dark:bg-white/15 px-2 py-1 transition-colors'>{tech}</div>
            ))}
        </div>
        <div className='flex items-center p-2 gap-1'>
            {data.links.map((link, index) => (
                <Link key={index} title={link.type} href={link.href} target='_blank' rel='noopener noreferrer' className='flex flex-wrap gap-1 items-start'>
                    <div className='rounded-md flex gap-2 items-center border font-semibold text-xs text-white dark:text-black bg-black dark:bg-white transition-colors shadow px-2 py-1'>
                        <FontAwesomeIcon icon={link.type === 'website' ? faGlobe : faGithub} className='size-3' />
                        <small className='capitalize'>{link.type}</small>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

const Projects = () => (
    <section id='projects' className='space-y-12 -mt-24 pt-24 pb-12'>
        <div className='flex flex-col justify-center items-center space-y-2 text-center'>
            <h2 className='rounded-lg bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm font-normal'>My Projects</h2>
            <span className='text-3xl font-bold tracking-tighter sm:text-5xl'>Check out my latest work</span>
            <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center'>{`I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.`}</p>
        </div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
            {data.projects.map(getCard)}
        </div>
    </section>
);

export default Projects;