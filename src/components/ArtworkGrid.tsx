"use client";
import { motion } from "framer-motion";

const artworks = [
  { title: "Digital Galaxy", url: "/art/galaxy.png" },
  { title: "AI Portrait", url: "/art/portrait.png" },
  { title: "Dreamy Sketch", url: "/art/sketch.png" },
];

export default function ArtworkGrid() {
  return (
    <section id="artwork" className="min-h-screen px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-pastelBlue mb-12"
      >
        Artwork
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {artworks.map((art, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 p-4 rounded-xl shadow-lg border border-white/20 backdrop-blur"
          >
            <img src={art.url} alt={art.title} className="rounded-lg w-full mb-3" />
            <h3 className="text-dreamyPink font-semibold text-center">{art.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
