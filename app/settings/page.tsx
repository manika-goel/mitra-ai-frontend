// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// export default function SettingsPage() {
//   const router = useRouter();

//   const [reduceMotion, setReduceMotion] = useState(false);
//   const [highContrast, setHighContrast] = useState(false);
//   const [incognito, setIncognito] = useState(false);

//   const [dailyMotivation, setDailyMotivation] = useState(true);
//   const [checkinReminder, setCheckinReminder] = useState(true);
//   const [silentMode, setSilentMode] = useState(false);

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20">
//       {/* ===== SVG STRIPES ===== */}
//       <svg className="absolute inset-0 w-full h-full opacity-30">
//         <defs>
//           <pattern id="wavePattern" width="180" height="180" patternUnits="userSpaceOnUse">
//             <path
//               d="M 0 90 Q 45 50, 90 90 T 180 90"
//               fill="none"
//               stroke="rgba(79,70,229,0.35)"
//               strokeWidth="3"
//             />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#wavePattern)" />
//       </svg>

//       {/* ===== FLOATING BLOBS ===== */}
//       <motion.div
//         animate={{ y: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 14 }}
//         className="absolute w-[420px] h-[420px] bg-blue-300/40 rounded-full blur-[100px] top-16 left-20"
//       />
//       <motion.div
//         animate={{ y: [0, -30, 0] }}
//         transition={{ repeat: Infinity, duration: 16 }}
//         className="absolute w-[520px] h-[520px] bg-indigo-300/40 rounded-full blur-[120px] bottom-12 right-20"
//       />

//       {/* ===== CONTENT ===== */}
//       <div className="relative z-10 max-w-4xl mx-auto space-y-16">
//         {/* HEADER */}
//         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Settings</h1>
//           <p className="text-gray-800">You’re in control. Change anything anytime.</p>
//         </motion.div>

//         <Section title="Profile & Privacy" desc="Your identity, your control">
//           <Item label="Name">
//             <input
//               className="input text-gray-900 placeholder:text-gray-600 border rounded px-3 py-2"
//               placeholder="Enter your name"
//             />
//           </Item>

//           <Item label="Email">
//             <input
//               className="input text-gray-900 placeholder:text-gray-600 border rounded px-3 py-2"
//               placeholder="Email address"
//             />
//           </Item>

//           <Item label="Password">
//             <button className="btn-secondary px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
//               Change Password
//             </button>
//           </Item>

//           <Toggle
//             label="Incognito Mode"
//             desc="Chats won’t be stored"
//             checked={incognito}
//             setChecked={setIncognito}
//           />
//         </Section>

//         <Section title="Appearance & Comfort" desc="Made for mental ease">
//           <Item label="Theme">
//             <select className="select text-gray-900 border rounded px-3 py-2">
//               <option>Light</option>
//               <option>Dull</option>
//               <option>Dark</option>
//               <option>Neon</option>
//             </select>
//           </Item>

//           <Toggle
//             label="Reduce Motion"
//             desc="Less animation, less anxiety"
//             checked={reduceMotion}
//             setChecked={setReduceMotion}
//           />

//           <Toggle
//             label="High Contrast"
//             desc="Improves readability"
//             checked={highContrast}
//             setChecked={setHighContrast}
//           />
//         </Section>

//         <Section title="Notifications" desc="Stay informed, not stressed">
//           <Toggle label="Daily Motivation" checked={dailyMotivation} setChecked={setDailyMotivation} />
//           <Toggle label="Check-in Reminders" checked={checkinReminder} setChecked={setCheckinReminder} />
//           <Toggle label="Silent Mode" desc="No notifications" checked={silentMode} setChecked={setSilentMode} />
//         </Section>

//         <Section title="Support & Safety" desc="Help is always available">
//           <button
//             onClick={() => router.push("/settings/support")}
//             className="text-indigo-700 font-semibold hover:underline"
//           >
//             Chat with our Agent →
//           </button>

//           <div className="bg-red-100 border border-red-300 rounded-xl p-4 text-gray-900">
//             <p className="font-semibold text-red-700 mb-1">Emergency Support (India)</p>
//             <p>Kiran: 1800-599-0019</p>
//             <p>AASRA: +91-22-27546669</p>
//           </div>
//         </Section>

//         {/* LOGOUT */}
//         <motion.div whileHover={{ scale: 1.05 }} className="pt-10 flex justify-center">
//           <button
//             onClick={() => router.push("/auth")}
//             className="btn-danger px-6 py-2 rounded bg-red-600 text-white hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </motion.div>
//       </div>
//     </main>
//   );
// }

// /* ================= COMPONENTS ================= */

// function Section({ title, desc, children }: any) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       transition={{ type: "spring", stiffness: 120 }}
//       className="bg-white/90 backdrop-blur-xl border border-black/10 rounded-3xl p-8 shadow-lg space-y-6"
//     >
//       <div>
//         <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
//         <p className="text-gray-700 text-sm mt-1">{desc}</p>
//       </div>
//       {children}
//     </motion.div>
//   );
// }

// function Item({ label, children }: any) {
//   return (
//     <div className="flex justify-between items-center gap-6">
//       <span className="text-gray-900 font-medium">{label}</span>
//       {children}
//     </div>
//   );
// }

