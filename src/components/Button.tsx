"use client";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  href: string;
  outline?: boolean;
}

export default function Button({ text, href, outline = false }: ButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg font-semibold transition 
        ${outline
          ? "border border-pastelBlue text-pastelBlue hover:bg-pastelBlue hover:text-darkBlue"
          : "bg-dreamyPink text-darkBlue hover:opacity-90"
        }`}
    >
      {text}
    </motion.a>
  );
}
