"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Dreamy Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-white/5" />
      {/* FLOATING SPARKLES */}
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
      {/* MAIN PAGE */}
      <section className="relative z-20 flex h-screen items-center justify-center overflow-hidden">
      <div className="relative h-[900px] w-[1600px] scale-[0.92] origin-center">
        {/* TOP NAVIGATION */}
        <header className="flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-heading)] text-3xl font-medium tracking-wide text-[#5e4d64]"
          >
            VJ Universe ✦
          </motion.div>
          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 text-[13px] tracking-[0.18em] text-[#7f6f85] lg:flex">
            
          </nav>
          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-4">
            <button className="rounded-full border border-white/70 bg-white/30 px-5 py-2 text-sm text-[#6f6074] shadow-lg backdrop-blur-xl transition hover:bg-white/50">
              Login
            </button>
            <button className="rounded-full bg-gradient-to-r from-pink-200 via-violet-200 to-sky-200 px-6 py-2 text-sm text-[#5d4f63] shadow-[0_12px_35px_rgba(255,192,203,0.45)] transition hover:scale-105">
              Enter ♡
            </button>
          </div>
        </header>
        {/* HERO SECTION */}
        <section className="relative flex flex-1 items-center z-20">
          {/* LEFT SIDE */}
          <div className="w-[1000px] pl-4">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c18ea5] backdrop-blur-xl"
            >
              ✦ A Quiet Universe Of Kindness
            </motion.div>
           {/* MAIN TITLE */}
<motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="font-[family-name:var(--font-heading)] font-light tracking-[-2px]"
>

  {/* First Line */}
  <div className="flex items-end gap-4 whitespace leading-none">

    <span className="mb-3 text-[40px] text-[#2f2733]">
      For
    </span>

    <span className="bg-gradient-to-r from-[#a56be7] via-[#d97bb8] to-[#e6a46f] bg-clip-text text-[75px] italic leading-[0.9] text-transparent">
Vijay Lakshmi
</span>

  </div>

  {/* Second Line */}
  <div className="mt-4 text-[40px] font-medium leading-none text-[#3c3240]">
    The Kindest Soul
  </div>

  {/* Third Line */}
  <div className="mt-5 bg-gradient-to-r from-[#a56be7] via-[#d97bb8] to-[#e6a46f] bg-clip-text text-[70px] italic leading-[0.95] text-transparent">
  Beauty with Brain
</div>

</motion.h1>
            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="mt-8 max-w-[470px] text-[18px] leading-9 text-[#796b7e]"
            >
              Some souls carry storms quietly,
              yet somehow still become shelter
              for everyone else.
            </motion.p>
            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mt-10 flex gap-5"
            >
              <a href="#story">
  <button className="rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-8 py-4 text-[15px] text-[#5d4f63] shadow-[0_15px_45px_rgba(255,192,203,0.45)] transition duration-300 hover:scale-105">
    Enter The Story ✨
  </button>
</a>
              
            <a
  href="#memories"
  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#6f6174] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
>
  Memories ☾
</a>

<a
  href="#letters"
  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#6f6174] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
>
  Letters 💌
</a>

<a
  href="#family-video"
  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#6f6174] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
>
  Gallery ✨
</a>
<a
  href="#about"
  className="rounded-full border border-white/70 bg-white/35 px-8 py-4 text-[15px] text-[#6f6174] shadow-lg backdrop-blur-xl transition hover:bg-white/50"
>
  About ✨
</a>


            </motion.div>
            {/* FEATURE CARDS */}
            <div className="mt-12 flex gap-4">
              {[
                {
                  title: "Pure Soul",
                  icon: "♡",
                  gradient: "from-[#e1cbff] to-[#f4d2e7]",
                },
                {
                  title: "Silent Strength",
                  icon: "✦",
                  gradient: "from-[#ffd8de] to-[#ffe7c8]",
                },
                {
                  title: "Beautiful Dreams",
                  icon: "☁",
                  gradient: "from-[#cfe7ff] to-[#d8d0ff]",
                },
                {
                  title: "Endless Kindness",
                  icon: "❀",
                  gradient: "from-[#ffe7cb] to-[#ffd1df]",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="w-[165px] rounded-[30px] border border-white/70 bg-white/30 p-5 shadow-[0_15px_50px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-lg text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-medium text-[#5d4f63]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-6 text-[#897b8d]">
                    Quiet beauty in every detail.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      </section>

    </>
  );
}