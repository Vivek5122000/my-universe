"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="relative h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,214,230,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(221,208,255,0.85),transparent_7%),linear-gradient(to_bottom,#fdf7fb,#f7f1ff,#eef4ff)] px-8 py-16 lg:px-20">
        {/* Ambient Background Glows */}
<div className="absolute left-[-120px] top-[10%] h-[340px] w-[340px] rounded-full bg-pink-200/25 blur-3xl" />

<div className="absolute right-[-100px] top-[40%] h-[300px] w-[300px] rounded-full bg-violet-200/20 blur-3xl" />

<div className="absolute bottom-[-120px] left-[35%] h-[280px] w-[280px] rounded-full bg-orange-100/25 blur-3xl" />
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-violet-200/30 blur-3xl" />

      {/* Floating sparkles */}
      {new Array(12).fill(null).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
          }}
          className="absolute h-[4px] w-[4px] rounded-full bg-white shadow-[0_0_12px_white]"
          style={{
            left: `${8 + i * 7}%`,
            top: `${10 + (i % 5) * 18}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 mx-auto -mt-12 max-w-7xl">

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c08fa5] backdrop-blur-xl"
        >
          ✦ HER STORY
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-[family-name:var(--font-heading)] text-[64px] font-light leading-[0.88] tracking-[-3px] text-[#463949]"
        >
          The Girl
          <br />
          Who Never
          <span className="italic text-[#8d76df]">
            {" "}Stopped
          </span>
        </motion.h2>

        {/* Content Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Left Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="rounded-[40px] border border-white/60 bg-white/30 p-10 shadow-[0_20px_60px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
          >

            <div className="mb-6 text-4xl text-pink-300">
              ❀
            </div>

            <p className="text-[17px] leading-8 text-[#6f6276]">
              Some people speak loudly to prove their strength.
              But she carried hers quietly.
              <br /><br />
              Through grief,
              responsibility,
              exhaustion,
              and silence —
              she still chose kindness.
              <br /><br />
              Even after losing the person she loved most,
              she continued walking toward his dream,
              carrying both pain and purpose together.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">

  <div className="overflow-hidden rounded-[24px] shadow-[0_15px_35px_rgba(255,255,255,0.45)]">
    <img
      src="/lakshmi-pg2.1.png"
      alt="Memory"
      className="h-[265px] w-full object-cover object-[center_5%] transition duration-700 hover:scale-105"
    />
  </div>

  <div className="overflow-hidden rounded-[24px] shadow-[0_15px_35px_rgba(255,255,255,0.45)]">
    <img
      src="/lakshmi-pg2.2.png"
      alt="Memory"
      className="h-[265px] w-full object-cover object-[center_12%] transition duration-700 hover:scale-105"
    />
  </div>

</div>

          </motion.div>

          {/* Right Timeline Cards */}
          <div className="space-y-6">

            {[
              {
                title: "Silent Strength",
                text: "She kept going even when life became unbearably heavy.",
                icon: "☾",
              },
              {
                title: "Discipline & Grace",
                text: "Balancing a demanding corporate life while preparing for civil services.",
                icon: "✦",
              },
              {
                title: "A Beautiful Heart",
                text: "Even through sorrow, she remained soft, fair, and endlessly kind.",
                icon: "♡",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ y: -6 }}
                className="rounded-[34px] border border-white/60 bg-white/30 p-8 shadow-[0_18px_50px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
              >

                <div className="mb-4 text-3xl text-violet-300">
                  {item.icon}
                </div>

                <h3 className="text-[28px] font-medium text-[#55485d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[16px] leading-8 text-[#7c6d80]">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}