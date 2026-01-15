"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ArrowLeft, Activity, Sparkles, Zap, Heart, Info, Target, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MoodTracker() {
  const router = useRouter();
  
  const [detectedMood, setDetectedMood] = useState("Steady");
  const [energyScore, setEnergyScore] = useState(0); // Default 0
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/mood/analytics");
        const data = await response.json();
        
        // 1. Mood Mapping
        const moodMap: any = { happy: "Excited", stressed: "Sad", neutral: "Steady" };
        setDetectedMood(moodMap[data.avatar_state] || "Steady");
        
        // 2. Energy Score Fix (NaN se bachne ke liye Number() use kiya)
        const intensity = Number(data.latest_intensity) || 0;
        setEnergyScore(intensity * 20);
        
        // 3. Graph Data Fix
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
        
        <header className="flex items-center justify-between mb-6">
          <button onClick={() => router.push("/dashboard")} className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-white hover:scale-105 transition-transform">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-black text-slate-800 italic">Mood <span className="text-indigo-600">Sync</span></h1>
          <button className="p-3 bg-white rounded-2xl shadow-sm border border-white text-slate-400">
            <MoreHorizontal size={20} />
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
          
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-xl flex flex-col items-center relative">
            <div className="w-full flex justify-between items-center mb-4">
              <div className="flex gap-3 text-slate-300">
                  <Zap size={18} className="hover:text-yellow-400 transition-colors cursor-pointer" />
                  <Heart size={18} className="hover:text-rose-400 transition-colors cursor-pointer" />
                  <Info size={18} className="hover:text-indigo-400 transition-colors cursor-pointer" />
              </div>
              <span className="text-[9px] font-black uppercase bg-indigo-50 px-2 py-0.5 rounded text-indigo-500 tracking-tighter">AI Connected</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <motion.div animate={{ y: config.bounce }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="relative">
                <svg width="130" height="180" viewBox="0 0 200 300">
                  <rect x="70" y="110" width="60" height="110" rx="30" fill={config.color} />
                  <circle cx="100" cy="70" r="40" fill={config.headColor} />
                  <circle cx="85" cy="65" r="3" fill="white" />
                  <circle cx="115" cy="65" r="3" fill="white" />
                  <path d={config.mouth} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <rect x="78" y="215" width="14" height="40" rx="7" fill={config.color} opacity={0.6} />
                  <rect x="108" y="215" width="14" height="40" rx="7" fill={config.color} opacity={0.6} />
                </svg>
                <div className="w-16 h-2 bg-slate-900/5 rounded-full blur-md mx-auto mt-2" />
              </motion.div>
            </div>

            <div className="w-full text-center mt-4">
              <h2 className="text-3xl font-black text-slate-800">{detectedMood}</h2>
              <div className="mt-4 p-4 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 flex items-center gap-3 text-left">
                <div className="p-2 bg-indigo-600 rounded-xl text-white"><Target size={16} /></div>
                <div>
                    <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Suggested Activity</p>
                    <p className="text-[11px] font-bold text-slate-700 italic">{config.activity}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-sm flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 italic">Emotional Flow <Activity size={18} className="text-indigo-600" /></h3>
                
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-50 shadow-sm">
                  <div className="w-10 h-5 border-2 border-slate-200 rounded p-[1px] relative">
                      <motion.div animate={{ width: `${energyScore}%` }} className={`h-full rounded-[1px] ${energyScore < 40 ? 'bg-rose-500' : 'bg-emerald-400'}`} />
                      <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-1 h-2 bg-slate-200 rounded-r-sm" />
                  </div>
                  <span className="text-xs font-black text-indigo-900 italic">{energyScore}% Energy</span>
                </div>
              </div>

              <div className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  {/* Important: Saare child components AreaChart ke andar hi hone chahiye */}
                  <AreaChart key={JSON.stringify(moodHistory)} data={moodHistory}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 800}} 
                    />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip 
                      cursor={{ stroke: '#6366F1', strokeWidth: 2 }} 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const currentScore = payload[0].value;
                          const currentDay = payload[0].payload.day;
                          return (
                            <div className="bg-white p-3 rounded-2xl shadow-xl border border-indigo-50 min-w-[100px]">
                              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">{currentDay}</p>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${Number(currentScore) > 50 ? 'bg-indigo-600' : 'bg-rose-500'}`} />
                                <p className="text-lg font-black text-slate-800 italic">
                                  Score: <span className="text-indigo-600">{currentScore}</span>
                                </p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#6366F1" 
                      strokeWidth={6} 
                      fill="url(#colorScore)" 
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-600 p-6 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden shadow-lg group">
                  <p className="text-[8px] font-black uppercase opacity-60 mb-1 tracking-widest">Weekly Insight</p>
                  <p className="text-lg font-bold italic">Your vibe is consistent <br/> with your goals! 📈</p>
                  <Sparkles className="absolute right-0 bottom-0 w-20 h-20 text-white/10" />
              </div>
              <div className="bg-white p-6 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-4">
                  <div className="p-4 bg-rose-50 text-rose-500 rounded-2xl"><Heart fill="currentColor" size={20} /></div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Overall Health</p>
                    <p className="text-lg font-black text-slate-800 italic">{energyScore > 50 ? "Very Good" : "Keep Improving"}</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}