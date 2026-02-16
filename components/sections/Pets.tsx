"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "../animations/FadeUp";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Pets() {
  return (
    <section className="bg-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-[97%] bg-[#F8F9FB] rounded-[60px] p-10 md:p-16 relative">
        <div className="flex items-center justify-between mb-12">
          <FadeUp>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1F1F1F]">
              Adopt a pet
            </h2>
          </FadeUp>
          <button className="px-7 py-3 rounded-full border border-[#6f6f6f76] text-[17px] font-medium text-[#1F1F1F] hover:bg-white transition shadow-sm cursor-pointer">
            All pets
          </button>
        </div>

        {/* Сетка карточек */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-15 md:gap-8 md:gap-12 relative"
        >
          {/* CARD 1 */}
          <motion.div variants={item} className="relative">
            <PetCard image="/img/cat-adopt1.jpg" name="Kitty" gender="girl" />
            <div className="absolute -bottom-14 left-45 flex flex-col items-center">
              <ArrowUpLeft className="text-[#265f53] w-12 h-12 mb-1" />
              <span className="font-handwriting text-lg text-[#265f53] font-bold">
                Kitty, girl
              </span>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div variants={item} className="relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
              <span className="font-handwriting text-lg text-[#265f53] font-bold">
                Rocky, boy
              </span>
              <ArrowDownRight className="text-[#265f53] w-10 h-10 mt-1" />
            </div>
            <PetCard image="/img/dog-adopt.jpg" name="Rocky" gender="boy" />
          </motion.div>

          {/* CARD 3 */}
          <motion.div variants={item} className="relative">
            <PetCard image="/img/cat-adopt2.png" name="Felix" gender="boy" />
            <div className="absolute -bottom-14 right-4 flex flex-col items-center">
              <ArrowUpRight className="text-[#265f53] w-12 h-12 mb-1" />
              <span className="font-handwriting text-lg text-[#265f53] font-bold">
                Felix, boy
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PetCard({
  image,
  name,
}: {
  image: string;
  name: string;
  gender: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-[40px] shadow-sm relative overflow-hidden h-[380px] md:h-[450px] w-full rounded-[40px] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="absolute top-5 right-5 w-15 h-15 bg-[#242424] backdrop-blur-md hover:bg-[#242424]/40 rounded-full flex items-center justify-center cursor-pointer z-20 transition-colors">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <button className="bg-[#dff5b2] hover:bg-[#d4e885] transition-all transform hover:scale-105 w-[85%] py-4 rounded-[30px] font-bold text-[#1F1F1F] text-lg shadow-lg cursor-pointer">
          Adopt
        </button>
      </div>
    </motion.div>
  );
}

// Компоненты стрелочек (SVG)
const ArrowUpLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 40C30 35 20 20 15 10M15 10L10 18M15 10L23 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDownRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10C20 15 30 30 35 40M35 40L40 32M35 40L27 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 40C20 35 30 20 35 10M35 10L40 18M35 10L27 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
