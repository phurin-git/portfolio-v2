import Link from 'next/link';

const Footer = () => (
    <footer className='p-4'>
        <p className='text-center'>Inspired by <Link href='https://portfolio-magicui.vercel.app/' target='_blank' rel='noopener noreferrer'>Dillion Verma</Link> and <Link href='https://v4.brittanychiang.com/' target='_blank' rel='noopener noreferrer'>Brittany Chiang</Link> the project is developed using <Link href='https://code.visualstudio.com/' target='_blank' rel='noopener noreferrer'>Visual Studio Code</Link>, built with <Link href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>Next.js</Link> and <Link href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>Tailwind CSS</Link>, and deployed on <Link href='https://vercel.com/' target='_blank' rel='noopener noreferrer'>Vercel</Link>.</p>
    </footer>
);

export default Footer;