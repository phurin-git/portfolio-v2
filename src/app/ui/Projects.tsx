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
    <div key={index} className='rounded-lg flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'>
        <Link href={data.href} target='_blank' rel='noopener noreferrer' className='relative w-full h-40'>
            <Image src={data.image} alt='' fill className='mx-auto object-cover object-top'/>
        </Link>
        <div className='flex flex-col space-y-1 px-2'>
            <h3 className='font-semibold tracking-tight mt-1 text-base'>{data.title}</h3>
            <Markdown className='text-pretty text-xs text-muted-foreground dark:prose-invert'>{data.description}</Markdown>
        </div>
        <div className='flex flex-wrap gap-1 text-pretty font-sans text-sm px-2 mt-2'>
            {data.technologies.map((tech, index) => (
                <div key={index} className='items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-xs bg-gray-100'>{tech}</div>
            ))}
        </div>
        <div className='flex items-center p-2 gap-1'>
            {data.links.map((link, index) => (
                <Link key={index} href={link.href} target='_blank' rel='noopener noreferrer' className='flex flex-wrap gap-1 items-start'>
                    <div className='rounded-md flex gap-2 items-center border text-white bg-black text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 px-2 py-1'>
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
            <h2 className='rounded-lg bg-black text-white px-3 py-1 text-sm font-normal'>My Projects</h2>
            <span className='text-3xl font-bold tracking-tighter sm:text-5xl'>Check out my latest work</span>
            <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center'>{`I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.`}</p>
        </div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
            {data.projects.reverse().map(getCard)}
        </div>
    </section>
);

export default Projects;