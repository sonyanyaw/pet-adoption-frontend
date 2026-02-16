"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export default function Help() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[97%] mx-auto">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl font-bold text-center text-[#1F1F1F] mb-16">
            How can I help?
          </h2>
        </FadeUp>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-8"
        >
          <motion.div variants={item} className="flex flex-col">
            <div className="relative overflow-hidden rounded-[40px] bg-[#F7F7F7] aspect-[16/9] mb-8">
              <svg
                className="absolute top-3 left-3 w-[180px] h-[180px] pointer-events-none z-10"
                viewBox="0 0 100 100"
                overflow="visible"
              >
                <defs>
                  <path id="curveTopLeft" d="M 0,60 Q 35,35 60,0" fill="none" />
                </defs>

                <path
                  d="M -7,65 Q 35,35 65,-7"
                  stroke="#79D7BE"
                  strokeWidth="25"
                  fill="none"
                  strokeLinecap="round"
                />

                <text
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="0.5px"
                  dy="5"
                >
                  <textPath
                    xlinkHref="#curveTopLeft"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    🤍 Shelter pets 🤍
                  </textPath>
                </text>
              </svg>

              <div className="relative overflow-hidden rounded-[40px] bg-[#F7F7F7] aspect-[16/9] mb-8">
                <Image
                  src="/img/dog-help.jpg"
                  alt="Happy dog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="px-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#292929] border border-[#6f6f6f76] rounded-full px-8 py-3 text-lg font-medium mb-6 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Donate
              </motion.button>
              <p className="text-gray-500 text-xl leading-relaxed max-w-md">
                Every donation, regardless of the size, helps us to provide
                medical care, warmth and love to make every paw happy.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col">
            <div className="relative overflow-hidden rounded-[40px] bg-[#F7F7F7] aspect-[16/9] mb-8">
              <svg
                className="absolute bottom-2 right-2 w-[180px] h-[180px] pointer-events-none z-10"
                viewBox="0 0 100 100"
                overflow="visible"
              >
                <defs>
                  <path
                    id="curveBottomRight"
                    d="M 100,40 Q 65,65 40,100"
                    fill="none"
                  />
                </defs>

                <path
                  d="M 107,35 Q 65,65 35,107"
                  stroke="#79D7BE"
                  strokeWidth="25"
                  fill="none"
                  strokeLinecap="round"
                />

                <text
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="0.5px"
                  dy="5"
                >
                  <textPath
                    xlinkHref="#curveBottomRight"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    🤍 Shelter pets 🤍
                  </textPath>
                </text>
              </svg>

              <div className="relative overflow-hidden rounded-[40px] bg-[#F7F7F7] aspect-[16/9] mb-8">
                <Image
                  src="/img/cat-help.jpg"
                  alt="Relaxed cat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="px-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#292929] border border-[#6f6f6f76] rounded-full px-8 py-3 text-lg font-medium mb-6 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Volunteer
              </motion.button>
              <p className="text-gray-500 text-xl leading-relaxed max-w-md">
                Whether you have a few hours to spare or can commit to a more
                extended period, your assistance is invaluable.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
