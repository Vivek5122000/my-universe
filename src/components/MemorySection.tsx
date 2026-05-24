"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function MemorySection() {

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSectionEnter = async () => {

    const audio = audioRef.current;

    if (!audio) return;

    try {

      audio.volume = 0.35;

      await audio.play();

    } catch (err) {

      console.log("Audio play blocked");

    }

  };

  const handleSectionLeave = () => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

  };

  const memories = [
    {
      image: "/lakshmi-pg3.1.png",
      button: "Her Endless Kindness ✨",
      story:
        "🌸 Even during the days when life quietly became heavier, you still continued becoming a source of comfort for everyone around you. You never allowed your struggles to reduce your kindness. The way you care for people — remembering small details, checking if everyone ate properly, making sure people feel included, comforting others even while carrying your own silent worries — says everything about your heart. 💖\n\n✨ Some people become distant after pain, but you somehow became softer. Your kindness never looked artificial or performative — it always came naturally, quietly and beautifully.\n\n🌙 You carry warmth the way moonlight carries calmness — gently, silently, but enough to change the entire atmosphere around you.",
    },

    {
      image: "/lakshmi-pg3.2.png",
      button: "Dreams Bigger Than Sleep 🌙",
      story:
        "📚 I have always admired how disciplined and focused you are toward your dreams. Balancing long office hours, responsibilities, emotional exhaustion, and still continuing your preparation with consistency is something very few people can truly understand.\n\n✨ Your dream never looked ordinary because you always carried it with sincerity and responsibility.\n\n🌸 I genuinely hope life rewards you for every sleepless night, every sacrifice, every silent effort and every moment where you kept moving despite being tired.",
    },

    {
      image: "/lakshmi-pg3.3.png",
      button: "Softness In A Loud World ☁️",
      story:
        "💫 The world often teaches people to become harder after disappointment, but you somehow protected your softness. That is one of the rarest things about you.\n\n🌷 You never tried to dominate rooms loudly, yet your presence always felt comforting. The way you listen, understand emotions, notice discomfort in people, and quietly try to make others feel safe — these are things many people never learn in life.\n\n✨ I think people remember kindness much longer than perfection, and your softness is exactly that kind of memory.",
    },

    {
      image: "/lakshmi-pg3.4.png",
      button: "Grace In Silence ✨",
      story:
        "🌙 There is something incredibly graceful about the way you carry yourself. You never needed loudness to leave an impact.\n\n💖 Whether it was the way you handled responsibilities, supported others emotionally, stayed patient during chaos, or continued smiling despite stress — everything reflected quiet strength.\n\n✨ Even your silence often feels meaningful because it carries sincerity instead of distance.",
    },

    {
      image: "/lakshmi-pg3.5.png",
      button: "The World You Carry 🌍",
      story:
        "🌸 Behind your smile exists an entire universe of responsibilities, emotions, dreams and silent battles that most people probably never fully notice.\n\n✨ Yet despite carrying so much internally, you still somehow continue becoming support for others.\n\n💫 I hope one day life gives you the same peace, care and emotional safety that you have spent years giving to everyone around you.",
    },

    {
      image: "/lakshmi-pg3.6.png",
      button: "A Soul Full Of Light 🌼",
      story:
        "☀️ There are some people whose goodness feels temporary, but your nature feels deeply genuine.\n\n🌷 You have this rare ability to make people feel emotionally safe — through your patience, understanding, calmness and fairness.\n\n✨ Please never change the softness inside you because that softness is not weakness — it is the reason your presence feels comforting, healing and beautiful.",
    },
  ];

  const rows = [
    memories.slice(0, 3),
    memories.slice(3, 6),
  ];

  return (
    <section
      id="memories"
      onMouseEnter={handleSectionEnter}
      onMouseLeave={handleSectionLeave}
      onTouchStart={handleSectionEnter}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(221,208,255,0.45),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,220,230,0.45),transparent_30%),linear-gradient(to_bottom,#eef4ff,#fdf7fb,#fff5ef)] px-4 py-20 sm:px-6 lg:px-12"
    >

      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/DekhaHiNahi.mp3" type="audio/mpeg" />
      </audio>

      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-120px] top-[20%] h-[320px] w-[600px] rounded-full bg-pink-200/25 blur-3xl" />

      <div className="absolute right-[-120px] bottom-[10%] h-[320px] w-[600px] rounded-full bg-violet-200/20 blur-3xl" />

      <div className="absolute top-[55%] left-[40%] h-[240px] w-[240px] rounded-full bg-orange-100/20 blur-3xl" />

      {/* MAIN */}
      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* LABEL */}
        <div className="mb-5 inline-flex rounded-full border border-pink-200/60 bg-white/30 px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#a86e8a] backdrop-blur-xl">
          ✦ MEMORIES
        </div>

        {/* HEADING */}
        <h2 className="font-[family-name:var(--font-heading)] text-[38px] sm:text-[52px] lg:text-[68px] font-light leading-[0.95] tracking-[-2px] text-[#2f2433]">
          She Who
          <br />
          Defines Perfection
        </h2>

        {/* ROWS */}
        <div className="mt-14 space-y-10">

          {rows.map((row, rowIndex) => {

            const globalStartIndex = rowIndex * 3;

            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 gap-8 lg:grid-cols-3"
              >

                {row.map((memory, index) => {

                  const actualIndex = globalStartIndex + index;
                  const isActive = activeCard === actualIndex;

                  return (
                    <div
                      key={actualIndex}
                      className={`${
                        isActive
                          ? "lg:col-span-3"
                          : activeCard !== null &&
                            Math.floor(activeCard / 3) === rowIndex
                          ? actualIndex !== activeCard
                            ? "hidden lg:hidden"
                            : ""
                          : ""
                      }`}
                    >

                      {!isActive && (
                        <motion.div
                          layout
                          whileHover={{ y: -6 }}
                          className="overflow-hidden rounded-[32px] border border-white/60 bg-white/30 shadow-[0_20px_60px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
                        >

                          {/* IMAGE */}
                          <div className="overflow-hidden">
                            <img
                              src={memory.image}
                              alt="Memory"
                              className="h-[360px] sm:h-[480px] lg:h-[520px] w-full object-cover object-[center_20%] transition duration-700 hover:scale-105"
                            />
                          </div>

                          {/* BUTTON */}
                          <div className="p-5">

                            <button
                              onClick={() => setActiveCard(actualIndex)}
                              className="w-full rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-5 py-4 text-[13px] sm:text-[14px] font-medium text-[#3f3346] shadow-[0_10px_30px_rgba(255,192,203,0.25)] transition hover:scale-[1.02]"
                            >
                              {memory.button}
                            </button>

                          </div>

                        </motion.div>
                      )}

                      {/* EXPANDED */}
                      <AnimatePresence>

                        {isActive && (

                          <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid gap-8 lg:grid-cols-3"
                          >

                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/30 shadow-[0_20px_60px_rgba(255,255,255,0.65)] backdrop-blur-2xl">

                              <img
                                src={memory.image}
                                alt="Memory"
                                className="h-[360px] sm:h-[480px] lg:h-[720px] w-full object-cover object-[center_20%]"
                              />

                              <div className="p-5">

                                <button
                                  onClick={() => setActiveCard(null)}
                                  className="w-full rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-5 py-4 text-[13px] sm:text-[14px] font-medium text-[#3f3346] shadow-[0_10px_30px_rgba(255,192,203,0.25)] transition hover:scale-[1.02]"
                                >
                                  Minimize Story ✨
                                </button>

                              </div>

                            </div>

                            {/* STORY */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="lg:col-span-2 rounded-[32px] border border-white/60 bg-white/75 p-8 sm:p-10 shadow-[0_20px_60px_rgba(255,255,255,0.65)] backdrop-blur-2xl"
                            >

                              <h3 className="font-[family-name:var(--font-heading)] text-[34px] sm:text-[42px] leading-tight text-[#2d2330]">
                                {memory.button}
                              </h3>

                              <div className="mt-8 whitespace-pre-line text-[17px] sm:text-[18px] leading-[2.1] text-[#3d3441]">
                                {memory.story}
                              </div>

                            </motion.div>

                          </motion.div>
                        )}

                      </AnimatePresence>

                    </div>
                  );
                })}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}