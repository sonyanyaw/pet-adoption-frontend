"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-xl">
          Fluffy
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#who-we-are">Who we are</a>
          <a href="#help">Help</a>
          <a href="#pets">Pets</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop button */}
        <button className="hidden md:block px-5 py-3 rounded-full border font-bold">
          Donate now
        </button>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 text-lg"
          >
            <a href="#who-we-are">Who we are</a>
            <a href="#help">Help</a>
            <a href="#pets">Pets</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <button className="mt-4 px-5 py-3 rounded-full border font-bold">
              Donate now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
