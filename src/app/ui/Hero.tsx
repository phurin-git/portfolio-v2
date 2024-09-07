import { data } from '../data/resume';
import Image from 'next/image';

const Hero = () => (
    <section className='mx-auto w-full max-w-2xl space-y-8 gap-2 flex justify-between'>
        <hgroup className='flex-col flex flex-1 space-y-1.5'>
            <h1>{`Hi, I'm ${data.name.split(" ", 1)} 👋`}</h1>
            <span>{data.description}</span>
        </hgroup>
        <div className='relative flex shrink-0 overflow-hidden rounded-full size-28 border'>
            <Image src={data.avatarUrl} alt={data.name} fill priority/>
        </div>
    </section>
)

export default Hero;