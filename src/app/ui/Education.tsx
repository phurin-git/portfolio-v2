import Image from 'next/image';
import Link from 'next/link';
import { data } from '../data/resume';

const getCard = (data: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
}, index: number) => (
    <Link key={index} href={data.href} target='_blank' rel='noopener noreferrer' className='flex gap-4'>
        <div className='relative shrink-0 size-14 rounded-full overflow-hidden'>
            <Image src={data.logoUrl} alt='' fill className='bg-white'/>
        </div>
        <div className='w-full flex flex-col'>
            <div className='flex justify-between items-center gap-x-2 text-base'>
                <h3 className='after:content-["_↗"]'>{data.school}</h3>
                <p className='max-sm:hidden range text-xs sm:text-sm text-right'>{`${data.start} — ${data.end}`}</p>
            </div>
            <h4 className='text-xs'>{data.degree}</h4>
            <p className='sm:hidden range text-xs sm:text-sm text-left'>{`${data.start} — ${data.end}`}</p>
        </div>
    </Link>
);

const Education = () => (
    <section id='education' className='-mt-24 pt-24'>
        <h2>Education</h2>
        {data.education.reverse().map(getCard)}
    </section>
);

export default Education;