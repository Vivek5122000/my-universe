"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Academic Excellence",
    subtitle:
      "A mind filled with curiosity, discipline, and the quiet confidence to always rise higher.",
    image: "/about-study.jpg",
  },
  {
    title: "Her Friends",
    subtitle:
      "The kind of soul that makes every friendship feel warm, effortless, and unforgettable.",
    image: "/about-friends.jpg",
  },
  {
  title: "My Foodie",
  subtitle:
    "A little happiness in every bite — from cozy café moments to endless cravings, food has always been one of her sweetest love languages.",
  image: "/about-foodie.jpg",
},
  {
    title: "Delhi University",
    subtitle:
      "A chapter of growth, ambition, independence, and discovering her own voice.",
    image: "/about-du.jpg",
  },
  {
    title: "Life at Axtria",
    subtitle:
      "Professional brilliance carried with humility, grace, and compassion.",
    image: "/about-axtria.jpg",
  },
  {
    title: "The Beauty She Brings",
    subtitle:
      "Some people make the world softer, brighter, calmer, and infinitely more beautiful simply by existing.",
    image: "/about-soul.jpg",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#fff9fb,#fff4f7,#fffafc)] px-8 py-24"
    >
      {/* DREAMY GLOWS */}
      <div className="absolute left-[-120px] top-[8%] h-[320px] w-[320px] rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute right-[-100px] bottom-[5%] h-[260px] w-[260px] rounded-full bg-violet-200/30 blur-3xl" />

      {/* MOON */}
      <div className="absolute right-[8%] top-[10%] h-[90px] w-[90px] rounded-full bg-gradient-to-br from-white via-[#fff8dc] to-[#ffe8b0] shadow-[0_0_60px_rgba(255,245,200,0.6)]" />

      {/* SECTION CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1550px]">

        {/* SMALL LABEL */}
        <div className="mb-6 inline-flex w-fit rounded-full border border-pink-200/60 bg-white/50 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c08fa5] backdrop-blur-xl">
          ✦ About Her
        </div>

        {/* TITLE */}
        <h2 className="font-[family-name:var(--font-heading)] text-[64px] font-light leading-[0.92] tracking-[-3px] text-[#4d3f53]">
          The Many Beautiful
          <br />
          Chapters of Her Life
        </h2>

        {/* SUBTEXT */}
        <p className="mt-8 max-w-[760px] text-[20px] leading-[2] text-[#6d5c70]">
          A journey shaped by intelligence, kindness, ambition,
          friendship, family, and the quiet strength that leaves a little
          more beauty everywhere she goes.
        </p>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[38px] border border-white/60 bg-white/45 p-5 shadow-[0_24px_70px_rgba(255,255,255,0.7)] backdrop-blur-xl transition duration-500 hover:-translate-y-2"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/10 via-transparent to-violet-100/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={item.image}
                  alt={item.title}
                   className="h-[550px] w-full object-cover object-[center_20%] transition duration-700 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 px-2 pb-2 pt-6">

                <h3 className="font-[family-name:var(--font-heading)] text-[34px] leading-[1] text-[#4d3f53]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[16px] leading-[1.9] text-[#726377]">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}