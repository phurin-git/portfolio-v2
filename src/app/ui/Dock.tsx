import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const getFaElement = (icon: IconDefinition, href: string) => (
    <li>
        <Link href={href} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={icon} className='w-5 h-auto mx-auto my-3 hover:-translate-y-1 transition-transform'/>
        </Link>
    </li>
)

export const LeftDock = () => (
    <ul className='fixed bottom-0 left-10 w-10 flex flex-col after:w-px after:h-24 after:m-auto after:mt-5 after:bg-white'>
        {getFaElement(faGithub, '')}
        {getFaElement(faFacebook, '')}
        {getFaElement(faInstagram, '')}
        {getFaElement(faLinkedin, '')}
    </ul>
);

export const RightDock = () => (
    <div className='fixed bottom-0 right-10 w-10 flex flex-col after:w-px after:h-24 after:m-auto after:mt-5 after:bg-white'>
        <Link href='mailto:phurin.nrt@gmail.com' className='[writing-mode:vertical-rl] mx-auto my-5 hover:-translate-y-1 transition-transform font-mono'>phurin.nrt@gmail.com</Link>
    </div>
);