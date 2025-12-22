"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  // ⏱ Auto redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/information");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
    bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-50 text-center font-sans">

      {/* ===== DIAGONAL STRIPES LAYER (VISIBLE) ===== */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              rgba(99,102,241,0.15) 0px,
              rgba(99,102,241,0.15) 40px,
              rgba(14,165,233,0.15) 40px,
              rgba(14,165,233,0.15) 80px
            )
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ===== SOFT GRADIENT FLOW ===== */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr 
        from-indigo-200/30 via-sky-200/30 to-cyan-200/30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* ===== Floating Glow Orbs ===== */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute w-[520px] h-[520px] bg-indigo-300/35 rounded-full blur-3xl top-16 left-10"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute w-[620px] h-[620px] bg-sky-300/35 rounded-full blur-3xl bottom-10 right-10"
      />

      {/* ===== Floating Particles ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* ===== CENTER CONTENT: LOGO + TAGLINE ONLY ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="MitrAI Logo"
          className="w-72 h-72 md:w-102 md:h-102 rounded-full shadow-2xl border border-indigo-100 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-4xl text-gray-700 font-medium"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Every mind needs a Mitr.
        </motion.p>

        {/* Loading Hint */}
        <motion.p
          className="mt-10 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Preparing a calm space for you…
        </motion.p>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-500 text-sm z-10">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-600">MitrAI</span> | Your Emotional Wellbeing Partner 💙
      </p>
    </main>
  );
}

