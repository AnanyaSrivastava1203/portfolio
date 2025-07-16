"use client";
import { motion } from "framer-motion";
import {
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className=" px-6 py-20 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-pastelBlue mb-6"
      >
        My Coding Profiles
      </motion.h2>

      {/* 🔗 Codeolio Link */}
      {/* 🔗 Codeolio Link with hover effect */}
      <motion.a
        href="https://codolio.com/profile/itzzmee"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mb-12 text-dreamyPink font-semibold text-lg relative transition-all duration-300"
      >
        <span className="relative z-10">
          View my complete profile on Codeolio 🚀
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-pastelBlue opacity-60 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
      </motion.a>

      {/* Coding Platforms Icons */}
      <div className="flex flex-wrap justify-center gap-10">
        {[
          {
            icon: <SiLeetcode className="text-4xl" />,
            name: "LeetCode",
            link: "https://leetcode.com/u/itzzmee/",
            border: "border-orange-300",
            glow: "hover:shadow-[0_0_20px_#fb923c]",
          },
          {
            icon: <SiCodechef className="text-4xl" />,
            name: "CodeChef",
            link: "https://www.codechef.com/users/itzzmee",
            border: "border-[#f9a8d4]",
            glow: "hover:shadow-[0_0_20px_#f9a8d4]",
          },
          {
            icon: <SiCodeforces className="text-4xl" />,
            name: "Codeforces",
            link: "https://codeforces.com/profile/itzzmee",
            border: "border-blue-400",
            glow: "hover:shadow-[0_0_20px_#60a5fa]",
          },
          {
            icon: <SiGeeksforgeeks className="text-4xl" />,
            name: "GFG",
            link: "https://www.geeksforgeeks.org/user/ananyaaa1203/",
            border: "border-green-400",
            glow: "hover:shadow-[0_0_20px_#4ade80]",
          },
        ].map((platform, idx) => (
          <motion.a
            key={idx}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-24 h-24 flex items-center justify-center rounded-full border-2 ${platform.border} ${platform.glow} bg-white/10 text-white transition duration-300`}
            title={platform.name}
          >
            {platform.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
