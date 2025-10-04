"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EndpointCard from "../components/EndpointCard";
import LiveGeneration from "../components/LiveGeneration";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const descriptions = [
    "scientist boy",
    "magician",
    "space explorer",
    "teacher",
    "cowboy",
    "rogue adventurer",
    "astronaut",
    "school girl",
    "professional businessman",
    "playful boy"
  ];
  const [avatars, setAvatars] = useState(
    Array.from({ length: 8 }, (_, i) =>
      i === 0 ? "" : `https://avatar-api-service.avatar-api.workers.dev/avatar?description=${encodeURIComponent(descriptions[i % descriptions.length])}`
    )
  );

  const handleCustomDescription = (desc: string) => {
    setAvatars(prev => {
      const updated = [...prev];
      updated[0] = `https://avatar-api-service.avatar-api.workers.dev/avatar?description=${encodeURIComponent(desc)}`;
      return updated;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 7) + 1; // 1..7
      const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
      setAvatars(prev => {
        const updated = [...prev];
        updated[randomIndex] = `https://avatar-api-service.avatar-api.workers.dev/avatar?description=${encodeURIComponent(randomDesc)}`;
        return updated;
      });
  }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white text-black min-h-screen font-mono relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div> */}

      <Navbar isScrolled={isScrolled} />

      <main className="relative pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <EndpointCard handleCopy={handleCopy} isCopied={isCopied} />
          <LiveGeneration avatars={avatars} onCustomDescription={handleCustomDescription} />
        </div>
      </main>
    </div>
  );
}