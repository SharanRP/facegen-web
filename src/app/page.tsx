"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EndpointCard from "../components/EndpointCard";
import LiveGeneration from "../components/LiveGeneration";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [avatars, setAvatars] = useState([
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=8"
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 8);
      const newSeed = Math.floor(Math.random() * 10000);
      setAvatars(prev => {
        const updated = [...prev];
        updated[randomIndex] = `https://api.dicebear.com/7.x/avataaars/svg?seed=${newSeed}`;
        return updated;
      });
    }, 2000);
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
          <LiveGeneration avatars={avatars} />
        </div>
      </main>
    </div>
  );
}