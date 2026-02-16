"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center p-4 pt-[6%] font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[97%] h-auto md:h-[620px] min-h-[600px] md:min-h-0 bg-[#F4F4F4] rounded-[40px] md:rounded-[70px] overflow-hidden"
      >
        {/* ================= CAT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-[5%] md:left-[8%] top-[180px] md:top-[130px] w-[250px] md:w-[470px] h-[220px] md:h-[380px] z-10"
        >
          <div className="absolute inset-0 bg-[#56C3A6] rounded-[60%_40%_55%_45%/60%_50%_50%_40%] z-0" />

          {/* Контейнер для обрезки нижней части кота */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ borderRadius: "60% 40% 55% 45% / 60% 50% 50% 40%" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-[45%] w-[110%] h-[120%]">
              <Image
                src="/img/cat.png"
                fill
                alt="Cat"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Копия верхней части кота, которая выходит за границы блоба */}
          <div className="absolute -top-[45px] md:-top-[75px] left-1/2 -translate-x-[45%] w-[110%] h-[120%] z-20 pointer-events-none">
            <Image
              src="/img/cat.png"
              fill
              alt="Cat"
              className="object-contain object-bottom"
              style={{
                clipPath: "inset(0 0 45% 0)",
              }}
            />
          </div>
        </motion.div>

        {/* ================= DOG SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-[5%] md:right-[3%] top-[320px] md:top-[210px] w-[230px] md:w-[420px] h-[230px] md:h-[420px] z-30"
        >
          <div className="absolute inset-0 bg-[#1E6A5F] rounded-[55%_45%_50%_50%/50%_60%_40%_50%] z-0" />

          {/* Контейнер для обрезки нижней части собаки */}
          <div
            className="absolute inset-0 z-30 overflow-hidden"
            style={{ borderRadius: "55% 45% 50% 50% / 50% 60% 40% 50%" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] h-[150%]">
              <Image
                src="/img/dog.png"
                fill
                alt="Dog"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Копия головы собаки, которая выходит за границы блоба */}
          <div className="absolute -top-[115px] md:-top-[210px] left-1/2 -translate-x-1/2 w-[130%] h-[150%] z-30 pointer-events-none">
            <Image
              src="/img/dog.png"
              fill
              alt="Dog"
              className="object-contain object-bottom"
              style={{
                clipPath: "inset(0 0 40% 0)",
              }}
            />
          </div>
        </motion.div>

        {/* ================= RIBBON ================= */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg
            viewBox="0 0 1400 620"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="curve"
                d="M -200 550 
                   C 200 520, 400 500, 650 420 
                   S 1100 250, 1600 -100"
              />
            </defs>

            <use
              href="#curve"
              stroke="white"
              strokeWidth="65"
              strokeLinecap="round"
              fill="none"
            />

            <text className="text-[28px] md:text-[18px] font-semibold tracking-[0.35em] md:tracking-[0.25em] fill-black">
              <textPath href="#curve" startOffset="5%">
                Shelter pets ♥ Shelter pets ♥ Shelter pets ♥ Shelter pets ♥
                Shelter pets ♥ Shelter pets ♥ Shelter pets ♥ Shelter pets ♥
                Shelter pets ♥
              </textPath>
            </text>
          </svg>
        </div>

        {/* ================= FLOATING TAGS ================= */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-[40%] top-[110px] z-30 rotate-[-10deg]">
            <div className="bg-white text-[#1E6A5F] px-6 md:px-15 py-2 md:py-5 rounded-full font-bold text-lg md:text-3xl">
              CAT
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-[48%] top-[220px] z-30 rotate-[6deg]">
            <div className="bg-white text-[#1E6A5F] px-6 md:px-15 py-2 md:py-5 rounded-full font-bold text-lg md:text-3xl">
              DOG
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 z-40 flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#CDEB8F] text-[#1A453B] text-lg md:text-2xl px-10 md:px-20 py-4 md:py-6 rounded-[35px] md:rounded-[45px] shadow-xl rotate-[-10deg] cursor-pointer"
          >
            ADOPT
          </motion.button>

          <div className="relative mt-12 -ml-6">
            <div className="bg-black text-white px-6 py-2 rounded-3xl text-base shadow-lg cursor-pointer">
              Let’s start
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
