"use client";
import { motion } from "framer-motion";

const data = [
  { year: "2022", title: "Started B.Tech CSE", description: "Started exploring coding & development." },
  { year: "2023", title: "DevUp + MUN", description: "Worked in DevUp, participated in MUN as Belgium delegate." },
  { year: "2024", title: "Hackathons + Full Stack", description: "Built MERN stack apps, gained UI/UX skills." },
  { year: "Now", title: "Frontend Dev + Artist", description: "Blending logic and creativity daily." },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20">
      <motion.h2 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center text-pastelBlue mb-12">
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {data.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
            <p className="text-sm text-pastelBlue">{item.year}</p>
            <h3 className="text-xl font-semibold text-dreamyPink">{item.title}</h3>
            <p className="text-softWhite mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
