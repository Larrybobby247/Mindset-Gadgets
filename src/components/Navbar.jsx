import { useState, useEffect } from "react";
import { BrandData } from "../data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Menu", "About", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF0F3]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl">🎂</span>
          <span className="font-['Playfair_Display'] text-xl font-bold text-[#8B1A4A] tracking-tight leading-none">
            Biana<span className="text-[#D4527E] font-normal italic"> Cakes</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[#5C1A35] hover:text-[#D4527E] transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/2349066835891"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#D4527E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#B8395F] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>Order on WhatsApp</span>
          <span className="text-base">💬</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#8B1A4A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#8B1A4A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#8B1A4A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#FFF0F3]/98 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-[#5C1A35] hover:text-[#D4527E] transition-colors py-1"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/2349066835891"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4527E] text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Order on WhatsApp 💬
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
