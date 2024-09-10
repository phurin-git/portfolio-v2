import Image from 'next/image';
import Link from 'next/link';
import { data } from '../data/resume';

const getLinkElement = (href: string, title: string, children: React.ReactNode, className: string = '') => <Link href={href} title={title} target='_blank' rel='noopener noreferrer' className={className}>{children}</Link>;

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
    <div key={index} className='flex gap-4'>
        {getLinkElement(data.href, data.company,
            <Image src={data.logoUrl} alt='' fill className='bg-white p-2' />
        ,  'relative shrink-0 size-14 rounded-full overflow-hidden')}
        <div className='flex flex-col'>
            <div className='flex justify-between items-center gap-x-2'>
                {getLinkElement(data.href, data.company, <h3 className='after:content-["_↗"]'>{data.company}</h3>)}
                <p className='max-sm:hidden range text-xs sm:text-sm text-right'>{`${data.start} — ${data.end}`}</p>
            </div>
            {getLinkElement(data.href, data.company, <h4 className='text-xs'>{data.title}</h4>)}
            <p className='sm:hidden range text-xs sm:text-sm text-left'>{`${data.start} — ${data.end}`}</p>
            <p className='mt-2 text-xs sm:text-sm'>{data.description}</p>
        </div>
    </div>
);

const Experience = () => (
    <section id='experience' className='-mt-24 pt-24'>
        <h2>Work Experience</h2>
        {data.works.map(getCard)}
    </section>
);

export default Experience;