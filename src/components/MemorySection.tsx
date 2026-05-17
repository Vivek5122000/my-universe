"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MemorySection() {

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const memories = [
    {
      image: "/lakshmi-pg3.1.png",
      title: " Never Stops Giving",
      short: "Read the story ✨",
      story:
        "Even through silence, exhaustion, responsibilities and pain, she always continued choosing kindness. She carried strength so softly that the world often mistook it for calmness.",
    },
    {
      image: "/lakshmi-pg3.2.png",
      title: "Dreams Bigger Than Sleep",
      short: "Read the story ✨",
      story:
        "While balancing long corporate hours, she still continued preparing tirelessly for civil services — carrying her father’s dream every single day.",
    },
    {
      image: "/lakshmi-pg3.3.png",
      title: "Softness In A Loud World",
      short: "Read the story ✨",
      story:
        "Some people become harsh after pain. She became softer, kinder, and even more beautiful in the way she treated others.",
    },
    {
  image: "/lakshmi-pg3.4.png",
  title: "Grace In Silence",
  short: "Read the story ✨",
  story:
    "She never needed loudness to leave an impact. Her calmness itself carried warmth, depth and elegance.",
},
{
  image: "/lakshmi-pg3.5.png",
  title: "The World She Carries",
  short: "Read the story ✨",
  story:
    "Behind every smile existed responsibilities, dreams, memories and strength that very few people truly understood.",
},
{
  image: "/lakshmi-pg3.6.png",
  title: "A Soul Full Of Light",
  short: "Read the story ✨",
  story:
    "Even after difficult moments, she still chose compassion, softness and beauty in the way she lived life.",
},
  ];

  return (
    <section
      id="memories"
      className="relative min-h-[115vh] overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(221,208,255,0.45),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,220,230,0.45),transparent_30%),linear-gradient(to_bottom,#eef4ff,#fdf7fb,#fff5ef)] px-8 py-16 lg:px-20"
    >
    {/* Ambient Background Glows */}
<div className="absolute left-[-120px] top-[20%] h-[320px] w-[600px] rounded-full bg-pink-200/25 blur-3xl" />

<div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[600px] rounded-full bg-violet-200/20 blur-3xl" />

<div className="absolute top-[55%] left-[40%] h-[240px] w-[240px] rounded-full bg-orange-100/20 blur-3xl" />

      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[600px] rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[600px] rounded-full bg-violet-200/30 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 -mt-6">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-5 inline-flex rounded-full border border-pink-200/60 bg-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c08fa5] backdrop-blur-xl"
        >
          ✦ MEMORIES
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="ml-10 font-[family-name:var(--font-heading)] text-[56px] font-light leading-[0.92] tracking-[-2px] text-[#463949]"
        >
          She Who <br />Defines Perfection
        </motion.h2>

        {/* Memory Cards */}
        <div className="mt-10 grid grid-cols-3 gap-x-12 gap-y-10 justify-items-center">

          {memories.map((memory, index) => (

            <motion.div
              key={index}
              layout
              transition={{ duration: 0.5 }}
              className={`w-[320px] min-h-[360px] overflow-hidden rounded-[28px] border border-white/60 shadow-[0_20px_60px_rgba(255,255,255,0.65)] ${
  activeCard === index
    ? "fixed left-1/2 top-1/2 z-[60] w-[720px] -translate-x-1/2 -translate-y-1/2 bg-white/92 backdrop-blur-0"
    : "relative bg-white/30 backdrop-blur-2xl"
}`}
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={memory.image}
                  alt="Memory"
                  className="h-[400px] w-full object-cover object-[center_25%] transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-4 pb-4 pt-3">

                <h3 className="line-clamp-1 text-[18px] leading-6 text-[#55485d]">
                  {memory.title}
                </h3>

                <button
                  onClick={() =>
                    setActiveCard(activeCard === index ? null : index)
                  }
                  className="mt-2 rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-4 py-[7px] text-[11px] text-[#5d4f63] shadow-[0_10px_25px_rgba(255,192,203,0.25)] transition hover:scale-105"
                >
                  {activeCard === index
                    ? "Minimize Story ✨"
                    : memory.short}
                </button>

                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >

                      <p className="mt-6 text-[17px] leading-9 text-[#6f6276]">
                        {memory.story}
                      </p>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Background Overlay when expanded */}
      {activeCard !== null && (
  <div
    className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[0.1px]"
    onClick={() => setActiveCard(null)}
  />
)}

    </section>
  );
}