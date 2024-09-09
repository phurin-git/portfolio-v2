import Link from 'next/link';
import { data } from '../data/resume';

const Contact = () => (
    <section id='contact' className='space-y-12 -mt-24 pt-24 pb-12'>
        <div className='flex flex-col justify-center items-center space-y-2 text-center'>
            <h2 className='rounded-lg bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm font-normal'>Contact</h2>
            <span className='text-3xl font-bold tracking-tighter sm:text-5xl'>Get in Touch</span>
            <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center'>{'Want to chat? Just shoot me an email with a direct question, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'}</p>
        </div>
        <div className='m-auto flex w-fit rounded-md bg-black dark:bg-white'>
            <Link href={`mailto:${data.contacts.email}`} className='m-auto font-mono px-[28px] py-[20px] border border-black dark:border-white rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-transform bg-white dark:bg-black'>Say Hello</Link>
        </div>
    </section>
)

export default Contact;