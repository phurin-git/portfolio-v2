import getCard from '../Card';
import { data } from '../../data/resume';

const Projects = () => (
    <section id='academic-projects' className='space-y-12 pt-24'>
        <div className='flex flex-col justify-center items-center space-y-2 text-center'>
            <h2 className='rounded-lg bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm font-normal'>Academic Projects</h2>
            <span className='text-3xl font-bold tracking-tighter sm:text-5xl'>My University Work</span>
            <p className='text-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center'>{`During my academic journey, I engaged in a variety of projects that laid the foundation for my technical skills. From engineering challenges to innovative research, here are some of the key projects from my university studies that I'm particularly proud of.`}</p>
        </div>
        <div className='max-w-[800px] grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto'>
            {data.academicProjects.map(getCard)}
        </div>
    </section>
);

export default Projects;