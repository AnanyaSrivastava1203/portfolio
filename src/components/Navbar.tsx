"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = ["home", "about", "projects", "tools", "artwork", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      } bg-darkBlue bg-opacity-70`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-dreamyPink text-2xl font-bold">
          Ananya
        </a>
        <div className="flex gap-6 text-softWhite">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-softWhite hover:text-pastelBlue hover:underline underline-offset-4 transition duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
