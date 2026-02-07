// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react"; // State management ke liye
// import { useRouter } from "next/navigation"; // Redirect ke liye

// export default function AnonymousLoginPage() {
//   // 1. Form States
//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [securityAnswer, setSecurityAnswer] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // 2. Register Logic
//   const handleAnonymousRegister = async (e: any) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("http://127.0.0.1:5000/api/signup/anonymous", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           nickname: nickname,
//           password: password,
//           confirm_password: confirmPassword,
//           security_question: "Who is the person you trust most?", // Ye fixed question hai
//           security_answer: securityAnswer
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Anonymous Account Created! 🎉 Ab login kijiye.");
//         router.push("/auth/login/anonymous");
//       } else {
//         alert("Error: " + (data.error || "Signup failed"));
//       }
//     } catch (error) {
//       console.error("Connection Error:", error);
//       alert("Backend not connected!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
//     bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

//       {/* Background SVGs and Blobs (Keeping Gatik's design) */}
//       <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//         <defs>
//           <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
//             <path d="M 0 70 Q 35 40, 70 70 T 140 70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#wavePattern)" />
//       </svg>

//       {/* Anonymous Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45 }}
//         className="relative z-10 max-w-md w-full bg-white/85 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-10 flex flex-col items-center"
//       >
//         <motion.h1 className="text-4xl font-bold text-gray-800 mb-4">Stay Anonymous</motion.h1>
//         <p className="text-gray-600 text-sm mb-6">No email. No phone. Just a safe space 💙</p>

//         {/* Inputs */}
//         <input
//           type="text"
//           placeholder="Choose a nickname"
//           value={nickname}
//           onChange={(e) => setNickname(e.target.value)}
//           className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <input
//           type="password"
//           placeholder="Confirm password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         {/* Security Question Input */}
//         <input
//           type="text"
//           placeholder="Who is the person you trust most?"
//           value={securityAnswer}
//           onChange={(e) => setSecurityAnswer(e.target.value)}
//           className="w-full px-5 py-4 mb-6 rounded-full border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.96 }}
//           onClick={handleAnonymousRegister}
//           disabled={loading}
//           className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all mb-6"
//         >
//           {loading ? "Registering..." : "Register"}
//         </motion.button>

//         <p className="text-sm text-gray-500">
//           Already have an account?{" "}
//           <Link href="/auth/login/anonymous" className="text-indigo-600 font-medium hover:underline">
//             Login
//           </Link>
//         </p>
//       </motion.div>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function AnonymousRegisterPage() {
  const { t } = useLanguage();

  // Form States
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Register Logic (UNCHANGED)
  const handleAnonymousRegister = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(t("passwordMismatch12"));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/signup/anonymous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname: nickname,
          password: password,
          confirm_password: confirmPassword,
          security_question: t("securityQuestion12"), // UI text only
          security_answer: securityAnswer,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(t("anonymousSignupSuccess12"));
        router.push("/auth/login/anonymous");
      } else {
        alert(t("error") + (data.error || t("signupFailed12")));
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert(t("backendError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center
      bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

      {/* Background */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <path d="M 0 70 Q 35 40, 70 70 T 140 70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 max-w-md w-full bg-white/85 backdrop-blur-xl
          border border-white/50 rounded-3xl shadow-xl p-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {t("stayAnonymous12")}
        </h1>

        <p className="text-gray-700 text-sm mb-6">
          {t("anonymousSubtitle")}
        </p>

        {/* Inputs */}
        <input
          type="text"
          placeholder={t("nicknamePlaceholder")}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300
            bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder={t("passwordPlaceholder")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300
            bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder={t("confirmPassword")}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300
            bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="text"
          placeholder={t("securityQuestion12")}
          value={securityAnswer}
          onChange={(e) => setSecurityAnswer(e.target.value)}
          className="w-full px-5 py-4 mb-6 rounded-full border border-gray-300
            bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-400"
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleAnonymousRegister}
          disabled={loading}
          className="w-full py-4 bg-indigo-500 hover:bg-indigo-600
            text-white font-semibold rounded-full shadow-lg mb-6"
        >
          {loading ? t("registering") : t("register12")}
        </motion.button>

        <p className="text-sm text-gray-700">
          {t("alreadyAccount12")}{" "}
          <Link href="/auth/login/anonymous" className="text-indigo-600 font-medium hover:underline">
            {t("login")}
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
