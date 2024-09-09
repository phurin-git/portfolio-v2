import Image from 'next/image';
import Link from 'next/link';
import { data } from '../data/resume';

const getCard = (data: {
    company: string;
    href: string;
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
}, index: number) => (
    <Link key={index} href={data.href} target='_blank' rel='noopener noreferrer' className='flex gap-4'>
        <div className='relative shrink-0 size-12'>
            <Image src={data.logoUrl} alt='' fill />
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center gap-x-2'>
                <h3 className='after:content-["_↗"]'>{data.company}</h3>
                <p className='range text-xs sm:text-sm text-right'>{`${data.start} — ${data.end}`}</p>
            </div>
            <h4 className='text-xs'>{data.title}</h4>
            <p className='mt-2 text-xs sm:text-sm'>{data.description}</p>
        </div>
    </Link>
);

const Experience = () => (
    <section id='experience' className='-mt-24 pt-24'>
        <h2>Work Experience</h2>
        {data.works.reverse().map(getCard)}
    </section>
);

export default Experience;