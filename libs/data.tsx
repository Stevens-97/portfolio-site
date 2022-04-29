export interface DataStructure {
  projectId: number;
  projectTitle: string;
  projectImages: string[];
  projectText: string;
  repo: string;
  tech: string;
}

interface AboutMeSection {
  text: string;
  image: string;
}

export const aboutMe: AboutMeSection = {
  text: "Hi my name is Elliott, and I am a software engineer! I like to delve into new technologies to push my knowledge further. Before I became a software engineer I had completed my PGCE and Master in Chemistry. Now I seek to cultivate my skills in a challenging software engineering post.",
  image: "https://i2.lensdump.com/i/rl4qCz.jpg",
};

// {
//   projectId: 1,
//   projectTitle: "First project!",
//   projectText:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   projectImages: [
//     "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
//     "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   ],
//   projectTags: ["cats", "really cute", "cute"],
// },

export const data: DataStructure[] = [
  {
    projectId: 1,
    projectTitle: "WeShare (Four week team project)",
    projectImages: ["https://i3.lensdump.com/i/rvJQF3.jpg"],
    projectText:
      "The four-week project was the capstone project of my School of Code journey! This is currently being developed and features heavily in engineering a valued user experience through teamwork, combining all elements of planning and agile methodologies to make a unique and valued user experience. Repo to be added soon.",
    repo: "https://github.com/SchoolOfCode/final-project-repo-easy-scrum-easy-go-room-21/tree/dev",
    tech: "Tech: Next.js, MUI (More to be added)",
  },
  {
    projectId: 2,
    projectTitle: "Bootcamper help desk (One week team project)",
    projectImages: [
      "https://i2.lensdump.com/i/rl4ZMc.jpg",
      "https://i1.lensdump.com/i/rl4Iq1.jpg",
    ],
    projectText:
      "The bootcamper help desk was created in a week with a team of four using agile methodolgies (stand ups, retrospectives, kanban ect). This features testing (jest & superTest), frontend deployed on netlify and backend deployed on heroku. Repo to be added soon.",
    repo: "https://github.com/SchoolOfCode/national-project-week-room-16-craig-elliot-emily-michael",
    tech: "Tech: JavaScript, React, Node.Js, Jest, SuperTest, pg, CSS/HTML",
  },
  {
    projectId: 3,
    projectTitle: "Personal portfolio site",
    projectImages: ["https://i2.lensdump.com/i/rSVsye.jpg"],
    projectText:
      "This is my site that hosts my personal and team projects. This is still being developed! I focused initially on user experience and now seek to dive into the testing and building a backend to serve the data.",
    repo: "https://github.com/Stevens-97/portfolio-site",
    tech: "Tech: JavaScript, Next.js, PG, Jest, SuperTest, SCSS/HTML",
  },
  {
    projectId: 4,
    projectTitle: "Song reloader",
    projectImages: [
      "https://i2.lensdump.com/i/rl4Rwm.jpg",
      "https://i3.lensdump.com/i/rl4E1i.jpg",
    ],
    projectText:
      "Created as a team of fellow bootcampers during a single-day hackathon. There are plans to keep developing this. Repo to be added soon.",
    repo: "To be added!",
    tech: "Tech: React, CSS/HTML, JavaScript",
  },
  {
    projectId: 5,
    projectTitle: "Hangman",
    projectImages: [
      "https://i.lensdump.com/i/rvJ9I0.jpg",
      "https://i2.lensdump.com/i/rl4WKk.jpg",
      "https://i3.lensdump.com/i/rl4iPx.jpg",
    ],
    projectText:
      "This is my attempt at recreating the game hangman. This was my first longer project where I implimented all my learning upto date (testing, RESTful APIs, user stories etc)!",
    repo: "https://github.com/Stevens-97/hangman",
    tech: "Tech: JavaScript, CSS/HTML, dotenv, Jest, SuperTest, PG, Express",
  },
  {
    projectId: 6,
    projectTitle: "Snake ",
    projectImages: [
      "https://i1.lensdump.com/i/rl41zP.jpg",
      "https://i.lensdump.com/i/rl4tCZ.jpg",
    ],
    projectText:
      "This is was one of my first projects and features Python. This project was also my first experience into project orientated programming (classes, inheritence ect).",
    repo: "https://github.com/Stevens-97/snake",
    tech: "Tech: Python",
  },
];
