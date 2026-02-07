// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { onboardingQuestions } from "../../data/questions";

// export default function OnboardingPage() {
//   const [step, setStep] = useState(0);
//   const [responses, setResponses] = useState<any[]>([]);
//   const router = useRouter();
//   const currentQ = onboardingQuestions[step];

//   const handleNext = (selectedOption: any) => {
//     // Current answer ko list mein add karein
//     const newResponses = [...responses, { 
//       question: currentQ.question, 
//       answer: selectedOption 
//     }];
//     setResponses(newResponses);

//     if (step < onboardingQuestions.length - 1) {
//       setStep(step + 1);
//     } else {
//       // Questions khatam hone ke baad hi Login aana chahiye
//       saveInitialQuiz(newResponses);
//       router.push("/auth"); 
//     }
//   };

//   // Backend API Call
//   const saveInitialQuiz = async (data: any[]) => {
//     await fetch("http://localhost:5000/api/mood/initial-quiz", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ answers: data })
//     });
//   };

//   return (
//     <main className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 overflow-hidden">
//       <div className="relative z-10 w-full max-w-2xl bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-10 shadow-2xl text-center">
//         <AnimatePresence mode="wait">
//           <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
//             <h2 className="text-3xl font-extrabold text-gray-800 mb-10">{currentQ.question}</h2>
//             <div className={`grid ${currentQ.type === 'emoji' ? 'grid-cols-5' : 'grid-cols-1'} gap-4`}>
//               {currentQ.options.map((opt: any, i: number) => (
//                 <button 
//                   key={i} 
//                   onClick={() => handleNext(opt.label || opt)}
//                   className="p-4 bg-white/80 border border-white/50 rounded-2xl shadow-sm hover:scale-105 transition-all"
//                 >
//                   {currentQ.type === 'emoji' ? (
//                     <div className="flex flex-col"><span className="text-3xl">{opt.emoji}</span><span className="text-[10px] uppercase font-bold text-gray-400">{opt.label}</span></div>
//                   ) : opt}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { onboardingQuestions } from "../../data/questions";
import { useLanguage } from "@/context/LanguageContext";

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<any[]>([]);
  const router = useRouter();

  // ✅ CORRECT VARIABLE FROM CONTEXT
  const { lang } = useLanguage();

  const questions =
    lang === "hi"
      ? onboardingQuestions.hi
      : onboardingQuestions.en;

  const currentQ = questions[step];

  const handleNext = (selectedOption: any) => {
    const newResponses = [
      ...responses,
      {
        question: currentQ.question,
        answer: selectedOption,
      },
    ];
    setResponses(newResponses);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      saveInitialQuiz(newResponses);
      router.push("/auth");
    }
  };

  // 🔒 BACKEND — UNCHANGED
  const saveInitialQuiz = async (data: any[]) => {
    await fetch("http://localhost:5000/api/mood/initial-quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: data }),
    });
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-2xl bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-10 shadow-2xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-800 mb-10">
              {currentQ.question}
            </h2>

            <div
              className={`grid ${
                currentQ.type === "emoji"
                  ? "grid-cols-5"
                  : "grid-cols-1"
              } gap-4`}
            >
              {currentQ.options.map((opt: any, i: number) => (
                <button
                  key={i}
                  onClick={() => handleNext(opt.label)}
                  className="p-4 bg-white/80 border border-white/50 rounded-2xl shadow-sm hover:scale-105 transition-all"
                >
                  {currentQ.type === "emoji" ? (
                    <div className="flex flex-col">
                      <span className="text-3xl">{opt.emoji}</span>
                      <span className="text-[10px] uppercase font-bold text-gray-400">
                        {opt.label}
                      </span>
                    </div>
                 ) : (
  <span className="font-bold text-gray-800">
    {opt.label}
  </span>
)}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
