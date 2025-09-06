"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoIntro() {
  const [showText, setShowText] = useState(false);
  const [startGlow, setStartGlow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2200);
    const glowTimer = setTimeout(() => setStartGlow(true), 5200);
    const redirectTimer = setTimeout(() => {
      router.push("/landing");
    }, 6500); // redirect after ~6.5s

    return () => {
      clearTimeout(textTimer);
      clearTimeout(glowTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen bg-black overflow-hidden px-4">
      {/* Big Glowing Box */}
      <div
        className={`flex items-center justify-center 
          w-[90%] max-w-[500px] h-[180px] sm:h-[200px] md:h-[250px] 
          rounded-2xl border-4 border-white transition-all duration-700 
          ${startGlow ? "glow-box" : ""}
        `}
      >
        {/* Logo */}
        <div
          className="
            w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32
            rounded-full overflow-hidden border-4 border-white
            flex items-center justify-center animate-logoMove
          "
        >
          <img
            src="/logo.png"
            alt="City Gym Logo"
            className="object-contain w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </div>

        {/* Text */}
        {showText && (
          <h1
            className={`ml-3 sm:ml-4 md:ml-6 
              text-3xl sm:text-4xl md:text-6xl 
              font-extrabold text-white font-mono 
              whitespace-nowrap overflow-hidden border-r-4 pr-2
              ${startGlow ? "typed-done" : "typing"}
            `}
          >
            CITY GYM
          </h1>
        )}
      </div>
    </div>
  );
}
