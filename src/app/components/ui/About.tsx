import Markdown from 'react-markdown';
import { data } from '../../data/resume';

const About = () => (
    <section id='about' className='-mt-24 pt-24'>
        <h2>About</h2>
        <Markdown components={{
            a: ({ ...props }) => (
                <a {...props} target='_blank' rel='noopener noreferrer'>
                  {props.children}
                </a>
              ),
        }}>{data.summary}</Markdown>
    </section>
);

export default About;