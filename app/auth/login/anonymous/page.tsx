// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react"; // Added
// import { useRouter } from "next/navigation"; // Added

// export default function AnonymousLogin() {
//   // 1. States for Input
//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // 2. Anonymous Login Logic
//   const handleLogin = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://127.0.0.1:5000/api/login/anonymous", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ 
//           nickname: nickname, 
//           password: password 
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(`Welcome back, ${data.nickname || "Mitr"}! 🎉`);
//         localStorage.setItem("token", data.token); // Token save kar liya
//         router.push("/dashboard"); // Seedha dashboard/chat par
//       } else {
//         alert("Error: " + (data.error || "Login failed"));
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
//       bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

//       {/* Wavy Background (Keeping Design) */}
//       <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//         <defs>
//           <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
//             <path d="M 0 70 Q 35 40, 70 70 T 140 70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#wavePattern)" />
//       </svg>

//       {/* Floating Blobs */}
//       <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }} className="absolute w-[380px] h-[380px] bg-blue-300/25 rounded-full blur-[100px] top-16 left-16 will-change-transform" />
//       <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute w-[420px] h-[420px] bg-indigo-300/25 rounded-full blur-[120px] bottom-14 right-16 will-change-transform" />

//       {/* Main Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45 }}
//         className="relative z-10 max-w-md w-full bg-white/85 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center"
//       >
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Anonymous Login</h2>

//         {/* 3. Inputs Connected to State */}
//         <input
//           type="text"
//           placeholder="Enter your nickname"
//           value={nickname}
//           onChange={(e) => setNickname(e.target.value)}
//           className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-5 py-4 mb-2 rounded-full border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         {/* Forgot Password */}
//         <div className="w-full text-center mb-6">
//           <Link href="/auth/register/security-question" className="text-indigo-600 text-sm hover:underline">
//             Forgot Password?
//           </Link>
//         </div>

//         {/* Login Button */}
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.96 }}
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all mb-4"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </motion.button>

//         <Link href="/auth" className="text-indigo-600 mt-2 hover:underline">
//           ← Back
//         </Link>
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

export default function AnonymousLogin() {
  const { t } = useLanguage();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/login/anonymous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname: nickname,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${t("welcomeBack")}, ${data.nickname || "Mitr"}! 🎉`);
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        alert(t("loginError"));
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

      {/* Blobs */}
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 16 }} className="absolute w-[380px] h-[380px] bg-blue-300/25 rounded-full blur-[100px] top-16 left-16" />
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 18 }} className="absolute w-[420px] h-[420px] bg-indigo-300/25 rounded-full blur-[120px] bottom-14 right-16" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 max-w-md w-full bg-white/85 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-10"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t("anonLoginTitle")}
        </h2>

        <input
          type="text"
          placeholder={t("nicknamePlaceholder")}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300 text-gray-800"
        />

        <input
          type="password"
          placeholder={t("passwordPlaceholder")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-4 mb-2 rounded-full border border-gray-300 text-gray-800"
        />

        <div className="w-full text-center mb-6">
          <Link href="/auth/register/security-question" className="text-indigo-600 text-sm hover:underline">
            {t("forgotPassword")}
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg mb-4"
        >
          {loading ? t("loggingIn") : t("login")}
        </motion.button>

        <Link href="/auth" className="text-indigo-600 hover:underline">
          ← {t("back")}
        </Link>
      </motion.div>
    </main>
  );
}
