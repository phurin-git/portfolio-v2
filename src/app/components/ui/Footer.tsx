import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import getLinkElement from '../LinkElement';
import { data } from '../../data/resume';

const getFaElement = (data: {name: string, url: string, icon: IconDefinition}) => (
    <li>
        <Link href={data.url} title={data.name} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={data.icon} className='w-5 h-auto mx-3 hover:-translate-y-1 transition-transform'/>
        </Link>
    </li>
);

const Footer = () => (
    <footer className='flex flex-col p-4 items-center text-gray'>
        <ul className='w-full max-w-72 flex justify-center md:hidden mb-2'>
            {getFaElement(data.contacts.social.Github)}
            {getFaElement(data.contacts.social.Facebook)}
            {getFaElement(data.contacts.social.Instagram)}
            {getFaElement(data.contacts.social.Linkedin)}
        </ul>
        <p className='text-center'>Inspired by {getLinkElement('https://portfolio-magicui.vercel.app/', 'Dillion Verma', 'Dillion Verma', 'transition-colors')} and {getLinkElement('https://v4.brittanychiang.com/', 'Brittany Chiang', 'Brittany Chiang', 'transition-colors')} the project is developed using {getLinkElement('https://code.visualstudio.com/', 'Visual Studio Code', 'Visual Studio Code', 'transition-colors')}, built with {getLinkElement('https://nextjs.org/', 'Next.js', 'Next.js', 'transition-colors')} and {getLinkElement('https://tailwindcss.com/', 'Tailwind CSS', 'Tailwind CSS', 'transition-colors')}, and deployed on {getLinkElement('https://vercel.com/', 'Vercel', 'Vercel', 'transition-colors')}.</p>
    </footer>
);

export default Footer;