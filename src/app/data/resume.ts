import {
    faGithub as Github,
    faFacebook as Facebook,
    faInstagram as Instagram,
    faLinkedin as Linkedin,
} from '@fortawesome/free-brands-svg-icons';
import me from '../images/me.png';
import company1 from '../images/logo/melft.svg';
import company2 from '../images/logo/sst.svg';
import school1 from '../images/logo/ku.svg';
import project1 from '../images/og/portfolio-v1.png';
import project2 from '../images/og/space-tourism.png';
import project3 from '../images/og/positivus.png';
import project4 from '../images/og/smart-agro.png';

export const data = {
    name: "Phurin Nararat",
    initials: "PN",
    url: "https://www.phurinnararat.works",
    location: "Bang Bo, Samut Prakan, Thailand",
    locationUrl: "https://maps.app.goo.gl/gT4UEUKwuzUB8Fdi7",
    description: "Excited Automation Engineer moving into Full Stack Engineering. Eager to keep learning and loves to code.",
    summary: "My journey into the tech world began during my college years, where I studied robotics and automation system engineering. I first learned C programming as my foundational programming language. Driven by my interest, I later learned Java and Python. I have programmed various microprocessors, controllers, single-board computers, and robot manipulators. I find coding in different programming languages enjoyable because it is logical, much like mathematics. However, I did not have ample time to fully explore it due to the demands of other departmental subjects.\nDuring my final year of study, I had the opportunity to intern at [Mitsubishi Electric Factory Automation Thailand](https://www.mitsubishifa.co.th/). Here, I worked on SCADA system design, encompassing both frontend (UI) and backend (transaction, SQL, AWS IoT, etc.) development. This experience felt similar to full-stack development.\nAfter graduating, I got a job in the field of automation, working on logistics and robotics at [Somboon Siasun Tech](https://www.somboonsiasuntech.co.th/). During my time there, I used my programming skills to help automate the commissioning and testing workflows for the systems my team and I installed onsite for customers.\nNowadays, I have decided to transition into the tech world and aim to become a full-stack engineer. I want to work in a field I love and continue learning.",
    avatarUrl: me,
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
            logoUrl: company1,
            start: "Aug 2022",
            end: "Nov 2022",
            description: "Design SCADA system, sharing techniques and providing user manuals to customers and team members. Also designed SCADA prototype for company's decarbonization project."
        },
        {
            company: "Somboon Siasun Tech",
            href: "https://www.somboonsiasuntech.co.th/",
            location: "Bang Chalong, Samut Prakan, Thailand",
            title: "Automation Engineer",
            logoUrl: company2,
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
            logoUrl: school1,
            start: "2019",
            end: "2023",
        },
    ].reverse(),
    projects: [
        {
            title: "Portfolio-v1",
            href: "https://portfolio-phurin-nararats-projects.vercel.app/",
            dates: "23 — 28 Jul 2024",
            description: "Discover my journey as a web developer with Portfolio V1, a personal project designed to showcase my skills, projects, and professional growth. This project serves as a comprehensive introduction to my work and capabilities in web development.",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            image: project1,
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
            dates: "9 — 18 Aug 2024",
            description: "Explore the wonders of space travel with the Space Tourism Website, a project developed as a solution to the Space Tourism Website challenge on Frontend Mentor.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: project2,
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
            dates: "24 Aug — 2 Sep 2024",
            description: "Positivus is a web application designed to spread positivity and inspire users through uplifting quotes and messages. This project was developed to practice and enhance my frontend development skills using an existing design from the Figma community.",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            image: project3,
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
            dates: "2 — 4 Sep 2024",
            description: "Smart Agro is a web application designed to showcase organic food and agriculture farm services. This project was developed to practice and enhance my frontend development skills using an existing design from the Figma community.",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            image: project4,
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