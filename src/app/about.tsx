"use client";
import { motion } from "framer-motion";

const data = [
  {
    year: "Who Am I?",
    title: "CSE Student",
    description:
      "I'm a Computer Science and Engineering student at KIET Group of Institutions,Ghaziabad with my roots from Prayagraj. Passionate about learning, building impactful tech, and blending creativity with logic.",
  },
  {
    year: "Tech Stack",
    title: "Frontend Developer & Full Stack Enthusiast",
    description:
      "Skilled in React, Next.js, Node.js, MongoDB, and Tailwind CSS. I love building responsive UIs, exploring UI/UX, working on full-stack projects, and creating web tools that solve real problems.",
  },
  {
    year: "Creative Soul",
    title: "Home Artist & Digital Designer",
    description:
      "Art is where my heart lives. I paint, sketch, design digital art, and love experimenting with fashion. Creativity drives my development journey too—it all blends together beautifully.",
  },
  {
    year: "Beyond Tech",
    title: "Leader, Coordinator & Achiever",
    description:
      "Currently serving as the Student Placement Coordinator under CRPC KIET, and core team member of KIET Koder’s Korner (K3). I’ve organized major events, completed Deloitte Job Simulation, and solved 900+ coding problems across platforms.",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#5befff] mb-12"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20"
          >
            <p className="text-sm text-pastelBlue">{item.year}</p>
            <h3 className="text-xl font-semibold text-dreamyPink">{item.title}</h3>
            <p className="text-softWhite mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
