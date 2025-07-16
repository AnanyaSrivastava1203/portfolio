"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const artworks = [
  { title: "Ciao Canals", url: "/images/ciao-canals.jpg" },
  { title: "Crimson KeepSake", url: "/images/Crimson-KeepSake.jpg" },
  { title: "Dior Kissed", url: "/images/dior-kissed.jpg" },
  { title: "Luna Sol", url: "/images/Luna-sol.jpg" },
  { title: "Nov 18", url: "/images/Nov-18.jpg" },
  { title: "Pixie Dust", url: "/images/pixie-dust.jpg" },
  { title: "The Brooding Rogue", url: "/images/the-brooding-rogue.jpg" },
  { title: "Vexed Visions", url: "/images/vexed-visions.jpg" },
  { title: "Whispers of Dusk & Gold", url: "/images/whispers-of-dusk-&-gold.jpg" },
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
            <div className="relative w-full h-64 mb-3 flex items-center justify-center bg-black/20 rounded-lg overflow-hidden">
              <Image
                src={art.url}
                alt={art.title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-dreamyPink font-semibold text-center">{art.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
