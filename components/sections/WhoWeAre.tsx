"use client";

import Image from "next/image";
import { FadeUp } from "../animations/FadeUp";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-[97%] mx-auto grid md:grid-cols-2 gap-10 md:gap-20 text-4xl md:text-7xl">
        <div className="flex flex-col">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] tracking-tight mb-16">
              Who we are?
            </h2>
          </FadeUp>
          <div className="relative bg-[#F1D3ED] rounded-[60px] overflow-hidden flex-grow min-h-[500px]">
            <div className="relative w-full h-full">
              <Image
                src="/img/who-we-are.png"
                alt="Girl with dog"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute top-14 right-3 md:right-30 z-20">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative bg-white px-6 py-3 rounded-[30px] shadow-sm flex items-center justify-center"
              >
                <span className="text-[#1F1F1F] font-bold text-2xl tracking-tighter">
                  I ❤️ U
                </span>
                <div className="absolute -bottom-2 right-23 w-4 h-4 bg-white rounded-full shadow-sm" />
                <div className="absolute -bottom-6 right-26 w-2.5 h-2.5 bg-white rounded-full shadow-sm" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-4">
          <div className="space-y-8 text-[#4A4A4A] text-[20px] leading-[1.6] mb-16 max-w-[90%]">
            <p>
              At our shelter, we provide temporary shelter, treatment, and most
              importantly, boundless love and attention for each animal couple
              that comes to us.
            </p>
            <p>
              We work not only to provide physical comfort, but also to
              socialize, train, and find new loving families.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <StatCard value="1250" label="Pets adopted" />
            <StatCard value="+350" label="Active volunteers" />
            <StatCard value="20k" label="Donations raised" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#F8F9FB] rounded-[35px] px-9 md:px-12 py-10 flex justify-between items-center group hover:bg-[#F1F3F5] transition-all cursor-default">
      <span className="text-4xl md:text-6xl text-[#1F1F1F] tracking-tighter">
        {value}
      </span>
      <span className="text-xl text-[#1F1F1F] font-medium opacity-70">
        {label}
      </span>
    </div>
  );
}
