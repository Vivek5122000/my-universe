import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MemorySection from "@/components/MemorySection";
import LettersSection from "@/components/LettersSection";
import VideoMemorySection from "@/components/VideoMemorySection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>

      <Hero />

      <StorySection />

      <MemorySection />

      <LettersSection />

      <VideoMemorySection />

      <AboutSection />

    </main>
  );
}