"use client";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ToolCard from "../components/ToolCard";
import { FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiAdobephotoshop } from "react-icons/si";

const tools = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> }
];

export default function Tools() {
  return (
    <SectionWrapper id="tools" title="Tools & Technologies">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <ToolCard key={idx} {...tool} />
        ))}
      </div>
    </SectionWrapper>
  );
}