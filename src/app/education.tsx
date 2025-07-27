"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "KIET Group of Institutions",
      duration: "2022 - 2026",
      percentage: "86.76%",
    },
    {
      title: "Intermediate",
      institution: "Bishop Johnson School and College, Prayagraj",
      duration: "2021 - 2022",
      percentage: "95.6%",
    },
    {
      title: "High School",
      institution: "Bishop Johnson School and College, Prayagraj",
      duration: "2019 - 2020",
      percentage: "91.5%",
    },
  ];

  return (
    <section id="education" className="min-h-screen px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-pastelBlue mb-12"
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center text-softWhite w-full aspect-square flex flex-col justify-center shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(0,195,255,0.5)] transition duration-300"

          >
            <h3 className="text-lg font-semibold text-dreamyPink mb-2">
              {edu.title}
            </h3>
            <p className="text-md">{edu.institution}</p>
            <p className="text-sm text-lavender mt-1">{edu.duration}</p>
            {edu.percentage && (
              <p className="text-sm mt-1">Percentage: {edu.percentage}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
