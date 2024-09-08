import Link from 'next/link';
import { data } from '../data/resume';

const getNav = (data: {
    name: string;
    url: string
}, index: number) => (
    data.name === 'Resume'
    ? <li key={index} className='flex bg-black rounded-md'>
        <a href={data.url} target='_blank' rel='noopener noreferrer' className='px-4 py-3 border border-black rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-transform bg-white font-mono'>{data.name}</a>
    </li>
    : <li key={index} className='flex'>
        <Link href={data.url} className='p-[10px] text-gray-500'>{data.name}</Link>
    </li>
);

const Nav = () => {
    return (
        <header className='sticky top-0 rounded-lg shadow-lg bg-white z-10 -mx-6'>
            <nav>
                <ul className='flex justify-evenly items-center py-3'>
                    {data.navBar.map(getNav)}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;