// function Toggle({ label, desc, checked, setChecked }: any) {
//   return (
//     <div className="flex justify-between items-center gap-4">
//       <div>
//         <p className="font-medium text-gray-900">{label}</p>
//         {desc && <p className="text-gray-700 text-sm">{desc}</p>}
//       </div>
//       <button
//         onClick={() => setChecked(!checked)}
//         className={`w-12 h-6 rounded-full transition ${checked ? "bg-indigo-600" : "bg-gray-400"}`}
//       >
//         <div
//           className={`w-5 h-5 bg-white rounded-full transition-transform ${
//             checked ? "translate-x-6" : "translate-x-1"
//           }`}
//         />
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function SettingsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [incognito, setIncognito] = useState(false);

  const [dailyMotivation, setDailyMotivation] = useState(true);
  const [checkinReminder, setCheckinReminder] = useState(true);
  const [silentMode, setSilentMode] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20">

      {/* SVG BACKGROUND */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <pattern id="wavePattern" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M 0 90 Q 45 50, 90 90 T 180 90"
              fill="none"
              stroke="rgba(79,70,229,0.35)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* FLOATING BLURS */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute w-[420px] h-[420px] bg-blue-300/40 rounded-full blur-[100px] top-16 left-20"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 16 }}
        className="absolute w-[520px] h-[520px] bg-indigo-300/40 rounded-full blur-[120px] bottom-12 right-20"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            {t("settingsTitle")}
          </h1>
          <p className="text-gray-800">
            {t("settingsSubtitle")}
          </p>
        </motion.div>

        {/* PROFILE */}
        <Section title={t("profileTitle")} desc={t("profileDesc")}>
          <Item label={t("nameLabel")}>
            <input
              className="border rounded px-3 py-2 text-gray-900 placeholder:text-gray-600"
              placeholder={t("namePlaceholder")}
            />
          </Item>

          <Item label={t("emailLabel")}>
            <input
              className="border rounded px-3 py-2 text-gray-900 placeholder:text-gray-600"
              placeholder={t("emailPlaceholder")}
            />
          </Item>

          <Item label={t("passwordLabel")}>
            <button className="px-4 py-2 rounded bg-indigo-600 text-white">
              {t("changePassword")}
            </button>
          </Item>

          <Toggle
            label={t("incognito")}
            desc={t("incognitoDesc")}
            checked={incognito}
            setChecked={setIncognito}
          />
        </Section>

        {/* APPEARANCE */}
        <Section title={t("appearanceTitle")} desc={t("appearanceDesc")}>
          <Item label={t("theme")}>
            <select className="border rounded px-3 py-2 text-gray-900">
              <option>{t("themeLight")}</option>
              <option>{t("themeDull")}</option>
              <option>{t("themeDark")}</option>
              <option>{t("themeNeon")}</option>
            </select>
          </Item>

          <Toggle
            label={t("reduceMotion")}
            desc={t("reduceMotionDesc")}
            checked={reduceMotion}
            setChecked={setReduceMotion}
          />

          <Toggle
            label={t("highContrast")}
            desc={t("highContrastDesc")}
            checked={highContrast}
            setChecked={setHighContrast}
          />
        </Section>

        {/* NOTIFICATIONS */}
        <Section title={t("notificationsTitle")} desc={t("notificationsDesc")}>
          <Toggle
            label={t("dailyMotivation")}
            checked={dailyMotivation}
            setChecked={setDailyMotivation}
          />
          <Toggle
            label={t("checkinReminder")}
            checked={checkinReminder}
            setChecked={setCheckinReminder}
          />
          <Toggle
            label={t("silentMode")}
            desc={t("silentModeDesc")}
            checked={silentMode}
            setChecked={setSilentMode}
          />
        </Section>

        {/* SUPPORT */}
        <Section title={t("supportTitle")} desc={t("supportDesc")}>
          <button
            onClick={() => router.push("/settings/support")}
            className="text-indigo-700 font-semibold hover:underline"
          >
            {t("contactSupport")} →
          </button>

          <div className="bg-red-100 border border-red-300 rounded-xl p-4 text-gray-900">
            <p className="font-semibold text-red-700">{t("emergencyIndia")}</p>
            <p>Kiran: 1800-599-0019</p>
            <p>AASRA: +91-22-27546669</p>
          </div>
        </Section>

        {/* LOGOUT */}
        <motion.div whileHover={{ scale: 1.05 }} className="pt-10 flex justify-center">
          <button
            onClick={() => router.push("/auth")}
            className="px-6 py-2 rounded bg-red-600 text-white"
          >
            {t("logout")}
          </button>
        </motion.div>
      </div>
    </main>
  );
}

/* COMPONENTS */

function Section({ title, desc, children }: any) {
  return (
    <motion.div className="bg-white/90 rounded-3xl p-8 shadow-lg space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-800">{desc}</p>
      </div>
      {children}
    </motion.div>
  );
}

function Item({ label, children }: any) {
  return (
    <div className="flex justify-between items-center gap-6">
      <span className="font-medium text-gray-900">{label}</span>
      {children}
    </div>
  );
}

function Toggle({ label, desc, checked, setChecked }: any) {
  return (
    <div className="flex justify-between items-center gap-4">
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        {desc && <p className="text-sm text-gray-800">{desc}</p>}
      </div>

      <button
        onClick={() => setChecked(!checked)}
        className={`w-12 h-6 rounded-full transition ${
          checked ? "bg-indigo-600" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
