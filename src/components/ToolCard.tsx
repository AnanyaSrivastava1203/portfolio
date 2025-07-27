"use client";
import { motion } from "framer-motion";

interface ToolCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function ToolCard({ name, icon }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl flex flex-col items-center 
                 transition-all duration-300 hover:shadow-[0_0_15px_#88ccff40]"
    >
      <div className="text-4xl text-white drop-shadow-glow mb-2">{icon}</div>
      <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#A7C7FF] via-white to-[#B2F0F4] font-medium">
        {name}
      </p>
    </motion.div>
  );
}
