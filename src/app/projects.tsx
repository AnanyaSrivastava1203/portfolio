"use client";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Veggify",
    desc: "A MERN-based recipe platform with filtering.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/AnanyaSrivastava1203/vegify-recipe-app-frontend"
  },
  {
    title: "CodePulse Aggregator",
    desc: "Coding profile dashboard fetching user data from LeetCode, CF, and GFG.",
    tech: ["React", "Node", "REST API", "Cheerio"],
    link: "https://github.com/AnanyaSrivastava1203/Codepulse"
  },
  {
    title: "AgroLink",
    desc: "Portal for farmer-consumer-agro expert connection.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/AnanyaSrivastava1203/agro-link"
  },
  {
    title: "Task Scheduler",
    desc: "Hourly task reminder system via email using PHP & CRON.",
    tech: ["PHP", "CRON", "Email API"],
    link: "https://github.com/AnanyaSrivastava1203/task-scheduler-AnanyaSrivastava1203"
  },
  {
    title: "Snake Game",
    desc: "A simple snake game built with JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AnanyaSrivastava1203/snake_game"
  },
  {
    title: "Temperature Converter",
    desc: "Web app to convert temperatures between units.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AnanyaSrivastava1203/Temperature_Converter"
  },
  {
    title: "Todolu",
    desc: "A task management app to organize daily activities.",
    tech: ["React", "Node", "MongoDB", "Firebase"],
    link: "https://github.com/AnanyaSrivastava1203/todolu"
  },
  {
    title: "EduMinds",
    desc: "An educational platform connecting learners and resources.",
    tech: ["MERN Stack"],
    link: "https://github.com/AnanyaSrivastava1203/EduMinds"
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
