"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { onboardingQuestions } from "../../data/questions";

export default function OnboardingPopup({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const currentQ = onboardingQuestions[step];

  const handleNext = () => {
    if (step < onboardingQuestions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(); // Onboarding khatam hote hi direct Login par
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 overflow-hidden">
      
      {/* Background Floating Bubbles (Match your Information Page) */}
      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] top-10 left-20 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-[140px] bottom-10 right-20 pointer-events-none"
      />

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-10 md:p-16 shadow-2xl text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            className="w-full"
          >
            <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase mb-4 block">
              Question {step + 1} of 3
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 leading-tight">
              {currentQ.question}
            </h2>

            <div className={`grid ${currentQ.type === 'emoji' ? 'grid-cols-5' : 'grid-cols-1'} gap-5`}>
              {currentQ.options.map((opt: any, i: number) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className={`relative flex flex-col items-center justify-center transition-all duration-300 bg-white/80 border border-white/50 shadow-sm hover:shadow-md ${
                    currentQ.type === 'emoji' 
                    ? "p-4 h-24 rounded-3xl" 
                    : "py-5 px-8 rounded-2xl text-lg font-semibold text-gray-700"
                  }`}
                >
                  {currentQ.type === 'emoji' ? (
                    <>
                      <span className="text-4xl mb-1">{opt.emoji}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">{opt.label}</span>
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