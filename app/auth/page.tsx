// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function LoginPage() {
//   return (
//     <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
//     bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

//       {/* Wavy Background (static) */}
//       <svg
//         className="absolute inset-0 w-full h-full opacity-30"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <pattern
//             id="wavePattern"
//             x="0"
//             y="0"
//             width="140"
//             height="140"
//             patternUnits="userSpaceOnUse"
//           >
//             <path
//               d="M 0 70 Q 35 40, 70 70 T 140 70"
//               fill="none"
//               stroke="rgba(59,130,246,0.3)"
//               strokeWidth="3"
//             />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#wavePattern)" />
//       </svg>

//       {/* Floating Blobs (lighter & slower) */}
//       <motion.div
//         animate={{ y: [0, 25, 0] }}
//         transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
//         className="absolute w-[420px] h-[420px] bg-blue-300/30 
//         rounded-full blur-[100px] top-16 left-16 will-change-transform"
//       />
//       <motion.div
//         animate={{ y: [0, -25, 0] }}
//         transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
//         className="absolute w-[520px] h-[520px] bg-indigo-300/25 
//         rounded-full blur-[120px] bottom-12 right-16 will-change-transform"
//       />

//       {/* Cards Wrapper */}
//       <div className="relative z-10 flex flex-col lg:flex-row gap-12 w-full max-w-5xl">

//         {/* Login Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full bg-white/90 backdrop-blur-xl border border-white/60 
//           rounded-3xl shadow-xl px-12 py-14 flex flex-col items-center"
//         >
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
//             Login
//           </h1>

//           <div className="flex flex-col gap-7 w-full">
//             <Link href="/auth/login/anonymous">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="w-full min-h-[64px]
//                 bg-[#615FFF] hover:bg-[#514DFF]
//                 text-white text-lg font-semibold
//                 rounded-full shadow-lg transition-all"
//               >
//                 Login as Anonymous
//               </motion.button>
//             </Link>

//             <Link href="/auth/login/email">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="w-full min-h-[64px]
//                 bg-[#2B7FFF] hover:bg-[#1F6FFF]
//                 text-white text-lg font-semibold
//                 rounded-full shadow-lg transition-all"
//               >
//                 Login with Email
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Register Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="w-full bg-white/90 backdrop-blur-xl border border-white/60 
//           rounded-3xl shadow-xl px-12 py-14 flex flex-col items-center"
//         >
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
//             Register
//           </h1>

//           <div className="flex flex-col gap-7 w-full">
//             <Link href="/auth/register/email">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="w-full min-h-[64px]
//                 bg-[#2B7FFF] hover:bg-[#1F6FFF]
//                 text-white text-lg font-semibold
//                 rounded-full shadow-lg transition-all"
//               >
//                 Register with Email
//               </motion.button>
//             </Link>

//             <Link href="/auth/register/anonymous">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="w-full min-h-[64px]
//                 bg-[#615FFF] hover:bg-[#514DFF]
//                 text-white text-lg font-semibold
//                 rounded-full shadow-lg transition-all"
//               >
//                 Register as Anonymous
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <p className="absolute bottom-6 text-gray-600 text-sm z-10">
//         © 2025 MitrAI | Your Emotional Wellbeing Partner 💙
//       </p>
//     </main>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext"; // Correct path to your LanguageContext

export default function AuthPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
      bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

      {/* Wavy Background */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <path d="M 0 70 Q 35 40, 70 70 T 140 70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* Floating Blobs */}
      <motion.div animate={{ y: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] bg-blue-300/30 rounded-full blur-[100px] top-16 left-16" />
      <motion.div animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute w-[520px] h-[520px] bg-indigo-300/25 rounded-full blur-[120px] bottom-12 right-16" />

      {/* Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 w-full max-w-5xl">

        {/* Login Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl px-12 py-14 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-10">{t("login")}</h1>
          <div className="flex flex-col gap-7 w-full">
            <Link href="/auth/login/anonymous">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                className="w-full min-h-[64px] bg-[#615FFF] hover:bg-[#514DFF] text-white text-lg font-semibold rounded-full shadow-lg">
                {t("loginAnon")}
              </motion.button>
            </Link>
            <Link href="/auth/login/email">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                className="w-full min-h-[64px] bg-[#2B7FFF] hover:bg-[#1F6FFF] text-white text-lg font-semibold rounded-full shadow-lg">
                {t("loginEmail")}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Register Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl px-12 py-14 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-10">{t("register")}</h1>
          <div className="flex flex-col gap-7 w-full">
            <Link href="/auth/register/email">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                className="w-full min-h-[64px] bg-[#2B7FFF] hover:bg-[#1F6FFF] text-white text-lg font-semibold rounded-full shadow-lg">
                {t("registerEmail")}
              </motion.button>
            </Link>
            <Link href="/auth/register/anonymous">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                className="w-full min-h-[64px] bg-[#615FFF] hover:bg-[#514DFF] text-white text-lg font-semibold rounded-full shadow-lg">
                {t("registerAnon")}
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-600 text-sm z-10">{t("authfooter")}</p>
    </main>
  );
}
