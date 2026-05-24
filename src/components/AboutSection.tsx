"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const sections = [
  {
    title: "Academic Excellence",
    button: "A Journey Into Her Academic Excellence ✨",
    image: "/about-study.jpg",
    audio: "/EkZindagi.mp3",
    story: `
🎓✨ <strong>My Brilliant Lakshmi</strong>

From childhood itself, you were always someone extraordinary. 🌸  
I still remember how beautifully you excelled in academics at every stage of life — from <strong>St. Joseph’s</strong> in Class 10, to <strong>St. Karen’s</strong> in Class 12, and then <strong>Miranda House, Delhi University</strong> for graduation. 🤍

But what always touched my heart most was this — you never grew alone. 🌷  
You always wanted others to rise with you. You genuinely celebrated people’s success, encouraged them, guided them, and worried for them like their own family.

I still remember how deeply concerned you would become for your friends preparing for Civil Services. 🌙  
You carried prayers for others inside your own heart even while handling your own battles.

And now… seeing <strong>you</strong> preparing for Civil Services feels so special to me. ✨  
Somewhere deep inside, I already know you will succeed there too.

One day, I truly hope to see you wearing that uniform with pride, fulfilling your father’s dream and making everyone around you emotional with happiness. 🤍👨‍👧

You deserve every beautiful thing this world has to offer. 🌸
    `,
  },

  {
    title: "Her Friends",
    button: "The Way She Loved Her Friends 🤍",
    image: "/about-friends.jpg",
    audio: "/JoTumMereHo.mp3",
    story: `
🤍✨ <strong>My Deepest Apology</strong>

Lakshmi… maybe in another life, I become a better friend. 🌙  
Maybe in another life, I protect your heart instead of hurting it unknowingly.

Hearing from Jyoti how much you suffered in the last one year broke something inside me completely. 💔  
Those words will stay with me forever as a regret I may never fully repair.

I never wanted you to suffer. Never. 🌸

Maybe in another life, all your friends understand your value better.  
Maybe they become your wings instead of the knife that cuts them.

I am truly sorry. 🤍

And despite everything… you still remained one of the kindest souls I have ever known. 🌷  
You are selfless, approachable, inclusive, emotionally beautiful — almost like a <strong>Bhagavad Gita</strong> for people around you, quietly teaching kindness, morality, empathy, and love through actions.

I still remember so many little things about you that made me admire your heart endlessly. ✨

🌸 Worrying about waking Jyoti on time for exams  
🌸 Delaying our conversations just to order food for her after exams  
🌸 Consoling people when they felt low  
🌸 Keeping cold water ready for me during hot summer days  
🌸 Sending me your own result first so I would not awkwardly have to ask Jyoti yours too  
🌸 Noticing tiny details that make people smile

You always made people happy… even at the cost of your own happiness. 🤍

And your words still stay with me:

💫 <em>“Everyone deserves to be happy on birthdays.”</em>

That single line says everything about the kind of person you are. 🌙
    `,
  },

  {
    title: "My Foodie",
    button: "Tiny Food Memories With You 🍜",
    image: "/about-foodie.jpg",
    audio: "/AbhiMujhMeinKahin.mp3",
    story: `
🍜🌸 <strong>My Cute Foodie</strong>

Thank you for every single time you ordered food for me whenever I was hungry. 🤍  
I never really had strong preferences for food… but somehow, because of you, <strong>fried rice and rolls from “Baap of Rolls”</strong> became special memories for me forever. ✨

You are honestly the cutest foodie. 🌷  
And I genuinely wish you always stay healthy, happy, smiling, and continue enjoying all your favorite things — momos, Chinese food, sweets, desserts, and every tiny happiness that food brings you. 🍰🍫🍜

And sorry… I never properly knew how to order things for you. 😭  
Apps, food menus, deciding what to order — none of that was ever my expertise. But you were always patient with me and never complained.

I still remember the day we went to eat <strong>Falooda in U Block</strong>. 🌙  
You gave me your bag to hold for a few moments… and then thanked me for something so small so sincerely.

That softness in you… that gratitude for little things… is something I will always admire. 🤍

Please always stay exactly like this. 🌸✨
    `,
  },

  {
    title: "Delhi University",
    button: "Her Beautiful DU Journey 🎓",
    image: "/about-du.jpg",
    audio: "/Faasle.mp3",
    story: `
🎓✨ <strong>Your Delhi University Days</strong>

I still remember how worried and emotional you were during the DU admission process. 🌸  
And honestly… seeing your happiness after getting selected felt so special.

I still have your result card that you once sent me. 🤍

I remember you proudly saying how you always tried being a good student because you never wanted your father’s money to go to waste. 🌙  
That sentence always stayed in my heart because it reflected your sincerity, responsibility, and love for your family so beautifully.

And then came your Delhi University stories. ✨  
Stories about classes, teachers, funny moments, discussions with friends, and random little memories that somehow became beautiful because they were yours.

I still remember you talking about that foreign boy in your class everyone found handsome 😂  
And also that teacher everyone secretly admired. 🌷

Those tiny conversations may have felt ordinary then… but today they feel precious.

Your DU phase was not just about academics. 🌸  
It was about growth, independence, maturity, friendships, dreams, and slowly becoming the incredible woman you are today. 🤍
    `,
  },

  {
    title: "Life at Axtria",
    button: "Watching You Grow At Axtria 💼",
    image: "/about-axtria.jpg",
    audio: "/HaalEDil.mp3",
    story: `
💼✨ <strong>Your Axtria Journey</strong>

I honestly don’t even know where to begin.

Maybe from that moment when you said:

🌸 <em>“Mera selection ho gaya.”</em>

I still remember running through my college corridor shouting like a mad person for 2–3 minutes because I was THAT happy. 😂🤍

I have always admired your hard-working nature. Always.

And this is a secret no one knows… 🌙  
From childhood till today, somewhere deep inside, I always wanted to become like you.

First because you were always ahead of everyone academically and everyone’s favorite. 🌷  
And later, when we entered professional life, because the more I understood you, the more you started feeling like a guide… almost like a Bible to me — someone who always had the right answers, who always tried doing the right thing.

I have always looked up to you. ✨

And I truly hope life takes you exactly where your heart wants to go. 🌸  
May you achieve every dream, every goal, every happiness you deserve.

Because if anyone deserves beautiful success… it is you. 🤍
    `,
  },

  {
    title: "The Beauty She Brings",
    button: "The Beauty You Bring Into Lives 🌙",
    image: "/about-soul.jpg",
    audio: "/TumHiHo.mp3",
    story: `
🌙✨ <strong>The Beauty You Carry</strong>

Your empathy, kindness, gentleness, grace, inclusiveness, and rare ability to understand people… these are not ordinary qualities. 🤍

I genuinely cannot express enough gratitude for the changes you unknowingly brought into my life. 🌸  
You gave me the ability to think differently. To feel differently. To become softer as a human being.

You were like a lighthouse for people around you — quietly guiding them during difficult times. ✨  
Like a flower that keeps spreading fragrance even after being plucked. 🌷  
Like the moon that brings calmness and stillness after a long exhausting day. 🌙

And honestly… I feel blessed to have known someone as pure, genuine, fair, and emotionally beautiful as you.

Sorry for every hurt knowingly or unknowingly caused. 🤍

I know hearing these qualities about yourself may not always make you happy… but please remember this forever:

💫 <strong>You are special because you are like this.</strong>

You are like pure gold tested in fire. 🌸  
And no matter what life says sometimes… please never change your softness.

Because people like you make this world infinitely more beautiful simply by existing. ✨🤍
    `,
  },
];

