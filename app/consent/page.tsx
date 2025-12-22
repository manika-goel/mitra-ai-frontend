"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ConsentPage() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleAgree = () => {
    setAgreed(true);
    setTimeout(() => {
      router.push("/auth");
    }, 1200);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden 
    bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 text-center px-6 py-16">

      {/* ===== Animated Gradient Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-br 
      from-indigo-200/50 via-sky-200/30 to-purple-200/40 backdrop-blur-3xl" />

      {/* ===== Animated Glow Blobs ===== */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute w-[480px] h-[480px] bg-indigo-300/40 rounded-full blur-[120px] top-16 left-20"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute w-[560px] h-[560px] bg-blue-300/40 rounded-full blur-[130px] bottom-24 right-16"
      />

      {/* ===== Shield Icon ===== */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: [0, -12, 0], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative z-20 text-7xl mb-8 drop-shadow-2xl"
      >
        🛡️
      </motion.div>

      {/* ===== Consent Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full bg-white/70 backdrop-blur-2xl 
        border border-white/50 rounded-[2.5rem] shadow-2xl px-14 py-16 flex flex-col items-center"
      >
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Consent & Privacy
        </h1>

        {/* Content */}
        <div className="text-left text-gray-700 text-lg leading-relaxed space-y-5 max-w-3xl">
          <p>
            MitrAI will keep your information safe and confidential.
          </p>
          <p>
            Your data will be used only to understand your emotions and mental state.
          </p>
          <p>
            We do not sell or misuse your personal information.
          </p>
          <p>
            By continuing, you give consent to this process.
          </p>
        </div>

        {/* Agree Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(99,102,241,0.6)" }}
          whileTap={{ scale: 0.96 }}
          onClick={handleAgree}
          className={`mt-10 px-14 py-5 text-lg font-semibold rounded-full text-white transition-all duration-300 ${
            agreed
              ? "bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg"
              : "bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 shadow-xl"
          }`}
        >
          {agreed ? "✅ Agreed" : "I Agree & Continue"}
        </motion.button>

        {/* Thank You Message */}
        {agreed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-green-700 font-medium text-lg"
          >
            Thank you for trusting MitrAI 💙
          </motion.p>
        )}
      </motion.div>

      {/* ===== Soft Wave Stripes ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <path
              d="M 0 70 Q 35 40, 70 70 T 140 70"
              fill="none"
              stroke="rgba(59,130,246,0.35)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>
    </main>
  );
}
