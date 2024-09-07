const getCard = (title: string, subtitle: string, date: string, description: string) => (
    <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-lg font-semibold">{subtitle}</h4>
        <p className="text-sm font-light">{date}</p>
        <p className="text-sm font-light">{description}</p>
    </div>
);

const Experience = () => (
    <section id="experience">
        <h2>Work Experience</h2>
    </section>
);

export default Experience;