export default function AboutSection() {

  const [activeStory, setActiveStory] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {

    if (activeStory === null) {

      if (audioRef.current) {

        audioRef.current.pause();
        audioRef.current.currentTime = 0;

      }

      return;
    }

    const currentAudio = new Audio(sections[activeStory].audio);

    currentAudio.volume = 0.35;
    currentAudio.loop = true;

    audioRef.current = currentAudio;

    const playAudio = async () => {

      try {

        await currentAudio.play();

      } catch (err) {

        console.log("Audio autoplay blocked");

      }

    };

    playAudio();

    return () => {

      currentAudio.pause();
      currentAudio.currentTime = 0;

    };

  }, [activeStory]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#fff9fb,#fff4f7,#fffafc)] px-4 py-16 sm:px-6 lg:px-12"
    >
      {/* GLOWS */}
      <div className="absolute left-[-120px] top-[8%] h-[320px] w-[320px] rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute bottom-[5%] right-[-100px] h-[260px] w-[260px] rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* LABEL */}
        <div className="mb-5 inline-flex rounded-full border border-pink-200/60 bg-white/60 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-[#c08fa5] backdrop-blur-xl sm:text-[11px]">
          ✦ About Her
        </div>

        {/* TITLE */}
        <h2 className="font-[family-name:var(--font-heading)] text-[42px] font-light leading-[0.95] tracking-[-2px] text-[#3f3343] sm:text-[56px] lg:text-[68px]">
          The Many Beautiful
          <br />
          Chapters of Her Life
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-[900px] text-[15px] leading-[1.9] text-[#544a57] sm:text-[18px] lg:text-[20px]">
          A journey shaped by intelligence, kindness, ambition,
          friendship, family, dreams, and the rare softness that leaves
          beauty in every life it touches. 🌸
        </p>

        {/* DESKTOP LAYOUT */}
        <div className="mt-14 hidden lg:flex lg:flex-col lg:gap-10">
          {[0, 3].map((rowStart) => {
            const rowItems = sections.slice(rowStart, rowStart + 3);

            return (
              <div key={rowStart} className="grid grid-cols-3 gap-8">
                {activeStory !== null &&
                activeStory >= rowStart &&
                activeStory < rowStart + 3 ? (
                  <>
                    {/* ACTIVE IMAGE */}
                    <motion.div
                      layout
                      className="overflow-hidden rounded-[34px] border border-white/70 bg-white/60 p-4 shadow-[0_20px_60px_rgba(255,255,255,0.7)] backdrop-blur-xl"
                    >
                      <img
                        src={sections[activeStory].image}
                        alt={sections[activeStory].title}
                        className="h-[500px] w-full rounded-[24px] object-cover"
                      />

                      <button
                        onClick={() => setActiveStory(null)}
                        className="mt-5 w-full rounded-full bg-gradient-to-r from-pink-200 via-violet-200 to-sky-200 px-5 py-4 text-[15px] font-medium text-[#433847] shadow-lg transition hover:scale-[1.02]"
                      >
                        Close Story ✨
                      </button>
                    </motion.div>

                    {/* STORY PANEL */}
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-2 h-[620px] overflow-y-auto rounded-[34px] border border-white/70 bg-white/80 p-10 shadow-[0_25px_70px_rgba(255,255,255,0.75)] backdrop-blur-xl"
                    >
                      <h3 className="font-[family-name:var(--font-heading)] text-[42px] leading-tight text-[#2f2733]">
                        {sections[activeStory].title}
                      </h3>

                      <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-pink-300 via-violet-300 to-transparent" />

                      <div
                        className="mt-8 text-[18px] leading-[2] text-[#2f2a33]"
                        dangerouslySetInnerHTML={{
                          __html: sections[activeStory].story,
                        }}
                      />
                    </motion.div>
                  </>
                ) : (
                  rowItems.map((item, index) => {
                    const actualIndex = rowStart + index;

                    return (
                      <motion.div
                        key={actualIndex}
                        whileHover={{ y: -6 }}
                        className="overflow-hidden rounded-[34px] border border-white/70 bg-white/55 p-4 shadow-[0_20px_60px_rgba(255,255,255,0.7)] backdrop-blur-xl"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-[500px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-[1.03]"
                        />

                        <button
                          onClick={() => setActiveStory(actualIndex)}
                          className="mt-5 w-full rounded-full bg-gradient-to-r from-pink-200 via-violet-200 to-sky-200 px-5 py-4 text-[15px] font-medium text-[#433847] shadow-lg transition hover:scale-[1.02]"
                        >
                          {item.button}
                        </button>
                      </motion.div>
                    );
                  })
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE LAYOUT */}
        <div className="mt-12 flex flex-col gap-8 lg:hidden">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-[30px] border border-white/70 bg-white/60 p-4 shadow-[0_20px_60px_rgba(255,255,255,0.7)] backdrop-blur-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[420px] w-full rounded-[22px] object-cover"
              />

              <button
                onClick={() =>
                  setActiveStory(activeStory === index ? null : index)
                }
                className="mt-5 w-full rounded-full bg-gradient-to-r from-pink-200 via-violet-200 to-sky-200 px-5 py-4 text-[14px] font-medium text-[#433847] shadow-lg"
              >
                {activeStory === index
                  ? "Close Story ✨"
                  : item.button}
              </button>

              <AnimatePresence>
                {activeStory === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-6 text-[16px] leading-[2] text-[#2f2a33]"
                      dangerouslySetInnerHTML={{
                        __html: item.story,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}