"use client";
import GalaxyBackground from "../components/GalaxyBackground";
import Navbar from "../components/Navbar";
import About from "./about";
import Education from "./education";
import Projects from "./projects";
import Tools from "./tools";
import ArtworkGrid from "../components/ArtworkGrid";
import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <>
      <GalaxyBackground />
      <Navbar />

      <main>
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center text-center"
        >
          <div className="max-w-2xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-pastelBlue font-dreamy">
              Hi, I'm Ananya
            </h1>
            <p className="mt-6 text-xl text-lavender">
              A software developer who also paints her imagination ✨
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <a
                href="/ananya_resume_latest.pdf"
                className="bg-dreamyPink text-darkBlue px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a>
              <a
                href="#about"
                className="border border-pastelBlue text-pastelBlue px-6 py-3 rounded-lg transition relative
             hover:bg-pastelBlue hover:text-darkBlue hover:shadow-[0_0_12px_#a0e7e5] focus:outline-none"
              >
                About Me
              </a>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <About />
        <Education />
        <Button />
        <Projects />
        <Tools />
        <ArtworkGrid />
        <ContactForm />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
