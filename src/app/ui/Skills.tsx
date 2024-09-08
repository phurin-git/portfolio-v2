import { data } from '../data/resume';
const Skills = () => (
    <section id='skills'>
        <h2>Skills</h2>
        <ul className='flex flex-wrap gap-1'>
            {data.skills.map((skill, index) => (
                <li key={index} className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-black text-white shadow hover:bg-black/80'>{skill}</li>
            ))}
        </ul>
    </section>
)

export default Skills;