import { data } from '../data/resume';
import Image from 'next/image';

const Hero = () => (
    <section className='max-w-2xl flex gap-2 justify-between'>
        <hgroup className='flex flex-col space-y-1.5'>
            <h1>{`Hi, I'm ${data.name.split(' ', 1)} 👋`}</h1>
            <span>{data.description}</span>
        </hgroup>
        <div className='relative size-28 rounded-full shrink-0 overflow-hidden border'>
            <Image src={data.avatarUrl} alt={data.name} quality={100} placeholder='blur' priority />
        </div>
    </section>
);

export default Hero;