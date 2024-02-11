export interface DataStructure {
    projectId: number;
    projectTitle: string;
    projectImages: string[];
    projectText: string;
    repoLinks: linkSection[];
    liveLinks?: liveLinkSection[];
    tech: string[];
    projectVideo?: string;
    projectLiveLink?: string;
}

export interface linkSection {
    link: string;
    title: string;
}

export interface liveLinkSection {
    link: string;
    title: string;
}

interface AboutMeSection {
    text: string;
    image: string;
}

export const aboutMe: AboutMeSection = {
    text: "Hi my name is Elliott, and I am a software engineer! I like to delve into new technologies to push my knowledge further. Before I became a software engineer I had completed my PGCE and Master in Chemistry. Now I seek to cultivate my skills in a challenging software engineering post.",
    image: "https://i2.lensdump.com/i/rl4qCz.jpg",
};

export const data: DataStructure[] = [
    {
        projectId: 1,
        projectTitle: "WeShare (Four week team project)",
        projectImages: ["https://i3.lensdump.com/i/rvJQF3.jpg"],
        projectText: `The four-week project was the capstone project of my School of Code journey! This features heavily in engineering a valued user experience through teamwork, combining all elements of planning and agile methodologies to make a unique and valued user experience.`,
        repoLinks: [
            {
                link: "https://github.com/Stevens-97/final-project-repo-easy-scrum-easy-go-room-22",
                title: "Code",
            },
        ],
        tech: [
            "Next.js",
            "MUI",
            "Cypress.io",
            "node.js",
            "jason-server",
            "Javascript",
            "javascript",
        ],
        projectVideo: "https://youtu.be/IUmr7r1vAXE",
    },
    {
        projectId: 2,
        projectTitle: "Bootcamper help desk (One week team project)",
        projectImages: [
            "https://i2.lensdump.com/i/rl4ZMc.jpg",
            "https://i1.lensdump.com/i/rl4Iq1.jpg",
        ],
        projectText:
            "Developed within a week by a four-person team employing agile methodologies, this project enables community-focused skills workshops and seeks to connect people.",
        repoLinks: [
            {
                link: "https://github.com/Stevens-97/BootcamperHelpDesk",
                title: "BE code",
            },
            {
                link: "https://github.com/Stevens-97/national-project-week-repo-2-room-16-craig-elliot-emily-michael",
                title: "FE code",
            },
        ],
        tech: [
            "JavaScript",
            "React",
            "node.js",
            "Jest",
            "SuperTest",
            "pg",
            "CSS/HTML",
            "postman",
        ],
    },
    {
        projectId: 3,
        projectTitle: "Personal portfolio site",
        projectImages: ["https://i2.lensdump.com/i/rSVsye.jpg"],
        projectText:
            "My portfolio site showcases my professional journey and insights, showcasing my projects section and a blog with my latest thoughts and experiences.",
        repoLinks: [
            {
                link: "https://github.com/Stevens-97/portfolio-site",
                title: "Code",
            },
        ],
        tech: ["JavaScript", "Next.js", "typescript", "SCSS/HTML"],
    },
];
