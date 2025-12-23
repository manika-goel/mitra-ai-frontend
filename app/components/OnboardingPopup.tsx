"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { onboardingQuestions } from "../../data/questions";
import { useRouter } from "next/navigation";

export default function OnboardingPopup() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const currentQ = onboardingQuestions[step];

  const handleNext = () => {
    if (step < onboardingQuestions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      router.push("/auth");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 
    bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 overflow-hidden">

      {/* ===== Background blobs (lighter) ===== */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute w-[380px] h-[380px] bg-blue-300/25 
        rounded-full blur-[90px] top-14 left-16 pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-indigo-300/25 
        rounded-full blur-[100px] bottom-14 right-16 pointer-events-none will-change-transform"
      />

      {/* ===== Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl bg-white/75 backdrop-blur-xl 
        border border-white/50 rounded-[3rem] p-10 md:p-14 shadow-xl text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full"
          >
            <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase mb-4 block">
              Question {step + 1} of {onboardingQuestions.length}
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 leading-tight">
              {currentQ.question}
            </h2>

            <div
              className={`grid ${
                currentQ.type === "emoji" ? "grid-cols-5" : "grid-cols-1"
              } gap-4`}
            >
              {currentQ.options.map((opt: any, i: number) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleNext}
                  className={`relative flex flex-col items-center justify-center 
                  bg-white/85 border border-white/50 shadow-sm 
                  transition-all duration-200 will-change-transform ${
                    currentQ.type === "emoji"
                      ? "p-4 h-24 rounded-3xl"
                      : "py-5 px-8 rounded-2xl text-lg font-semibold text-gray-700"
                  }`}
                >
                  {currentQ.type === "emoji" ? (
                    <>
                      <span className="text-4xl mb-1">{opt.emoji}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">
                        {opt.label}
                      </span>
                    </>
                  ) : (
                    <span>{opt}</span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
