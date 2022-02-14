export interface DataStructure {
  project: string;
  images: string[];
  text: string;
  repo: string;
  tech: string;
}

interface AboutMeSection {
  text: string;
  image: string;
}

export const aboutMe: AboutMeSection = {
  text: "Hi my name is Elliott, and I am a software engineer! I like to delve into new technologies to push my knowledge further. Before I became a software engineer I had completed my PGCE and Master in Chemistry. Now I seek to cultivate my skills in a challenging software engineering post.",
  image: "To be added!",
};

export const data: DataStructure[] = [
  {
    project: "Personal portfolio site",
    images: ["https://i3.lensdump.com/i/rl4ghK.jpg"],
    text: "This is my personal site that hosts my personal and group prjects. This features testing (jest & superTest), frontend deployed on netlify and backend deployed on heroku.",
    repo: "https://github.com/Stevens-97/portfolio-site",
    tech: "JavaScript, Next.js, PG, Jest, SuperTest, SCSS/HTML",
  },
  {
    project: "Bootcamper help desk",
    images: [
      "https://i2.lensdump.com/i/rl4ZMc.jpg",
      "https://i1.lensdump.com/i/rl4Iq1.jpg",
    ],
    text: "The bootcamper help desk was created in under a week with a team of four using agile methodolgies (stand ups, retrospectives, kanban ect). This features testing (jest & superTest), frontend deployed on netlify and backend deployed on heroku.",
    repo: "https://github.com/SchoolOfCode/national-project-week-repo-2-room-16-craig-elliot-emily-michael",
    tech: "JavaScript, React, Node.Js, Jest, SuperTest, pg, CSS/HTML",
  },
  {
    project: "Song reloader",
    images: [
      "https://i2.lensdump.com/i/rl4Rwm.jpg",
      "https://i3.lensdump.com/i/rl4E1i.jpg",
    ],
    text: "Created as apart of a team of fellow bootcampers during a single day hackathon. I took the project and kept working on it.",
    repo: "To be added!",
    tech: "React, CSS/HTML, JavaScript",
  },
  {
    project: "Hangman",
    images: [
      "https://i.lensdump.com/i/rl40jH.jpg",
      "https://i2.lensdump.com/i/rl4WKk.jpg",
      "https://i3.lensdump.com/i/rl4iPx.jpg",
    ],
    text: "This is my personal site that hosts my personal project where I recreated the game hangman. This was my first longer project where I implimented all my learning upto date (testing, RESTful APIs, user stories etc)!",
    repo: "https://github.com/Stevens-97/hangman",
    tech: "JavaScript, CSS/HTML, dotenv, Jest, SuperTest, PG, Express",
  },
  {
    project: "Snake ",
    images: [
      "https://i1.lensdump.com/i/rl41zP.jpg",
      "https://i.lensdump.com/i/rl4tCZ.jpg",
    ],
    text: "This is was one of my first projects and used Python. This project was my first experience into project orientated programming (classes, inheritence ect).",
    repo: "https://github.com/Stevens-97/snake",
    tech: "Python",
  },
  {
    project: "Four week project",
    images: ["To be added!"],
    text: "To be added!",
    repo: "To be added!",
    tech: "To be added!",
  },
];