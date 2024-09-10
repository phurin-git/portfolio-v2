import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { data } from '../data/resume';

const getFaElement = (data: {name: string, url: string, icon: IconDefinition}) => (
    <li>
        <Link href={data.url} title={data.name} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={data.icon} className='w-5 h-auto mx-3 hover:-translate-y-1 transition-transform'/>
        </Link>
    </li>
);

const getLinkElement = (label: string, url: string) => (
    <Link href={url} title={label} target='_blank' rel='noopener noreferrer' className='transition-colors'>{label}</Link>
);

const Footer = () => (
    <footer className='flex flex-col p-4 items-center text-gray'>
        <ul className='w-full max-w-72 flex justify-center md:hidden mb-2'>
            {getFaElement(data.contacts.social.Github)}
            {getFaElement(data.contacts.social.Facebook)}
            {getFaElement(data.contacts.social.Instagram)}
            {getFaElement(data.contacts.social.Linkedin)}
        </ul>
        <p className='text-center'>Inspired by {getLinkElement('Dillion Verma', 'https://portfolio-magicui.vercel.app/')} and {getLinkElement('Brittany Chiang', 'https://v4.brittanychiang.com/')} the project is developed using {getLinkElement('Visual Studio Code', 'https://code.visualstudio.com/')}, built with {getLinkElement('Next.js', 'https://nextjs.org/')} and {getLinkElement('Tailwind CSS', 'https://tailwindcss.com/')}, and deployed on {getLinkElement('Vercel','https://vercel.com/')}.</p>
    </footer>
);

export default Footer;