"use client";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Veggify", desc: "A MERN-based recipe platform for vegetarians.", tech: ["MongoDB", "Express", "React", "Node"] },
  { title: "Student Progress Tracker", desc: "Visualized CF/GFG coding growth in dashboards.", tech: ["React", "Chart.js", "Node"] },
  { title: "Virtual Fashion Advisor", desc: "ML-powered fashion suggestion platform.", tech: ["NLP", "TensorFlow", "React"] },
  { title: "CodePulse Aggregator", desc: "Coding profile dashboard fetching user data from LeetCode, CF, and GFG.", tech: ["React", "Node", "REST API", "Chart.js"] },
  { title: "AgroLink", desc: "Portal for farmer-consumer-agro expert connection.", tech: ["MongoDB", "Express", "React", "Node", "Tailwind"] },
  { title: "Task Scheduler", desc: "Hourly task reminder system via email using PHP & CRON.", tech: ["PHP", "CRON", "Email API"] }
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
