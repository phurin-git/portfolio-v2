import getCard from '../Card';
import { data } from '../../data/resume';

const Projects = () => (
    <section id='projects' className='space-y-12 pt-24'>
        <div className='flex flex-col justify-center items-center space-y-2 text-center'>
            <h2 className='rounded-lg bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm font-normal'>My Projects</h2>
            <span className='text-3xl font-bold tracking-tighter sm:text-5xl'>Check out my latest work</span>
            <p className='text-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center'>{`I’m just starting out in web development, and I’ve been working on a range of projects, from straightforward websites to more intricate web applications. Here are a few of the ones I'm most excited about.`}</p>
        </div>
        <div className='max-w-[800px] grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto'>
            {data.projects.map(getCard)}
        </div>
    </section>
);

export default Projects;