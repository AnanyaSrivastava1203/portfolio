"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="min-h-screen px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-pastelBlue mb-12"
      >
        {title}
      </motion.h2>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
