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
)

const Footer = () => (
    <footer className='flex flex-col p-4 items-center'>
        <ul className='w-full max-w-72 flex justify-center md:hidden mb-2'>
            {getFaElement(data.contacts.social.Github)}
            {getFaElement(data.contacts.social.Facebook)}
            {getFaElement(data.contacts.social.Instagram)}
            {getFaElement(data.contacts.social.Linkedin)}
        </ul>
        <p className='text-center'>Inspired by <Link href='https://portfolio-magicui.vercel.app/' target='_blank' rel='noopener noreferrer'>Dillion Verma</Link> and <Link href='https://v4.brittanychiang.com/' target='_blank' rel='noopener noreferrer'>Brittany Chiang</Link> the project is developed using <Link href='https://code.visualstudio.com/' target='_blank' rel='noopener noreferrer'>Visual Studio Code</Link>, built with <Link href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>Next.js</Link> and <Link href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>Tailwind CSS</Link>, and deployed on <Link href='https://vercel.com/' target='_blank' rel='noopener noreferrer'>Vercel</Link>.</p>
    </footer>
);

export default Footer;