"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  title: string;
  desc: string;
  tech: string[];
  link?: string;
}

export default function ProjectCard({ title, desc, tech, link }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-bold text-dreamyPink">{title}</h3>
        <p className="text-softWhite mt-2">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-pastelBlue text-darkBlue text-xs px-3 py-1 rounded-full font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <div className="mt-5 text-right">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pastelBlue hover:text-dreamyPink transition"
          >
            <FaGithub className="text-lg" />
            <span className="font-semibold">View Code</span>
          </a>
        </div>
      )}
    </motion.div>
  );
}
