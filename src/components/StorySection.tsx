"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StorySection() {

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  /* =========================
     AUDIO LOGIC
  ========================= */

  useEffect(() => {

    const audio =
      new Audio("/DooronDooron.mp3");

    audio.loop = true;
    audio.volume = 0.35;

    audioRef.current = audio;

    let isInsideSection = false;

    const handleScroll = async () => {

      if (!sectionRef.current || !audioRef.current)
        return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const windowHeight =
        window.innerHeight;

      const visible =
        rect.top < windowHeight * 0.6 &&
        rect.bottom > windowHeight * 0.4;

      // ENTERED SECTION
      if (visible && !isInsideSection) {

        isInsideSection = true;

        audioRef.current.currentTime = 0;

        try {

          await audioRef.current.play();

        } catch (err) {

          console.log("Playback blocked");

        }

      }

      // LEFT SECTION
      if (!visible && isInsideSection) {

        isInsideSection = false;

        audioRef.current.pause();

        audioRef.current.currentTime = 0;

      }

    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      audio.pause();

      audio.currentTime = 0;

    };

  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,214,230,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(221,208,255,0.85),transparent_7%),linear-gradient(to_bottom,#fdf7fb,#f7f1ff,#eef4ff)] px-4 py-16 sm:px-6 lg:px-20 lg:py-24"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-120px] top-[10%] h-[340px] w-[340px] rounded-full bg-pink-200/25 blur-3xl" />

      <div className="absolute right-[-100px] top-[40%] h-[300px] w-[300px] rounded-full bg-violet-200/20 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[35%] h-[280px] w-[280px] rounded-full bg-orange-100/25 blur-3xl" />

      {/* FLOATING SPARKLES */}
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

      {/* FLOATING EMOJIS */}
      <div className="absolute left-[8%] top-[16%] text-[26px] opacity-60">
        🌸
      </div>

      <div className="absolute right-[10%] top-[18%] text-[22px] opacity-60">
        ✨
      </div>

      <div className="absolute bottom-[12%] left-[12%] text-[28px] opacity-50">
        ☁️
      </div>

      <div className="absolute bottom-[18%] right-[15%] text-[24px] opacity-50">
        🌙
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-white/40 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c08fa5] backdrop-blur-xl"
        >
          ✦ HER STORY
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-[family-name:var(--font-heading)] text-[42px] sm:text-[54px] lg:text-[68px] font-light leading-[0.95] tracking-[-2px] text-[#463949]"
        >
          The Girl
          <br />
          Who Never
          <span className="italic text-[#8d76df]">
            {" "}Stopped ✨
          </span>
        </motion.h2>

        {/* CONTENT GRID */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* LEFT STORY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="rounded-[36px] border border-white/60 bg-white/35 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
          >

            <div className="mb-5 text-4xl text-pink-300">
              ❀
            </div>

            <p className="text-[16px] sm:text-[17px] leading-[2] text-[#4f4653]">

              Some people try to become extraordinary by being loud.
              But you always became unforgettable through your gentleness. 🌸✨

              <br /><br />

              You carried responsibilities quietly, handled difficult moments with grace,
              and still somehow kept your heart soft for everyone around you.
              That balance between strength and kindness is something incredibly rare. 🤍

              <br /><br />

              There is something deeply inspiring about the way you continue moving forward —
              with discipline, dignity, patience, and silent courage.
              Even during emotionally exhausting phases of life,
              you never stopped caring for people,
              never stopped showing warmth,
              and never stopped trying your best. ☁️🌙

              <br /><br />

              And maybe that is what makes you different.

              <br /><br />

              Not just your intelligence.
              Not just your achievements.
              But the way your presence makes people feel calmer,
              safer,
              understood,
              and emotionally lighter. ✨

              <br /><br />

              You are the kind of person people remember for years —
              not because you demanded attention,
              but because your kindness quietly stayed in their hearts forever. 🤍

            </p>

            {/* IMAGE GRID */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              {/* IMAGE 1 */}
              <div className="h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden rounded-[24px] border border-white/50 bg-white/20 shadow-[0_12px_30px_rgba(255,255,255,0.4)] backdrop-blur-xl">
                <img
                  src="/lakshmi-pg2.1.png"
                  alt="Memory"
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>

              {/* IMAGE 2 */}
              <div className="h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden rounded-[24px] border border-white/50 bg-white/20 shadow-[0_12px_30px_rgba(255,255,255,0.4)] backdrop-blur-xl">
                <img
                  src="/lakshmi-pg2.2.png"
                  alt="Memory"
                  className="h-full w-full -translate-y-3 object-cover transition duration-700 hover:scale-105"
                />
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {[
              {
                title: "Silent Strength 🌙",
                text:
                  "You have this rare ability to survive difficult phases of life quietly, without losing your softness. Even when emotionally tired, mentally exhausted, or carrying responsibilities no one else could fully see, you still chose patience, grace, and kindness. That kind of strength is not loud — but it is the strongest kind that exists.",
                icon: "☾",
              },
              {
                title: "Discipline & Grace ✨",
                text:
                  "Balancing professional responsibilities while preparing for something as demanding as civil services already says so much about your dedication. But what makes it even more admirable is the calmness with which you do everything — never seeking praise, never trying to prove yourself loudly, just quietly working harder every single day with sincerity and dignity.",
                icon: "✦",
              },
              {
                title: "A Beautiful Heart 🤍",
                text:
                  "What truly makes you special is the emotional beauty you carry within yourself. The way you care for people, notice tiny details, support others without expecting anything back, and make people feel included and valued — these things cannot be taught. They come from a genuinely pure heart. And honestly, this world feels softer because souls like yours exist in it.",
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
                className="rounded-[32px] border border-white/60 bg-white/35 p-6 sm:p-8 shadow-[0_18px_50px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
              >

                <div className="mb-4 text-3xl text-violet-300">
                  {item.icon}
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-[28px] sm:text-[34px] leading-tight text-[#433847]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] sm:text-[17px] leading-[2] text-[#544a57]">
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