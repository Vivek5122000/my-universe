"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="absolute inset-0 min-h-full overflow-hidden">

        <img
          src="/hero-bg.png"
          alt="Dreamy Background"
          className="absolute inset-0 min-h-full w-full object-cover object-center"
        />

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* PINK GLOW */}
        <div className="absolute left-[-20%] top-[10%] h-[300px] w-[300px] rounded-full bg-pink-300/20 blur-3xl" />

        {/* PURPLE GLOW */}
        <div className="absolute bottom-[5%] right-[-10%] h-[260px] w-[260px] rounded-full bg-violet-300/20 blur-3xl" />

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

      {/* HERO SECTION */}
      <section className="relative z-20 flex min-h-[100svh] items-center justify-start overflow-hidden py-16 lg:py-0">

        <div className="relative w-full max-w-[1600px] px-5 sm:px-8 lg:px-16 xl:px-24">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center font-[family-name:var(--font-heading)] text-[26px] font-medium tracking-wide text-[#5e4d64] md:text-left md:text-3xl"
          >
            VJ Universe ✦
          </motion.div>

          {/* HERO CONTENT */}
          <section className="relative z-20 flex flex-col items-start justify-center lg:flex-row">

            {/* LEFT CONTENT */}
            <div className="w-full text-left lg:w-[1000px]">

              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/30 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#c18ea5] backdrop-blur-xl"
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

                  <span className="text-[28px] text-[#2f2733] sm:text-[34px] lg:text-[42px]">
                    For
                  </span>

                  <span className="bg-gradient-to-r from-[#a56be7] via-[#d97bb8] to-[#e6a46f] bg-clip-text text-[44px] italic leading-[0.95] text-transparent sm:text-[72px] lg:text-[95px]">
                    Vijay Lakshmi
                  </span>

                </div>

                {/* SECOND LINE */}
                <div className="mt-5 text-[32px] font-medium leading-none text-[#2f2733] sm:text-[46px] lg:text-[56px]">
                  The Kindest Soul
                </div>

                {/* THIRD LINE */}
                <div className="mt-5 bg-gradient-to-r from-[#a56be7] via-[#d97bb8] to-[#e6a46f] bg-clip-text text-[38px] italic leading-[1] text-transparent sm:text-[58px] lg:text-[82px]">
                  Beauty with Brain
                </div>

              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3 }}
                className="mt-8 max-w-[700px] text-[18px] leading-[2] text-[#554a59] sm:text-[20px] lg:max-w-[560px]"
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
                className="mt-12 flex flex-wrap gap-4"
              >

                <a href="#story">
                  <button className="rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-8 py-4 text-[15px] text-[#5d4f63] shadow-[0_15px_45px_rgba(255,192,203,0.45)] transition duration-300 hover:scale-105">
                    Enter The Story ✨
                  </button>
                </a>

                <a
                  href="#memories"
                  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#4f4457] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
                >
                  Memories ☾
                </a>

                <a
                  href="#letters"
                  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#4f4457] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
                >
                  Letters 💌
                </a>

                <a
                  href="#family-video"
                  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#4f4457] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
                >
                  Gallery ✨
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#4f4457] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
                >
                  About ✨
                </a>

              </motion.div>

            </div>

          </section>

        </div>

      </section>
    </>
  );
}