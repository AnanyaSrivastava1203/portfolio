"use client";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = ["home", "about", "projects", "tools", "artwork", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-shadow duration-300
        ${scrolled ? "shadow-lg" : ""}
        bg-darkBlue/30 backdrop-blur-md border-b border-white/10`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#9fc9ff] via-[#b3cfff] to-[#c2e0ff] drop-shadow-glow"
        >
          Ananya
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-softWhite text-sm font-medium hover:text-pastelBlue hover:underline underline-offset-4 transition duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger icon */}
        <div
          className="md:hidden text-3xl text-softWhite cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-darkBlue/40 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block text-softWhite capitalize text-base hover:text-pastelBlue transition"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
