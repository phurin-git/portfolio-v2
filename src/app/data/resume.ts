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
import academicProject1 from '../images/og/object-inspection-opencv-python.png';
import academicProject2 from '../images/og/3dof-robot-kinematics-dynamics.png';
import academicProject3 from '../images/og/scada-for-industrial-decarbonization.png';
import academicProject4 from '../images/og/robot-control-motion-capture-mqtt-iot.png';

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
            description: "Researched and documented SCADA design techniques using ICONICS GENESIS64, created user manuals tailored to customer needs, and designed SCADA systems based on specific requirements."
        },
        {
            company: "Somboon Siasun Tech",
            href: "https://www.somboonsiasuntech.co.th/",
            location: "Bang Chalong, Samut Prakan, Thailand",
            title: "Automation Engineer",
            logoUrl: company2,
            start: "Jun 2023",
            end: "Jul 2024",
            description: "Installed and wired electrical components for automated storage systems, programmed PLCs and HMIs to meet user needs, and integrated control systems with existing infrastructures to streamline workflows. And performed rigorous testing to ensure system reliability, trained customers for better system use, and managed the go-live process to ensure a smooth transition and prompt issue resolution."
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
    academicProjects: [
        {
            title: "Object Inspection by using Python OpenCV",
            href: "https://github.com/phurin-git/object-inspection-opencv-python",
            dates: "within Dec 2021",
            description: "Developing algorithms to detect and analyze the shapes and dimensions of objects, measured in millimeters, within video streams. Its goal was to enable accurate real-time inspection processes, specifically for applications in quality control, thereby enhancing operational efficiency and precision.",
            technologies: ["Python", "OpenCV", "NumPy", "Tkinter"],
            image: academicProject1,
            video: "",
            links: [
                {
                    type: "source",
                    href: "https://github.com/phurin-git/object-inspection-opencv-python",
                },
            ],
        },
        {
            title: "3DoF Robot Kinematics and Dynamics Design",
            href: "https://github.com/phurin-git/3dof-robot-kinematics-dynamics",
            dates: "Mar — Apr 2022",
            description: "Designed with a focus on pick-and-place tasks and considering defined load and workspace parameters, this system utilizes Python SymPy to calculate Forward and Inverse Kinematics, Jacobian matrices, and Dynamic Equations using the Euler-Lagrange approach. The selection of actuators and transmission systems is optimized for enhancing robot performance and efficiency in task execution.",
            technologies: ["Python", "SymPy", "NumPy"],
            image: academicProject2,
            video: "",
            links: [
                {
                    type: "source",
                    href: "https://github.com/phurin-git/3dof-robot-kinematics-dynamics",
                },
            ],
        },
        {
            title: "SCADA for Industrial Decarbonization",
            href: "https://www.mitsubishifa.co.th/en/news/genesis64%E2%84%A2-the-intelligent-software-of-mitsubishi-electric-takes-thai-entrepreneurs-through-the-",
            dates: "Oct — Nov 2022",
            description: "Developed a SCADA system for industrial clients to comply with TGO policies related to international emissions trading schemes, aimed at reducing greenhouse gas emissions. The system is designed to monitor real-time energy resource consumption and calculate carbon credit profits based on historical consumption data.",
            technologies: ["MSSQL", "AWS IoT", "MQTT", "ICONICS GENESIS64"],
            image: academicProject3,
            video: "",
            links: [
                {
                    type: "website",
                    href: "https://www.mitsubishifa.co.th/en/news/genesis64%E2%84%A2-the-intelligent-software-of-mitsubishi-electric-takes-thai-entrepreneurs-through-the-",
                },
            ],
        },
        {
            title: "Robot control by using Motion Capture and MQTT IoT Protocol",
            href: "https://ieeexplore.ieee.org/document/10589761",
            dates: "Jan — May 2023",
            description: "Developed wireless control of robot manipulator using human motion, aiming to seamlessly integrate motion capture, robot control, and real-time visualization.",
            technologies: ["Python", "MQTT", "NumPy", "ASRS", "MPU9250", "Raspberry Pi 4B"],
            image: academicProject4,
            video: "",
            links: [
                {
                    type: "website",
                    href: "https://ieeexplore.ieee.org/document/10589761",
                },
                {
                    type: "source",
                    href: "https://github.com/phurin-git/python-ahrs-mpu9250",
                },
            ],
        },
    ].reverse(),
};