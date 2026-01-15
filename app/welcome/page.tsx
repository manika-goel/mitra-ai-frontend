"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // useState add kiya
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false); // Hydration fix ke liye state

  // ⏱ Faster redirect
  useEffect(() => {
    setIsMounted(true); // Component mount hone ke baad true hoga
    const timer = setTimeout(() => {
      router.push("/information");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
    bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-50 text-center font-sans">

      {/* ===== DIAGONAL STRIPES ===== */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              rgba(99,102,241,0.12) 0px,
              rgba(99,102,241,0.12) 50px,
              rgba(14,165,233,0.12) 50px,
              rgba(14,165,233,0.12) 100px
            )
          `,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* ===== SOFT GRADIENT FLOW ===== */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr 
        from-indigo-200/25 via-sky-200/25 to-cyan-200/25"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* ===== Floating Glow Orbs ===== */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-indigo-300/30 rounded-full blur-3xl top-20 left-10 will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute w-[520px] h-[520px] bg-sky-300/30 rounded-full blur-3xl bottom-10 right-10 will-change-transform"
      />

      {/* ===== Floating Particles (Hydration Fix Applied) ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* ===== CENTER CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.img
          src="/logo.png"
          alt="MitrAI Logo"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border border-indigo-100 mb-6"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.p
          className="text-2xl md:text-4xl text-gray-700 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Every mind needs a Mitr.
        </motion.p>

        <motion.p
          className="mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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