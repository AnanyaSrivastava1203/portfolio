"use client";
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-pastelBlue text-center mb-4"
      >
        Contact
      </motion.h2>
      <p className="text-softWhite text-center mb-10">
        Let’s build something beautiful together 💌
      </p>

      <form className="max-w-2xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-white/10 px-4 py-3 rounded-lg border border-white/20 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-white/10 px-4 py-3 rounded-lg border border-white/20 text-white"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="bg-white/10 px-4 py-3 rounded-lg border border-white/20 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-pastelBlue text-darkBlue px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 flex justify-center gap-6 text-2xl text-pastelBlue">
        <a href="mailto:sriananya1203@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/ananyasrivastava20040912/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AnanyaSrivastava1203"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/soulfully_artistic?igsh=NzF1a2l5YXpkcm93"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
