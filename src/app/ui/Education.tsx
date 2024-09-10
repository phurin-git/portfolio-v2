import Image from 'next/image';
import Link from 'next/link';
import { data } from '../data/resume';

const getLinkElement = (href: string, title: string, children: React.ReactNode, className: string = '') => <Link href={href} title={title} target='_blank' rel='noopener noreferrer' className={className}>{children}</Link>;

const getCard = (data: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
}, index: number) => (
    <div key={index} className='flex gap-4'>
        {getLinkElement(data.href, data.school,
            <Image src={data.logoUrl} alt={data.school + ' Logo'} fill quality={100} blurDataURL='data:...' placeholder='blur' className='bg-white' />
        , 'relative shrink-0 size-14 rounded-full overflow-hidden')}
        <div className='w-full flex flex-col'>
            <div className='flex justify-between items-center gap-x-2 text-base'>
                {getLinkElement(data.href, data.school, <h3 className='after:content-["_↗"]'>{data.school}</h3>)}
                <p className='max-sm:hidden font-mono text-gray text-xs sm:text-sm text-right'>{`${data.start} — ${data.end}`}</p>
            </div>
            {getLinkElement(data.href, data.school, <h4 className='text-xs'>{data.degree}</h4>)}
            <p className='sm:hidden font-mono text-gray text-xs sm:text-sm text-left'>{`${data.start} — ${data.end}`}</p>
        </div>
    </div>
);

const Education = () => (
    <section id='education' className='-mt-24 pt-24'>
        <h2>Education</h2>
        {data.education.map(getCard)}
    </section>
);

export default Education;