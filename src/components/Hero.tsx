"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative z-20 flex min-h-screen overflow-hidden py-10 sm:items-center sm:py-16">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div
  className="
    absolute inset-0
    bg-repeat-y
    bg-cover
    bg-top
    sm:bg-cover
    sm:bg-center
  "
  style={{
    backgroundImage: "url('/hero-bg.png')",
    backgroundSize: "100% auto",
  }}
/>

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* PINK GLOW */}
          <div className="absolute left-[-10%] top-[10%] h-[220px] w-[220px] rounded-full bg-pink-300/20 blur-3xl sm:h-[280px] sm:w-[280px]" />

          {/* PURPLE GLOW */}
          <div className="absolute bottom-[5%] right-[-8%] h-[200px] w-[200px] rounded-full bg-violet-300/20 blur-3xl sm:h-[240px] sm:w-[240px]" />

        </div>

        {/* FLOATING PARTICLES */}
        {new Array(16).fill(null).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
            }}
            className="absolute h-[4px] w-[4px] rounded-full bg-white shadow-[0_0_12px_white]"
            style={{
              left: `${6 + i * 5.5}%`,
              top: `${10 + (i % 5) * 14}%`,
            }}
          />
        ))}

        <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-14 2xl:px-24">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center font-[family-name:var(--font-heading)] text-[24px] font-medium tracking-wide text-[#1b141f] sm:mb-10 md:text-left md:text-[30px]"
          >
            VJ Universe ✦
          </motion.div>

          {/* HERO CONTENT */}
          <div className="flex flex-col items-start justify-center">

            {/* LEFT CONTENT */}
            <div className="w-full max-w-[1100px]">

              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-[#c18ea5] backdrop-blur-xl sm:mb-8 sm:px-5 sm:text-[10px] sm:tracking-[0.3em]"
              >
                ✦ A Quiet Universe Of Kindness
              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="font-[family-name:var(--font-heading)] font-light"
              >

                {/* FOR + NAME */}
                <div className="flex flex-col gap-2 leading-none sm:flex-row sm:items-end">

                  <span className="text-[22px] text-[#0f0b12] sm:text-[34px] lg:text-[42px]">
                    For
                  </span>

                  <span className="bg-gradient-to-r from-[#a56be7] via-[#d97bb8] to-[#e6a46f] bg-clip-text text-[42px] italic leading-[0.95] text-transparent sm:text-[72px] lg:text-[92px] 2xl:text-[110px]">
                    Vijay Lakshmi
                  </span>

                </div>

                {/* SECOND LINE */}
                <div className="mt-4 text-[28px] font-medium leading-none text-[#0f0b12] sm:mt-5 sm:text-[46px] lg:text-[56px] 2xl:text-[68px]">
                  The Kindest Soul
                </div>

                {/* THIRD LINE */}
                <div className="mt-4 bg-gradient-to-r from-[#a56be7] via-[#d97bb8] to-[#e6a46f] bg-clip-text text-[32px] italic leading-[1.1] text-transparent sm:mt-5 sm:text-[58px] lg:text-[82px] 2xl:text-[96px]">
                  Beauty with Brain
                </div>

              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3 }}
                className="mt-6 max-w-[760px] text-[15px] leading-[1.9] text-[#1d1721] sm:mt-8 sm:text-[20px] sm:leading-[2] 2xl:text-[24px]"
              >
                ✨ Some souls carry storms quietly,
                yet somehow still become shelter
                for everyone else.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="mt-10 grid w-full grid-cols-2 gap-4 sm:mt-12 sm:flex sm:flex-wrap"
              >

                <a href="#story" className="col-span-2 sm:col-span-1">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-6 py-4 text-[14px] text-[#5d4f63] shadow-[0_15px_45px_rgba(255,192,203,0.45)] transition duration-300 hover:scale-105 sm:px-8 sm:text-[15px]">
                    Enter The Story ✨
                  </button>
                </a>

                <a
                  href="#memories"
                  className="rounded-full border border-white/70 bg-white/35 px-5 py-4 text-center text-[14px] text-[#1b141f] shadow-lg backdrop-blur-xl transition hover:bg-white/50 sm:px-8 sm:text-[15px]"
                >
                  Memories ☾
                </a>

                <a
                  href="#letters"
                  className="rounded-full border border-white/70 bg-white/35 px-5 py-4 text-center text-[14px] text-[#1b141f] shadow-lg backdrop-blur-xl transition hover:bg-white/50 sm:px-8 sm:text-[15px]"
                >
                  Letters 💌
                </a>

                <a
                  href="#family-video"
                  className="rounded-full border border-white/70 bg-white/35 px-5 py-4 text-center text-[14px] text-[#1b141f] shadow-lg backdrop-blur-xl transition hover:bg-white/50 sm:px-8 sm:text-[15px]"
                >
                  Gallery ✨
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-white/70 bg-white/35 px-5 py-4 text-center text-[14px] text-[#1b141f] shadow-lg backdrop-blur-xl transition hover:bg-white/50 sm:px-8 sm:text-[15px]"
                >
                  About ✨
                </a>

              </motion.div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}