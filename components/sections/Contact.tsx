"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white px-4 pb-7">
      <div className="max-w-[97%] mx-auto">
        {/* MAIN CONTACT BLOCK */}
        <div className="relative bg-[#f3d1ed] rounded-[40px] md:rounded-[60px] px-6 md:px-25 pt-12 md:pt-20 pb-40 md:pb-50 overflow-hidden">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute right-20 top-10 w-[300px] h-[220px] bg-[#DFAFD2] rounded-[50%] opacity-40" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -right-25 -bottom-110 w-[260px] h-[200px] bg-[#DFAFD2] rounded-[50%] opacity-40" />
          </motion.div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-7xl font-bold text-black mb-8 leading-tight">
                Find your new <br /> furry friend!
              </h2>

              <p className="text-2xl text-[#4B4B4B] leading-relaxed max-w-xl">
                Are you ready to welcome a bundle of joy into your life? Our
                shelter is home to a variety of lovable companions eagerly
                waiting for their forever homes.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center md:justify-end">
              <motion.div
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-[#F2F2F2] w-[260px] h-[220px] rounded-[40px] flex items-center justify-center shadow-sm"
              >
                <span className="text-2xl font-medium text-gray-700">
                  Contact us
                </span>
              </motion.div>
            </div>
          </div>

          {/* FOOTER BAR */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-[#1E1E1E] rounded-[25px] md:rounded-[40px] px-6 md:px-10 py-4 md:py-6 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between">
              <div className="flex items-center gap-3 text-white font-semibold text-xl">
                <a href="#hero">Fluffy</a>
              </div>

              <div className="hidden md:flex gap-10 text-gray-300 text-sm">
                <a href="#who-we-are">Who we are</a>
                <a href="#help">Help</a>
                <a href="#pets">Pets</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact us</a>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={25} />, href: "#" },
                  { icon: <Facebook size={25} />, href: "#" },
                  { icon: <Twitter size={25} />, href: "#" },
                  { icon: <Linkedin size={25} />, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 flex items-center justify-center rounded-full border text-white border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
