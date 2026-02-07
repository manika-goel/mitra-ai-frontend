"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguagePage() {
  const { lang, setLang, t } = useLanguage();

  const selected =
    lang === "en" ? "English" :
    lang === "hi" ? "Hindi" :
    null;

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center
        bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20 text-center"
      >
        {/* ===== Background Waves ===== */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wavePattern"
              x="0"
              y="0"
              width="180"
              height="180"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 90 Q 45 50, 90 90 T 180 90"
                fill="none"
                stroke="rgba(99,102,241,0.22)"
                strokeWidth="3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>

        {/* ===== Floating Blobs ===== */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute w-[420px] h-[420px] bg-blue-300/25
          rounded-full blur-[100px] top-16 left-16"
        />

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          className="absolute w-[520px] h-[520px] bg-indigo-300/25
          rounded-full blur-[120px] bottom-12 right-16"
        />

        {/* ===== Main Content ===== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl w-full flex flex-col items-center"
        >
          {/* Title */}
          <div className="flex flex-col items-center mb-12">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-md mb-6">
              <Globe2 className="w-10 h-10 text-indigo-600" />
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
              🌍 {t("chooseLanguage")}{" "}
              <span className="text-indigo-600">
                {t("language")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              {t("languageDesc")}
            </p>
          </div>

          {/* ===== Language Cards ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-4">
            {/* English */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setLang("en")}
              className={`cursor-pointer relative bg-white/80 backdrop-blur-xl
              border border-white/40 rounded-3xl shadow-lg p-10 transition-all duration-300
              ${selected === "English"
                ? "ring-4 ring-indigo-400 shadow-xl scale-[1.02]"
                : ""
              }`}
            >
              <div className="absolute top-4 right-4 text-3xl">🇬🇧</div>

              <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
                English
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {t("englishDesc")}
              </p>
            </motion.div>

            {/* Hindi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setLang("hi")}
              className={`cursor-pointer relative bg-white/80 backdrop-blur-xl
              border border-white/40 rounded-3xl shadow-lg p-10 transition-all duration-300
              ${selected === "Hindi"
                ? "ring-4 ring-indigo-400 shadow-xl scale-[1.02]"
                : ""
              }`}
            >
              <div className="absolute top-4 right-4 text-3xl">🇮🇳</div>

              <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
                हिन्दी
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {t("hindiDesc")}
              </p>
            </motion.div>
          </div>

          {/* ===== Continue Button ===== */}
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-14 flex flex-col items-center"
            >
              <Link href="/consent">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-14 py-4 bg-gradient-to-r from-indigo-500 to-blue-500
                  text-white text-lg font-semibold rounded-full shadow-lg"
                >
                  {t("continue")} ➜
                </motion.button>
              </Link>

              <p className="mt-5 text-gray-700">
                {t("selected")}:{" "}
                <span className="font-semibold text-indigo-700">
                  {selected}
                </span>
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer */}
        <p className="absolute bottom-6 text-gray-500 text-sm z-10">
          © 2025 MitrAI | {t("languagefooter")}
        </p>
      </main>
    </>
  );
}
