import Markdown from 'react-markdown'; 'react-markdown'
import { data } from '../data/resume'
const About = () => (
    <section id="about">
        <h2>About</h2>
        <Markdown>{data.summary}</Markdown>
    </section>
)

export default About;