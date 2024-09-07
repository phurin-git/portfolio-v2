import { data } from '../data/resume'

const Hero = () => (
    <section>
        <hgroup>
            <h1>{`Hi, I'm ${data.name.split(" ", 1)} 👋`}</h1>
            <span>{data.description}</span>
        </hgroup>
    </section>
)

export default Hero;