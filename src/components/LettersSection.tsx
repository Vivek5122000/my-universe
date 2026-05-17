"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LettersSection() {
  const [activeLetter, setActiveLetter] = useState(0);

  const letters = [
    {
      title: "To The Girl Who Carries Everything 🌙✨",

      preview:
        "Some people survive. You carried entire worlds softly & chose kindness.. 🤍",

      message: `My Dearest Lakshmi 🌸✨

Sometimes I wonder how certain people enter our lives so quietly… and yet slowly become a feeling we carry everywhere within us. 🌙💖
You are one of those rare souls.

There is something incredibly beautiful about the way you exist in this world — the softness in your heart, the kindness in your words, the calmness in your presence, and the warmth you unknowingly leave behind in the lives of people around you. 🌷☁️✨

Even when life became difficult, exhausting, or unfair… you still chose kindness.
And that says everything about the beauty of your soul. 🤍

I genuinely hope life always remains gentle with you.

I hope your dreams continue finding their way toward reality. 🌈  
I hope every road you walk becomes brighter because of the light you carry within yourself. ✨

And whenever life feels heavy someday… I hope you remember this:
You are deeply cherished. 🌙🤍
Always.

With endless admiration,love and affection,  
Vivek 💫`,
    },

    {
      title: "For Her Silent Strength 🌸",

      preview:
        "Strength is not always loud. Sometimes it exists quietly behind soft smiles... ✨",

      message: `Lakshmi 🤍

One of the most beautiful things about you has always been your quiet strength.

Not the kind the world loudly celebrates —
but the kind that silently survives difficult days,
carries responsibilities,
holds emotions together,
and still somehow manages to smile for others. 🌸

You have this incredibly rare ability to stay soft without becoming weak.

And honestly, that is one of the purest forms of courage I have ever seen.

The world often mistakes loudness for strength,
but people like you remind us that grace,
patience,
kindness,
and emotional resilience are far more powerful. 🌙✨

I hope you never doubt your worth.

You are stronger than you realize,
more loved than you know,
and far more special than words could ever fully explain. 🤍

No matter where life takes you,
I will always quietly pray for your happiness,
your peace,
your growth,
and the fulfillment of every beautiful dream hidden inside your heart. 🌷

Keep shining softly.

That softness is your magic. ✨

— Vivek 🌸`,
    },

    {
      title: "A Universe Built Of Warmth ☁️✨",

      preview:
        "Some souls make places feel safer,and infinitely more beautiful..🤍",

      message: `Dear Lakshmi 🌸

Some people simply exist.
But some people become warmth.
You are warmth.

There is something about your presence that makes everything feel calmer —
like soft evening skies,
peaceful rain,
warm conversations,
and the comfort of home. ☁️🌙

The way you care,
the way you listen,
the way you make people feel valued,
safe,
and understood…
it is genuinely rare. 🤍

And maybe you do not even realize how many hearts feel lighter simply because you exist in their lives.

The world needs more souls like yours.
Gentle souls.  
Kind souls.  
Emotionally beautiful souls. ✨

I hope life rewards your heart with all the love and peace you deserve.

I hope your future is filled with beautiful surprises,
meaningful friendships,
deep laughter,
warm hugs,
late-night happiness,
peaceful mornings,
and dreams that slowly bloom into reality. 🌸🌈

And no matter how much time passes,
I think a part of me will always look at you with admiration,
gratitude,
care,
and affection. 🤍
Because some people become memories…

but a few become feelings that stay forever.
You are one of them. 🌙✨

With warmth always,  
Vivek 💫`,
    },
  ];

  return (
    <section
      id="letters"
      className="relative h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,214,230,0.35),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(221,208,255,0.35),transparent_30%),linear-gradient(to_bottom,#fff7fb,#f8f3ff,#eef4ff)] px-8 py-8 lg:px-20"
    >
      {/* Ambient Glows */}
      <div className="absolute left-[-100px] top-[10%] h-[320px] w-[320px] rounded-full bg-pink-200/20 blur-3xl" />

      <div className="absolute bottom-[10%] right-[-120px] h-[320px] w-[320px] rounded-full bg-violet-200/20 blur-3xl" />

      {/* Floating Elements */}
      <div className="absolute left-[8%] top-[18%] text-[40px] opacity-70">
        🌸
      </div>

      <div className="absolute right-[10%] top-[12%] text-[24px] opacity-60">
        ✨
      </div>

      <div className="absolute bottom-[16%] left-[12%] text-[34px] opacity-60">
        🤍
      </div>

      <div className="absolute right-[18%] bottom-[12%] text-[28px] opacity-60">
        🌙
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex w-fit rounded-full border border-pink-200/60 bg-white/50 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c08fa5] backdrop-blur-xl"
        >
          ✦ LETTERS
        </motion.div>
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="ml-8 font-[family-name:var(--font-heading)] text-[55px] font-light leading-[0.92] tracking-[-2px] text-[#463949]"
        >
          Letters<br />Never Truly End
        </motion.h2>

        {/* MAIN LAYOUT */}
        <div className="mt-4 grid flex-1 grid-cols-[420px_1fr] gap-15">
          {/* LEFT LETTER LIST */}
          <div className="flex flex-col gap-8">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveLetter(index)}
                className={`cursor-pointer rounded-[40px] border border-white/60 p-3 shadow-[0_20px_60px_rgba(255,255,255,0.65)] transition duration-300 ${
                  activeLetter === index
                    ? "bg-white/85 backdrop-blur-md"
                    : "bg-white/35 backdrop-blur-2xl hover:bg-white/55"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[24px] leading-snug text-[#55485d]">
                      {letter.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-[#8a7d90]">
                      {letter.preview}
                    </p>
                  </div>

                  <div className="ml-4 text-[28px]">
                    ✉️
                  </div>
                </div>

                <button
                  className="mt-6 rounded-full bg-gradient-to-r from-[#f7cee4] via-[#ddd0ff] to-[#cde8ff] px-5 py-2 text-[13px] text-[#5d4f63] shadow-[0_10px_30px_rgba(255,192,203,0.25)] transition hover:scale-105"
                >
                  Read Letter ✨
                </button>
              </motion.div>
            ))}
          </div>

          {/* RIGHT LETTER CONTENT */}
          <div className="relative h-[70vh] overflow-hidden rounded-[40px] border border-white/60 bg-white/70 p-8 shadow-[0_25px_80px_rgba(255,255,255,0.7)] backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLetter}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="h-full overflow-y-auto pr-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[38px] leading-tight text-[#4f4255]">
                    {letters[activeLetter].title}
                  </h3>

                  <div className="text-[34px]">
                    💌
                  </div>
                </div>

                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-pink-200 via-violet-200 to-transparent" />

                <p className="mt-8 whitespace-pre-line font-serif text-[17px] leading-[1.75] tracking-[0.005em] text-[#5d5361]">
                  {letters[activeLetter].message}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}