// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Info, Heart } from "lucide-react";
// import { useRouter } from "next/navigation";

// // Mock Data: Isko baad mein backend se connect karenge
// const moodHistory = {
//   "2026-01-01": { mood: "Happy", score: 90, color: "#6366F1" },
//   "2026-01-02": { mood: "Sad", score: 30, color: "#94A3B8" },
//   "2026-01-03": { mood: "Excited", score: 95, color: "#F59E0B" },
//   "2026-01-04": { mood: "Happy", score: 85, color: "#6366F1" },
// };

// export default function MoodHistory() {
//   const router = useRouter();
//   const [currentDate, setCurrentDate] = useState(new Date());

//   // Calendar Logic
//   const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
//   const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
//   const monthName = currentDate.toLocaleString('default', { month: 'long' });
//   const year = currentDate.getFullYear();

//   const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//   const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

//   return (
//     <main className="min-h-screen bg-[#F8FAFF] px-6 py-8 overflow-y-auto">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Header */}
//         <header className="flex items-center justify-between mb-10">
//           <button onClick={() => router.push("/mood")} className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-slate-100">
//             <ArrowLeft size={20} />
//           </button>
//           {/* UPDATED TITLE HERE */}
//           <h1 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">
//             Mood <span className="text-indigo-600">Calendar</span>
//           </h1>
//           <div className="w-10" />
//         </header>

//         {/* Calendar Card */}
//         <div className="bg-white rounded-[3rem] p-8 shadow-xl shadow-indigo-100/50 border border-white relative overflow-hidden">
          
//           {/* Calendar Controls */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
//                 <CalendarIcon size={20} />
//               </div>
//               <h2 className="text-xl font-black text-slate-800 tracking-tight">{monthName} <span className="text-indigo-600">{year}</span></h2>
//             </div>
            
//             <div className="flex gap-2">
//               <button className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 text-slate-400 transition-all"><ChevronLeft size={20}/></button>
//               <button className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 text-slate-400 transition-all"><ChevronRight size={20}/></button>
//             </div>
//           </div>

//           {/* Weekdays Header */}
//           <div className="grid grid-cols-7 mb-4 text-center">
//             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//               <span key={day} className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{day}</span>
//             ))}
//           </div>

//           {/* Days Grid */}
//           <div className="grid grid-cols-7 gap-3">
//             {blanks.map(b => <div key={`blank-${b}`} />)}
//             {days.map(day => {
//               const dateStr = `${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//               const data = moodHistory[dateStr as keyof typeof moodHistory];
              
//               return (
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   key={day} 
//                   className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative cursor-pointer group transition-all
//                     ${data ? 'bg-white shadow-md border-2' : 'bg-slate-50 border border-slate-100 hover:border-indigo-200'}
//                   `}
//                   style={{ borderColor: data ? data.color : '' }}
//                 >
//                   <span className={`text-xs font-bold ${data ? 'text-slate-800' : 'text-slate-400'}`}>{day}</span>
                  
//                   {/* Mini Indicator if Mood exists */}
//                   {data && (
//                     <div className="mt-1">
//                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.color }} />
//                     </div>
//                   )}

//                   {/* Tooltip on Hover */}
//                   {data && (
//                     <div className="absolute bottom-full mb-2 hidden group-hover:block z-20 w-32 bg-slate-900 text-white p-2 rounded-xl text-center shadow-2xl">
//                        <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Mood</p>
//                        <p className="text-xs font-bold">{data.mood} ({data.score}%)</p>
//                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Stats Summary Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//            <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
//               <div className="relative z-10">
//                  <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-2">Monthly Pattern</p>
//                  <p className="text-lg font-bold italic leading-tight">Bhai, you were most <br/> productive on Wednesdays! 🚀</p>
//               </div>
//               <Info className="absolute right-[-10px] bottom-[-10px] w-24 h-24 text-white/10" />
//            </div>

//            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-white flex items-center gap-5">
//               <div className="p-4 bg-rose-50 text-rose-500 rounded-3xl animate-pulse">
//                 <Heart fill="currentColor" size={24} />
//               </div>
//               <div>
//                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Consistency</p>
//                 <p className="text-xl font-black text-slate-800 italic">12 Day Streak</p>
//               </div>
//            </div>
//         </div>

//       </div>
//     </main>
//   );
// }


"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Info,
  Heart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Mock Data (UNCHANGED)
const moodHistory = {
  "2026-01-01": { mood: "Happy", score: 90, color: "#6366F1" },
  "2026-01-02": { mood: "Sad", score: 30, color: "#94A3B8" },
  "2026-01-03": { mood: "Excited", score: 95, color: "#F59E0B" },
  "2026-01-04": { mood: "Happy", score: 85, color: "#6366F1" },
};

export default function MoodHistory() {
  const router = useRouter();
  const { t } = useLanguage();
  const [currentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <main className="min-h-screen bg-[#F8FAFF] px-6 py-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <button
            onClick={() => router.push("/mood")}
            className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-slate-100"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">
            {t("mood12")}{" "}
            <span className="text-indigo-600">{t("calendar12")}</span>
          </h1>

          <div className="w-10" />
        </header>

        {/* Calendar Card */}
        <div className="bg-white rounded-[3rem] p-8 shadow-xl shadow-indigo-100/50 border border-white">

          {/* Calendar Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
                <CalendarIcon size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-800 tracking-tight">
                {monthName} <span className="text-indigo-600">{year}</span>
              </h2>
            </div>

            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 text-slate-400">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 text-slate-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 mb-4 text-center">
            {[
              t("sun"),
              t("mon"),
              t("tue"),
              t("wed"),
              t("thu"),
              t("fri"),
              t("sat"),
            ].map((day) => (
              <span
                key={day}
                className="text-[10px] font-black text-slate-300 uppercase tracking-widest"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-3">
            {blanks.map((b) => (
              <div key={`blank-${b}`} />
            ))}

            {days.map((day) => {
              const dateStr = `${year}-${String(
                currentDate.getMonth() + 1
              ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const data =
                moodHistory[dateStr as keyof typeof moodHistory];

              return (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={day}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative cursor-pointer
                    ${
                      data
                        ? "bg-white shadow-md border-2"
                        : "bg-slate-50 border border-slate-100 hover:border-indigo-200"
                    }`}
                  style={{ borderColor: data ? data.color : "" }}
                >
                  <span
                    className={`text-xs font-bold ${
                      data ? "text-slate-800" : "text-slate-400"
                    }`}
                  >
                    {day}
                  </span>

                  {data && (
                    <div className="mt-1">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: data.color }}
                      />
                    </div>
                  )}

                  {data && (
                    <div className="absolute bottom-full mb-2 hidden group-hover:block z-20 w-32 bg-slate-900 text-white p-2 rounded-xl text-center shadow-2xl">
                      <p className="text-[8px] font-black uppercase tracking-widest opacity-60">
                        {t("mood12")}
                      </p>
                      <p className="text-xs font-bold">
                        {data.mood} ({data.score}%)
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-2">
              {t("monthlyPattern")}
            </p>
            <p className="text-lg font-bold italic">
              {t("productivityInsight")}
            </p>
            <Info className="absolute right-[-10px] bottom-[-10px] w-24 h-24 text-white/10" />
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-white flex items-center gap-5">
            <div className="p-4 bg-rose-50 text-rose-500 rounded-3xl">
              <Heart fill="currentColor" size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                {t("consistency")}
              </p>
              <p className="text-xl font-black text-slate-800 italic">
                {t("streak")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
