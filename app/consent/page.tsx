"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function ConsentPage() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();
  const { t } = useLanguage();

  const handleAgree = () => {
    setAgreed(true);
    setTimeout(() => {
      router.push("/onboarding");
    }, 1200);
  };

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden
        bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 text-center px-6 py-16"
      >
        {/* ===== Soft Gradient Background ===== */}
        <div
          className="absolute inset-0 bg-gradient-to-br
          from-indigo-200/40 via-sky-200/25 to-purple-200/30"
        />

        {/* ===== Floating Blobs ===== */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute w-[380px] h-[380px] bg-indigo-300/30
          rounded-full blur-[90px] top-20 left-20"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          className="absolute w-[450px] h-[450px] bg-blue-300/30
          rounded-full blur-[100px] bottom-24 right-20"
        />

        {/* ===== Shield Icon ===== */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-20 text-6xl mb-8"
        >
          🛡️
        </motion.div>

        {/* ===== Consent Card ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl w-full bg-white/75 backdrop-blur-xl
          border border-white/50 rounded-[2.5rem] shadow-xl px-12 py-14
          flex flex-col items-center"
        >
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t("consentTitle")}
          </h1>

          {/* Content */}
          <div className="text-left text-gray-700 text-lg leading-relaxed space-y-4 max-w-3xl">
            <p>{t("consentLine1")}</p>
            <p>{t("consentLine2")}</p>
            <p>{t("consentLine3")}</p>
            <p>{t("consentLine4")}</p>
          </div>

          {/* Agree Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleAgree}
            className={`mt-10 px-14 py-5 text-lg font-semibold rounded-full text-white
            transition-all duration-300 ${
              agreed
                ? "bg-gradient-to-r from-green-400 to-emerald-500 shadow-md"
                : "bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg"
            }`}
          >
            {agreed ? `✅ ${t("agreed")}` : t("agreeContinue")}
          </motion.button>

          {/* Thank You */}
          {agreed && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-green-700 font-medium text-lg"
            >
              {t("thankYou")}
            </motion.p>
          )}
        </motion.div>

        {/* ===== Soft Wave Pattern ===== */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wavePattern"
              x="0"
              y="0"
              width="140"
              height="140"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 70 Q 35 40, 70 70 T 140 70"
                fill="none"
                stroke="rgba(59,130,246,0.3)"
                strokeWidth="3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>
      </main>
    </>
  );
}
