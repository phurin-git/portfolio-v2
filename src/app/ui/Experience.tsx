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
        <div className='relative shrink-0 size-14 rounded-full overflow-hidden'>
            <Image src={data.logoUrl} alt='' fill className='bg-white p-2' />
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center gap-x-2'>
                <h3 className='after:content-["_↗"]'>{data.company}</h3>
                <p className='max-sm:hidden range text-xs sm:text-sm text-right'>{`${data.start} — ${data.end}`}</p>
            </div>
            <h4 className='text-xs'>{data.title}</h4>
            <p className='sm:hidden range text-xs sm:text-sm text-left'>{`${data.start} — ${data.end}`}</p>
            <p className='mt-2 text-xs sm:text-sm'>{data.description}</p>
        </div>
    </Link>
);

const Experience = () => (
    <section id='experience' className='-mt-24 pt-24'>
        <h2>Work Experience</h2>
        {data.works.map(getCard)}
    </section>
);

export default Experience;