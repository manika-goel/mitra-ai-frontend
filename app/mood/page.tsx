"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ArrowLeft, Activity, Sparkles, Zap, Heart, Info, Target, MoreHorizontal, Calendar as CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MoodTracker() {
  const router = useRouter();
  
  const [detectedMood, setDetectedMood] = useState("Steady");
  const [energyScore, setEnergyScore] = useState(0); 
  const [moodHistory, setMoodHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/mood/analytics");
        const data = await response.json();
        
        const moodMap: { [key: string]: string } = { 
          happy: "Excited", 
          stressed: "Sad", 
          neutral: "Steady" 
        };
        setDetectedMood(moodMap[data.avatar_state] || "Steady");
        
        const intensity = Number(data.latest_intensity) || 0;
        setEnergyScore(intensity * 20);
        
        const formattedHistory = (data.chart_data || []).map((item: any) => ({
          day: item.day,
          score: Number(item.mood) * 20 
        }));
        setMoodHistory(formattedHistory);
      } catch (err) {
        console.error("Failed to sync with MitrAI Backend:", err);
      }
    };
    fetchMoodData();
  }, []);

  const getAvatarConfig = () => {
    switch (detectedMood) {
      case "Excited":
        return { color: "#6366F1", mouth: "M 80 85 Q 100 115 120 85", bounce: [-15, 0], headColor: "#A5B4FC", activity: "High Energy: Go for a Sprint! 🏃‍♂️" };
      case "Sad":
        return { color: "#94A3B8", mouth: "M 85 95 Q 100 85 115 95", bounce: [0, 5, 0], headColor: "#CBD5E1", activity: "Low Vibe: Listen to Calm Music 🎧" };
      default:
        return { color: "#6366F1", mouth: "M 85 85 Q 100 100 115 85", bounce: [0, -10, 0], headColor: "#A5B4FC", activity: "Steady: Quick Meditation 🧘‍♂️" };
    }
  };

  const config = getAvatarConfig();

  return (
    <main className="h-screen bg-[#F4F7FF] px-6 py-4 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col h-full">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <button onClick={() => router.push("/dashboard")} className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-white hover:scale-105 transition-transform">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-black text-slate-800 italic uppercase">Mood <span className="text-indigo-600">Sync</span></h1>
          <button className="p-3 bg-white rounded-2xl shadow-sm border border-white text-slate-400">
            <MoreHorizontal size={20} />
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0 mb-4">
          
          {/* Avatar Panel */}
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-xl flex flex-col items-center relative">
            <div className="w-full flex justify-between items-center mb-4">
              <div className="flex gap-3 text-slate-300">
                  <Zap size={18} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                  <Heart size={18} className="hover:text-rose-400 cursor-pointer transition-colors" />
                  <Info size={18} className="hover:text-indigo-400 cursor-pointer transition-colors" />
              </div>
              <span className="text-[9px] font-black uppercase bg-indigo-50 px-2 py-0.5 rounded text-indigo-500">AI Connected</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <motion.div animate={{ y: config.bounce }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}>
                <svg width="130" height="180" viewBox="0 0 200 300">
                  <rect x="70" y="110" width="60" height="110" rx="30" fill={config.color} />
                  <circle cx="100" cy="70" r="40" fill={config.headColor} />
                  <circle cx="85" cy="65" r="3" fill="white" />
                  <circle cx="115" cy="65" r="3" fill="white" />
                  <path d={config.mouth} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <rect x="78" y="215" width="14" height="40" rx="7" fill={config.color} opacity={0.6} />
                  <rect x="108" y="215" width="14" height="40" rx="7" fill={config.color} opacity={0.6} />
                </svg>
              </motion.div>
            </div>

            <div className="w-full text-center mt-4">
              <h2 className="text-3xl font-black text-slate-800">{detectedMood}</h2>
              <div className="mt-4 p-4 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 flex items-center gap-3 text-left">
                <div className="p-2 bg-indigo-600 rounded-xl text-white"><Target size={16} /></div>
                <div>
                    <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Activity</p>
                    <p className="text-[11px] font-bold text-slate-700 italic">{config.activity}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graph & Bottom Bar */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-sm flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 italic">Emotional Flow <Activity size={18} className="text-indigo-600" /></h3>
              </div>

              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={moodHistory}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 800}} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 rounded-2xl shadow-xl border border-indigo-50">
                              <p className="text-lg font-black text-indigo-600 italic">Score: {payload[0].value}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area type="monotone" dataKey="score" stroke="#6366F1" strokeWidth={6} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Row - "Calendar" Label on Far Right */}
            <div className="flex items-stretch gap-4 h-32">
              <div className="flex-[1.5] bg-indigo-600 p-6 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden shadow-lg">
                  <p className="text-[8px] font-black uppercase opacity-60 mb-1 tracking-widest">Weekly Insight</p>
                  <p className="text-lg font-bold italic">Your vibe is consistent! 📈</p>
                  <Sparkles className="absolute right-0 bottom-0 w-16 h-16 text-white/10" />
              </div>

              <div className="flex-1 bg-white p-6 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-4">
                  <div className="p-4 bg-rose-50 text-rose-500 rounded-2xl shrink-0"><Heart fill="currentColor" size={20} /></div>
                  <div className="min-w-0">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Health</p>
                    <p className="text-lg font-black text-slate-800 italic truncate">{energyScore > 50 ? "Good" : "Wait"}</p>
                  </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "#6366F1", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/calendar")}
                className="w-24 shrink-0 bg-white rounded-[2.5rem] border border-white shadow-xl flex flex-col items-center justify-center text-indigo-600 group transition-all duration-300"
              >
                  <CalendarIcon size={28} className="group-hover:rotate-12 transition-transform" />
                  {/* Changed "History" to "Calendar" below */}
                  <span className="text-[8px] font-black uppercase mt-1">Calendar</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}