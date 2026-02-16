"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "../animations/FadeUp";

const faqs = [
  {
    q: "What is the adoption process like?",
    a: "We accept credit cards, PayPal, and Apple Pay.",
  },
  {
    q: "What veterinary care do the animals receive before adoption?",
    a: "Standard shipping typically takes 5-7 business days, while expedited shipping options are available for faster delivery.",
  },
  {
    q: "Do you offer any support or resources for new pet owners?",
    a: "You can return items within 30 days of purchase.",
  },
  {
    q: "Are there specific requirements for potential adopters?",
    a: "Use the tracking link sent to your email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 max-w-[97%] mx-auto px-6 min-h-screen text-[#1d1d1d]">
      <FadeUp>
        <h2 className="text-6xl font-bold mb-12">FAQ</h2>
      </FadeUp>
      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              layout
              className="bg-[#f8f8f8] min-h-30 mb-3 rounded-[25] overflow-hidden border border-white/5 font-display"
            >
              <button
                className="w-full min-h-30 text-left px-8 py-6 flex justify-between items-center transition-colors hover:bg-white/[0.02] cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="text-3xl font-medium">{faq.q}</span>

                <motion.span
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  className="text-5xl"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        },
                        opacity: { duration: 0.25, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                  >
                    <div className="px-8 pb-6 text-gray-400 text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
