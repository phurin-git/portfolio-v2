import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { data } from '../data/resume';

const getFaElement = (data: {name: string, url: string, icon: IconDefinition}) => (
    <li className='size-10 flex justify-center items-center hover:-translate-y-1 transition-transform'>
        <Link href={data.url} title={data.name} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={data.icon} className='size-5' />
        </Link>
    </li>
);

export const LeftDock = () => (
    <ul className='fixed bottom-0 sm:left-5 lg:left-10 hidden md:flex flex-col after:w-px after:h-24 after:m-auto after:mt-5 after:bg-black after:dark:bg-white'>
        {getFaElement(data.contacts.social.Github)}
        {getFaElement(data.contacts.social.Facebook)}
        {getFaElement(data.contacts.social.Instagram)}
        {getFaElement(data.contacts.social.Linkedin)}
    </ul>
);

export const RightDock = () => (
    <div className='fixed bottom-0 right-5 lg:right-10 w-10 hidden md:flex flex-col after:w-px after:h-24 after:m-auto after:mt-5 after:bg-black after:dark:bg-white'>
        <Link href='mailto:phurin.nrt@gmail.com' title='My email' className='[writing-mode:vertical-rl] mx-auto my-5 hover:-translate-y-1 transition-transform font-mono'>{data.contacts.email}</Link>
    </div>
);