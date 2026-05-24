"use client";

export default function VideoMemorySection() {
  return (
    <section
      id="family-video"
      className="relative h-screen overflow-hidden bg-[linear-gradient(to_bottom,#fff8fb,#fff1f6,#fff8fc)]"
    >

      {/* PINK GLOW */}
      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-pink-200/40 blur-3xl" />

      <div className="absolute bottom-[5%] right-[-100px] h-[280px] w-[280px] rounded-full bg-violet-200/40 blur-3xl" />

      {/* CLOUDS */}
      <div className="absolute right-[8%] top-[8%] h-[90px] w-[260px] rounded-full bg-white/50 blur-[2px]" />

      <div className="absolute bottom-[14%] left-[5%] h-[80px] w-[220px] rounded-full bg-white/50 blur-[2px]" />

      {/* LARGE FOREGROUND FLOWERS */}
<div className="absolute top-[-12%] left-[8%] animate-[fall_18s_linear_infinite] text-[48px] opacity-55">
  🌸
</div>

<div className="absolute top-[-15%] right-[18%] animate-[fall_22s_linear_infinite] text-[56px] opacity-45">
  🌺
</div>

{/* MEDIUM FLOWERS */}
<div className="absolute top-[-10%] left-[28%] animate-[fall_16s_linear_infinite] text-[34px] opacity-60">
  🌷
</div>

<div className="absolute top-[-8%] right-[36%] animate-[fall_20s_linear_infinite] text-[38px] opacity-50">
  🌼
</div>

<div className="absolute top-[-14%] left-[48%] animate-[fall_17s_linear_infinite] text-[30px] opacity-60">
  🌸
</div>

{/* SMALL DISTANT FLOWERS */}
<div className="absolute top-[-12%] left-[68%] animate-[fall_21s_linear_infinite] text-[20px] opacity-45">
  🌺
</div>

<div className="absolute top-[-10%] right-[10%] animate-[fall_19s_linear_infinite] text-[18px] opacity-50">
  🌸
</div>

      {/* STARS */}
      <div className="absolute right-[24%] top-[16%] text-[20px] text-yellow-400">
        ✨
      </div>

      <div className="absolute bottom-[22%] left-[28%] text-[18px] text-yellow-400">
        ⭐
      </div>

      {/* MOVING STARS */}
{/* MOON */}
<div className="absolute right-[8%] top-[10%] h-[110px] w-[110px] rounded-full bg-gradient-to-br from-white via-[#fff8dc] to-[#ffe8b0] shadow-[0_0_60px_rgba(255,245,200,0.7)]" />

{/* SHOOTING STAR */}
<div className="absolute left-[18%] top-[12%] rotate-[-20deg] text-[26px] text-white opacity-80 animate-pulse">
  ☄️
</div>

{/* FALLING FLOWERS */}
<div className="absolute top-[-10%] left-[12%] animate-[fall_14s_linear_infinite] text-[22px] opacity-70">
  🌸
</div>

<div className="absolute top-[-15%] left-[28%] animate-[fall_18s_linear_infinite] text-[28px] opacity-60">
  🌺
</div>

<div className="absolute top-[-12%] right-[22%] animate-[fall_16s_linear_infinite] text-[20px] opacity-60">
  🌷
</div>

<div className="absolute top-[-8%] right-[38%] animate-[fall_20s_linear_infinite] text-[26px] opacity-50">
  🌼
</div>

<div className="absolute top-[-14%] left-[46%] animate-[fall_17s_linear_infinite] text-[18px] opacity-60">
  🌸
</div>

{/* FALLING STARS */}
<div className="absolute top-[-10%] left-[64%] animate-[fall_15s_linear_infinite] text-[18px] text-yellow-300 opacity-70">
  ✨
</div>

<div className="absolute top-[-14%] right-[12%] animate-[fall_19s_linear_infinite] text-[22px] text-yellow-200 opacity-60">
  ⭐
</div>

<div className="absolute top-[-8%] left-[78%] animate-[fall_21s_linear_infinite] text-[16px] text-pink-200 opacity-60">
  ✦
</div>

{/* GLOW PARTICLES */}
<div className="absolute left-[32%] top-[28%] h-3 w-3 rounded-full bg-pink-200/70 blur-sm animate-pulse" />

<div className="absolute right-[34%] bottom-[26%] h-4 w-4 rounded-full bg-violet-200/70 blur-sm animate-pulse" />

<div className="absolute left-[58%] top-[22%] h-2 w-2 rounded-full bg-yellow-200/80 blur-sm animate-pulse" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-12 py-10">

        {/* SMALL LABEL */}
        <div className="mb-6 inline-flex w-fit rounded-full border border-pink-200/60 bg-white/50 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c08fa5] backdrop-blur-xl">

          ✦ Gallery

        </div>

        {/* PAGE TITLE */}
        <h2 className="font-[family-name:var(--font-heading)] text-[58px] font-light leading-[0.92] tracking-[-3px] text-[#4d3f53]">

          Moments That
          <br />
          Stayed Forever

        </h2>

        {/* CONTENT ROW */}
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT TEXT */}
          <div className="max-w-[520px]">

  <div className="mb-8 h-[2px] w-[90px] rounded-full bg-gradient-to-r from-pink-300 to-violet-300" />

  <p className="text-[19px] leading-[2] tracking-[0.01em] text-[#6d5c70]">

    Some memories never truly leave us.

    <br />
    They stay hidden inside warm evenings,
    soft laughter,
    loving parents,
    and the quiet little moments
    that once felt ordinary,
    but later became priceless.

  </p>

  <p className="mt-10 text-[24px] font-light italic tracking-wide text-[#cf7298]">

    “Love made these moments eternal.”

  </p>

</div>
          {/* VIDEO SIDE */}
          <div className="relative">

            {/* VIDEO GLOW */}
            <div className="absolute inset-0 rounded-[40px] bg-pink-200/20 blur-2xl" />

            {/* VIDEO FRAME */}
            <div className="relative rounded-[44px] bg-gradient-to-br from-pink-100/70 via-white/80 to-violet-100/70 p-[3px] shadow-[0_25px_80px_rgba(236,180,210,0.45)]">

  {/* OUTER GLOW */}
  <div className="absolute inset-0 rounded-[44px] bg-gradient-to-r from-pink-200/30 via-white/10 to-violet-200/30 blur-2xl" />

  {/* INNER FRAME */}
  <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-white/40 p-4 backdrop-blur-xl">

    {/* TOP SHINE */}
    <div className="absolute left-0 top-0 h-[120px] w-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

    <video
  id="familyVideo"
  preload="metadata"
  playsInline
  controls
  className="relative w-full max-w-[820px] rounded-[30px] object-cover shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
>
  <source src="/family-memory.mp4" type="video/mp4" />
</video>
  </div>

</div>

          </div>

        </div>

      </div>

    </section>
  );
}