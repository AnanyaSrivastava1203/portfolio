"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-6 py-20">
      <motion.h2 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center text-pastelBlue mb-12">
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
        <p className="text-softWhite text-lg">B.Tech in Computer Science & Engineering</p>
        <p className="text-lavender mt-2">KIET Group of Institutions | 2022 - 2026</p>
        <p className="text-sm text-pastelBlue mt-4">Core subjects: Data Structures, Web Dev, DBMS, AI/ML</p>
      </div>
    </section>
  );
}
