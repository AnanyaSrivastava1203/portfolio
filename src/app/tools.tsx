"use client";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ToolCard from "../components/ToolCard";

import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython, FaFigma
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiPostman, SiAdobephotoshop,
  SiC, SiCplusplus, SiJavascript, SiMysql, SiPhp, SiFirebase, SiNextdotjs, SiExpress
} from "react-icons/si";

const languages = [
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <SiMysql /> }
];

const technologies = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> }
];

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> }
];

export default function Tools() {
  return (
    <SectionWrapper id="tools" title="Tools & Technologies">
      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A7C7FF] via-white to-[#B2F0F4] mb-6">
          Languages
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {languages.map((lang, idx) => (
            <ToolCard key={idx} {...lang} />
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A7C7FF] via-white to-[#B2F0F4] mb-6">
          Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <ToolCard key={idx} {...tech} />
          ))}
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A7C7FF] via-white to-[#B2F0F4] mb-6">
          Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <ToolCard key={idx} {...tool} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
