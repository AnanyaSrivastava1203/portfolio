"use client";
import { motion } from "framer-motion";

interface ToolCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function ToolCard({ name, icon }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-md flex flex-col items-center"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-softWhite text-sm">{name}</p>
    </motion.div>
  );
}
