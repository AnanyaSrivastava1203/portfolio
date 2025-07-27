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
        className="text-4xl font-bold text-center text-pastelBlue mb-12 drop-shadow-md"
      >
        Artwork
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {artworks.map((art, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-lg hover:shadow-pastelBlue/30 transition-shadow"
          >
            <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden shadow-inner">
              <Image
                src={art.url}
                alt={art.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-center text-lg font-semibold text-dreamyPink tracking-wide">
              {art.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
