import {
    faGithub as Github,
    faFacebook as Facebook,
    faInstagram as Instagram,
    faLinkedin as Linkedin,
} from '@fortawesome/free-brands-svg-icons';

export const data = {
    name: "Phurin Nararat",
    initials: "PN",
    url: "https://phurinnararat.works",
    location: "Bang Bo, Samut Prakan, Thailand",
    locationUrl: "https://maps.app.goo.gl/gT4UEUKwuzUB8Fdi7",
    description: "Excited Automation Engineer moving into Full Stack Engineering. Eager to keep learning and loves to code.",
    summary: "My journey into the tech world began during my college years, where I studied robotics and automation system engineering. I first learned C programming as my foundational programming language. Driven by my interest, I later learned Java and Python. I have programmed various microprocessors, controllers, single-board computers, and robot manipulators. I find coding in different programming languages enjoyable because it is logical, much like mathematics. However, I did not have ample time to fully explore it due to the demands of other departmental subjects.\nDuring my final year of study, I had the opportunity to intern at [Mitsubishi Electric Factory Automation Thailand](https://www.mitsubishifa.co.th/). Here, I worked on SCADA system design, encompassing both frontend (UI) and backend (transaction, SQL, AWS IoT, etc.) development. This experience felt similar to full-stack development.\nAfter graduating, I got a job in the field of automation, working on logistics and robotics at [Somboon Siasun Tech](https://www.somboonsiasuntech.co.th/). During my time there, I used my programming skills to help automate the commissioning and testing workflows for the systems my team and I installed onsite for customers.\nNowadays, I have decided to transition into the tech world and aim to become a full-stack engineer. I want to work in a field I love and continue learning.",
    avatarUrl: "/me.svg",
    skills: [
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Go",
        "Python",
        "MongoDB",
        "Redis",
        "PostgreSQL",
        "MySQL",
    ],
    navBar: [
        // { name: "Home", url: "/" },
        { name: "About", url: "/#about" },
        { name: "Experience", url: "/#experience" },
        { name: "Education", url: "/#education" },
        { name: "Projects", url: "/#projects" },
        { name: "Contact", url: "/#contact" },
        { name: "Resume", url: "/resume.pdf" },
    ],
    contacts: {
        email: "phurin.nrt@gmail.com",
        tel: "+66623545736",
        social: {
            Github: {
                name: "GitHub",
                url: "https://github.com/phurin-git/",
                icon: Github,
            },
            Facebook: {
                name: "Facebook",
                url: "https://www.facebook.com/phurinnararat/",
                icon: Facebook,
            },
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/phurin.ig/",
                icon: Instagram,
            },
            Linkedin: {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/phurinnararat/",
                icon: Linkedin,
            },
        },
    },
    works: [
        {
            company: "Mitsubishi Electric Factory Automation Thailand",
            href: "https://www.mitsubishifa.co.th/",
            location: "Phra Khanong, Bangkok, Thailand",
            title: "Internship",
            logoUrl: "/logo/melft.svg",
            start: "Aug 2022",
            end: "Nov 2022",
            description: "Design SCADA system, sharing techniques and providing user manuals to customers and team members. Also designed SCADA prototype for company's decarbonization project."
        },
        {
            company: "Somboon Siasun Tech",
            href: "https://www.somboonsiasuntech.co.th/",
            location: "Bang Chalong, Samut Prakan, Thailand",
            title: "Automation Engineer",
            logoUrl: "/logo/sst.svg",
            start: "Jun 2023",
            end: "Jul 2024",
            description: "Installed and wired ASRS electrical components, programmed PLC and HMI for control, and integrated ASRS with WMS, WCS, and ERP systems. Conducted hardware and software testing to validate performance, trained customers on operation and maintenance, and managed the go-live process while monitoring initial performance"
        },
    ].reverse(),
    education: [
        {
            school: "Kasetsart University",
            href: "https://www.ku.ac.th/",
            degree: "B.Eng. in Robotic and Automation Systems Engineering",
            logoUrl: "/logo/ku.svg",
            start: "2019",
            end: "2023",
        },
    ].reverse(),
    projects: [
        {
            title: "Portfolio-v1",
            href: "https://portfolio-phurin-nararats-projects.vercel.app/",
            dates: "",
            description: "",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            image: "/og/portfolio-v1.svg",
            video: "",
            links: [
                {
                    type: "website",
                    href: "https://portfolio-phurin-nararats-projects.vercel.app/",
                },
                {
                    type: "source",
                    href: "https://github.com/phurin-git/portfolio-v1/",
                },
            ],
        },
        {
            title: "Space tourism website",
            href: "https://phurin-git.github.io/femt-space-tourism-website/",
            dates: "",
            description: "",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: "/og/space-tourism.svg",
            video: "",
            links: [
                {
                    type: "website",
                    href: "https://phurin-git.github.io/femt-space-tourism-website/",
                },
                {
                    type: "source",
                    href: "https://github.com/phurin-git/femt-space-tourism-website/",
                },
            ],
        },
        {
            title: "Positivus",
            href: "https://positivus-puce.vercel.app/",
            dates: "",
            description: "",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            image: "/og/positivus.svg",
            video: "",
            links: [
                {
                    type: "website",
                    href: "https://positivus-puce.vercel.app/",
                },
                {
                    type: "source",
                    href: "https://github.com/phurin-git/positivus/",
                },
            ],
        },
        {
            title: "Smart Agro",
            href: "https://smart-argo.vercel.app/",
            dates: "",
            description: "",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            image: "/og/smart-agro.svg",
            video: "",
            links: [
                {
                    type: "website",
                    href: "https://smart-argo.vercel.app/",
                },
                {
                    type: "source",
                    href: "https://github.com/phurin-git/smart-argo/",
                },
            ],
        },
    ].reverse(),
};