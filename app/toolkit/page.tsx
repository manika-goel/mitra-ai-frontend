// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   PlayCircle, Palette, BookOpen, ArrowLeft, ChevronRight, X, Heart, 
//   Laugh, Ghost, Lightbulb, Wind, Zap, Focus, PenTool, Smile, Brain 
// } from "lucide-react";
// import Navbar from "@/components/Navbar";

// // Content Data Pool
// const allData: any = {
//   videos: [
//     { id: 1, title: "Quick Calm", url: "https://www.youtube.com/embed/inpok4MKVLM", color: "from-blue-400 to-cyan-500", sub: "Anxiety Relief" },
//     { id: 2, title: "5 Min Mindfulness", url: "https://www.youtube.com/embed/ZToicY62f1U", color: "from-yellow-400 to-orange-500", sub: "Quick Boost" },
//     { id: 3, title: "Deep Focus Lo-Fi", url: "https://www.youtube.com/embed/jfKfPfyJRdk", color: "from-indigo-400 to-purple-500", sub: "Study/Work" },
//     { id: 4, title: "Nature Sounds", url: "https://www.youtube.com/embed/mPhHLeC_S0M", color: "from-green-400 to-emerald-500", sub: "Morning Energy" },
//   ],
//   activities: [
//     { id: 8, title: "Zen Doodle Pad", actId: "doodle", icon: <Palette />, color: "from-pink-400 to-rose-500", sub: "Draw your stress away" },
//     { id: 9, title: "Breathing Guide", actId: "breath", icon: <Wind />, color: "from-blue-400 to-indigo-500", sub: "Relax with rhythm" },
//     { id: 12, title: "Gratitude Journal", actId: "journal", icon: <PenTool />, color: "from-amber-400 to-orange-500", sub: "Focus on Good" },
//     { id: 13, title: "Self-Affirmations", actId: "affirm", icon: <Smile />, color: "from-teal-400 to-blue-500", sub: "Positive Mind" },
//   ],
//   stories: {
//     romance: [{ id: 101, title: "The Rain & Coffee", content: "They met at a cafe...", sub: "Sweet • 6 min", color: "from-pink-400 to-red-400" }],
//     comedy: [{ id: 201, title: "The Talking Cat", content: "The cat asked for a raise...", sub: "Funny • 4 min", color: "from-yellow-400 to-orange-400" }],
//     suspense: [{ id: 301, title: "The 13th Floor", content: "The door that wasn't there...", sub: "Mystery • 8 min", color: "from-gray-700 to-slate-900" }],
//     wisdom: [{ id: 401, title: "The Silent Forest", content: "Silence is a song...", sub: "Zen • 5 min", color: "from-teal-400 to-green-500" }],
//   }
// };

// export default function ToolkitPage() {
//   const [activeTab, setActiveTab] = useState<string | null>(null);
//   const [activeGenre, setActiveGenre] = useState<string | null>(null);
//   const [selectedItem, setSelectedItem] = useState<any>(null);
//   const [toolkitData, setToolkitData] = useState<any>(null);
  
//   const goBack = () => {
//     if (activeGenre) setActiveGenre(null);
//     else setActiveTab(null);
//   };
  
//   const activeContent = toolkitData || allData;
//   useEffect(() => {
//     const fetchUserMoodAndToolkit = async () => {
//       try {
//         // 1. Pehle user ka analytics/mood fetch karo
//         const moodRes = await fetch("http://127.0.0.1:5000/api/mood/analytics");
//         const moodData = await moodRes.json();
//         console.log("1. Mood Found:", moodData.avatar_state); // Ye 'happy', 'neutral' ya 'stressed' hoga
        
//         // 2. Ab wahi mood Toolkit API ko bhejo
//         const toolkitRes = await fetch(`http://127.0.0.1:5000/api/toolkit/${moodData.avatar_state}`);
//         const data = await toolkitRes.json();
//         console.log("2. Toolkit Data:", data);
        
//         setToolkitData(data);
//       } catch (err) {
//         console.error("Error syncing toolkit:", err);
//       }
//     };
    
//     fetchUserMoodAndToolkit();
//   }, []);
  
//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen relative overflow-hidden flex flex-col items-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20">
        
//         {/* BG Decorations */}
//         <motion.div animate={{ y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 10 }} className="absolute w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] -top-20 -left-20 pointer-events-none" />

//         <div className="relative z-10 max-w-5xl w-full">
//           {/* Main Title Heading */}
//           <header className="text-center mb-16">
//             <h1 className="text-6xl font-black text-gray-800 tracking-tight">
//               Self-Help <span className="text-indigo-600">{activeTab ? activeTab.charAt(0).toUpperCase() + activeTab.slice(1) : "Toolkit"}</span>
//             </h1>
//             <p className="text-gray-600 mt-4 text-xl italic font-medium">Your sanctuary for peace and reflection.</p>
//           </header>

//           <AnimatePresence mode="wait">
//             {!activeTab ? (
//               /* --- VERTICAL MAIN MENU --- */
//               <motion.div key="main-menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }}
//                 className="flex flex-col gap-6 max-w-3xl mx-auto px-4"
//               >
//                 {/* Labels changed from "Self-Help X" to just "X" */}
//                 <VerticalMenuBtn id="videos" label="Videos" desc="Watch, Breathe & Relax" icon={<PlayCircle size={32} />} color="from-indigo-500 to-blue-600" onClick={setActiveTab} />
//                 <VerticalMenuBtn id="activities" label="Activities" desc="Interactive Stress Busters" icon={<Palette size={32} />} color="from-blue-500 to-cyan-500" onClick={setActiveTab} />
//                 <VerticalMenuBtn id="stories" label="Stories" desc="Escape into another world" icon={<BookOpen size={32} />} color="from-purple-500 to-indigo-600" onClick={setActiveTab} />
//               </motion.div>
//             ) : activeTab === "stories" && !activeGenre ? (
//               /* --- STORIES GENRES --- */
//               <motion.div key="genres" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto w-full">
//                 <button onClick={goBack} className="mb-8 flex items-center gap-2 text-indigo-600 font-bold bg-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
//                     <ArrowLeft size={20} /> Main Menu
//                 </button>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                   <GenreBtn id="romance" label="Romance" icon={<Heart />} color="bg-pink-100 text-pink-600" onClick={setActiveGenre} />
//                   <GenreBtn id="comedy" label="Comedy" icon={<Laugh />} color="bg-yellow-100 text-yellow-600" onClick={setActiveGenre} />
//                   <GenreBtn id="suspense" label="Suspense" icon={<Ghost />} color="bg-gray-100 text-gray-700" onClick={setActiveGenre} />
//                   <GenreBtn id="wisdom" label="Wisdom" icon={<Lightbulb />} color="bg-teal-100 text-teal-600" onClick={setActiveGenre} />
//                 </div>
//               </motion.div>
//             ) : (
//               /* --- CONTENT LIST --- */
//               <motion.div key="content-list" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-5xl mx-auto w-full">
//                 <button onClick={goBack} className="mb-8 flex items-center gap-2 text-indigo-600 font-bold bg-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
//                     <ArrowLeft size={20} /> Main Menu
//                 </button>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {(activeTab === "stories" ? activeContent.stories[activeGenre!] : activeContent[activeTab!]).map((item: any) => (
//                     <div key={item.id} onClick={() => setSelectedItem(item)} className="bg-white/80 backdrop-blur-md p-6 rounded-[2.5rem] border border-white flex items-center justify-between cursor-pointer hover:shadow-xl transition-all group">
//                       <div className="flex items-center gap-6">
//                           <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform`}>
//                             {activeTab === "videos" ? <PlayCircle /> : activeTab === "stories" ? <BookOpen /> : <Palette />}
//                           </div>
//                           <div>
//                             <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
//                             <p className="text-sm text-gray-500 font-medium italic">{item.sub}</p>
//                           </div>
//                       </div>
//                       <ChevronRight size={20} className="text-indigo-300 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Universal Modal */}
//         <AnimatePresence>
//           {selectedItem && (
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//               <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-[3rem] shadow-2xl w-full max-w-3xl overflow-hidden p-10 relative">
//                   <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 bg-gray-100 p-2 rounded-full hover:bg-red-50 text-gray-500 transition-all shadow-sm"><X size={24}/></button>
//                   {selectedItem.url ? (
//                     <iframe width="100%" height="400px" src={selectedItem.url} className="rounded-3xl shadow-xl" allowFullScreen />
//                   ) : (
//                     <div className="text-center py-6">
//                       <h2 className="text-4xl font-black text-gray-800 mb-6">{selectedItem.title}</h2>
//                       <div className="max-h-[50vh] overflow-y-auto px-4 text-2xl leading-relaxed text-gray-700 font-serif italic text-left border-l-8 border-indigo-100 pl-8">
//                         {selectedItem.content || "Experience coming soon! Self-Help toolkit is preparing this for you. 🌱"}
//                       </div>
//                     </div>
//                   )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>
//     </>
//   );
// }

// // Vertical Menu Component
// function VerticalMenuBtn({ id, label, desc, icon, color, onClick }: any) {
//   return (
//     <motion.div 
//       whileHover={{ x: 15, scale: 1.02 }} 
//       onClick={() => onClick(id)}
//       className="bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 cursor-pointer shadow-lg flex items-center gap-8 group transition-all"
//     >
//       <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}>
//         {icon}
//       </div>
//       <div className="flex-1 text-left">
//         <h3 className="text-3xl font-black text-gray-800">{label}</h3>
//         <p className="text-gray-500 font-medium">{desc}</p>
//       </div>
//       <ChevronRight size={30} className="text-indigo-200 group-hover:text-indigo-600 transition-colors mr-4" />
//     </motion.div>
//   );
// }

// function GenreBtn({ id, label, icon, color, onClick }: any) {
//   return (
//     <motion.div whileHover={{ scale: 1.05 }} onClick={() => onClick(id)} className={`p-8 rounded-[2.5rem] ${color} cursor-pointer flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition-all`}>
//       <div className="scale-150">{icon}</div>
//       <span className="font-extrabold text-lg">{label}</span>
//     </motion.div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayCircle,
  Palette,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  X,
  Heart,
  Laugh,
  Ghost,
  Lightbulb,
  Wind,
  PenTool,
  Smile,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

// Content Data Pool (UNCHANGED)
const allData: any = {
  videos: [
    {
      id: 1,
      title: "Quick Calm",
      url: "https://www.youtube.com/embed/inpok4MKVLM",
      color: "from-blue-400 to-cyan-500",
      sub: "Anxiety Relief",
    },
    {
      id: 2,
      title: "5 Min Mindfulness",
      url: "https://www.youtube.com/embed/ZToicY62f1U",
      color: "from-yellow-400 to-orange-500",
      sub: "Quick Boost",
    },
    {
      id: 3,
      title: "Deep Focus Lo-Fi",
      url: "https://www.youtube.com/embed/jfKfPfyJRdk",
      color: "from-indigo-400 to-purple-500",
      sub: "Study/Work",
    },
    {
      id: 4,
      title: "Nature Sounds",
      url: "https://www.youtube.com/embed/mPhHLeC_S0M",
      color: "from-green-400 to-emerald-500",
      sub: "Morning Energy",
    },
  ],
  activities: [
    {
      id: 8,
      title: "Zen Doodle Pad",
      actId: "doodle",
      icon: <Palette />,
      color: "from-pink-400 to-rose-500",
      sub: "Draw your stress away",
    },
    {
      id: 9,
      title: "Breathing Guide",
      actId: "breath",
      icon: <Wind />,
      color: "from-blue-400 to-indigo-500",
      sub: "Relax with rhythm",
    },
    {
      id: 12,
      title: "Gratitude Journal",
      actId: "journal",
      icon: <PenTool />,
      color: "from-amber-400 to-orange-500",
      sub: "Focus on Good",
    },
    {
      id: 13,
      title: "Self-Affirmations",
      actId: "affirm",
      icon: <Smile />,
      color: "from-teal-400 to-blue-500",
      sub: "Positive Mind",
    },
  ],
  stories: {
    romance: [
      {
        id: 101,
        title: "The Rain & Coffee",
        content: "They met at a cafe...",
        sub: "Sweet • 6 min",
        color: "from-pink-400 to-red-400",
      },
    ],
    comedy: [
      {
        id: 201,
        title: "The Talking Cat",
        content: "The cat asked for a raise...",
        sub: "Funny • 4 min",
        color: "from-yellow-400 to-orange-400",
      },
    ],
    suspense: [
      {
        id: 301,
        title: "The 13th Floor",
        content: "The door that wasn't there...",
        sub: "Mystery • 8 min",
        color: "from-gray-700 to-slate-900",
      },
    ],
    wisdom: [
      {
        id: 401,
        title: "The Silent Forest",
        content: "Silence is a song...",
        sub: "Zen • 5 min",
        color: "from-teal-400 to-green-500",
      },
    ],
  },
};

export default function ToolkitPage() {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [toolkitData, setToolkitData] = useState<any>(null);

  const goBack = () => {
    if (activeGenre) setActiveGenre(null);
    else setActiveTab(null);
  };

  const activeContent = toolkitData || allData;

  useEffect(() => {
    const fetchUserMoodAndToolkit = async () => {
      try {
        const moodRes = await fetch(
          "http://127.0.0.1:5000/api/mood/analytics"
        );
        const moodData = await moodRes.json();

        const toolkitRes = await fetch(
          `http://127.0.0.1:5000/api/toolkit/${moodData.avatar_state}`
        );
        const data = await toolkitRes.json();

        setToolkitData(data);
      } catch (err) {
        console.error("Error syncing toolkit:", err);
      }
    };

    fetchUserMoodAndToolkit();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen relative overflow-hidden flex flex-col items-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20">
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] -top-20 -left-20 pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl w-full">
          <header className="text-center mb-16">
            <h1 className="text-6xl font-black text-gray-800 tracking-tight">
              {t("toolkitTitle12")}{" "}
              <span className="text-indigo-600">
                {activeTab
                  ? activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
                  : t("toolkit")}
              </span>
            </h1>
            <p className="text-gray-700 mt-4 text-xl italic font-medium">
              {t("toolkitSubtitle")}
            </p>
          </header>

          <AnimatePresence mode="wait">
            {!activeTab ? (
              <motion.div className="flex flex-col gap-6 max-w-3xl mx-auto px-4">
                <VerticalMenuBtn
                  id="videos"
                  label={t("videos")}
                  desc={t("videosDesc")}
                  icon={<PlayCircle size={32} />}
                  color="from-indigo-500 to-blue-600"
                  onClick={setActiveTab}
                />
                <VerticalMenuBtn
                  id="activities"
                  label={t("activities")}
                  desc={t("activitiesDesc")}
                  icon={<Palette size={32} />}
                  color="from-blue-500 to-cyan-500"
                  onClick={setActiveTab}
                />
                <VerticalMenuBtn
                  id="stories"
                  label={t("stories")}
                  desc={t("storiesDesc")}
                  icon={<BookOpen size={32} />}
                  color="from-purple-500 to-indigo-600"
                  onClick={setActiveTab}
                />
              </motion.div>
            ) : activeTab === "stories" && !activeGenre ? (
              <motion.div className="max-w-4xl mx-auto w-full">
                <button
                  onClick={goBack}
                  className="mb-8 flex items-center gap-2 text-indigo-700 font-bold bg-white px-8 py-3 rounded-full shadow-md"
                >
                  <ArrowLeft size={20} /> {t("mainMenu")}
                </button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <GenreBtn
                    id="romance"
                    label={t("romance")}
                    icon={<Heart />}
                    color="bg-pink-100 text-pink-700"
                    onClick={setActiveGenre}
                  />
                  <GenreBtn
                    id="comedy"
                    label={t("comedy")}
                    icon={<Laugh />}
                    color="bg-yellow-100 text-yellow-700"
                    onClick={setActiveGenre}
                  />
                  <GenreBtn
                    id="suspense"
                    label={t("suspense")}
                    icon={<Ghost />}
                    color="bg-gray-100 text-gray-800"
                    onClick={setActiveGenre}
                  />
                  <GenreBtn
                    id="wisdom"
                    label={t("wisdom")}
                    icon={<Lightbulb />}
                    color="bg-teal-100 text-teal-700"
                    onClick={setActiveGenre}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div className="max-w-5xl mx-auto w-full">
                <button
                  onClick={goBack}
                  className="mb-8 flex items-center gap-2 text-indigo-700 font-bold bg-white px-8 py-3 rounded-full shadow-md"
                >
                  <ArrowLeft size={20} /> {t("mainMenu")}
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(activeTab === "stories"
                    ? activeContent.stories[activeGenre!]
                    : activeContent[activeTab!]
                  ).map((item: any) => (
                    <div
  key={item.id}
  onClick={() => setSelectedItem(item)}
  className="group bg-white/80 p-6 rounded-[2.5rem] flex items-center justify-between cursor-pointer"
>
                      <div className="flex items-center gap-6">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                        >
                          {activeTab === "videos" ? (
                            <PlayCircle />
                          ) : activeTab === "stories" ? (
                            <BookOpen />
                          ) : (
                            <Palette />
                          )}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">
                            {t(item.title) || item.title}
                          </h4>
                          <p className="text-sm italic text-gray-700">
                            {t(item.sub) || item.sub}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
  size={30}
  className="text-indigo-300 ml-auto group-hover:text-indigo-600 group-hover:translate-x-2 transition-all"
/>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
              <motion.div className="bg-white rounded-[3rem] max-w-3xl w-full p-10 relative">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-8 right-8"
                >
                  <X size={24} />
                </button>

                {selectedItem.url ? (
                  <iframe
                    width="100%"
                    height="400px"
                    src={selectedItem.url}
                    allowFullScreen
                  />
                ) : (
                  <div>
                    <h2 className="text-4xl font-black mb-6 text-gray-800">
                      {t(selectedItem.title) || selectedItem.title}
                    </h2>
                    <p className="text-gray-700 text-lg">
                      {selectedItem.content || t("toolkitFallback")}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

// Components (structure unchanged, text darkened)
function VerticalMenuBtn({ id, label, desc, icon, color, onClick }: any) {
  return (
    <motion.div
      onClick={() => onClick(id)}
      className="bg-white/70 p-8 rounded-[2.5rem] flex items-center gap-8 cursor-pointer"
    >
      <div
        className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${color} flex items-center justify-center text-white`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-black text-gray-800">{label}</h3>
        <p className="text-gray-700 font-medium">{desc}</p>
      </div>
      <ChevronRight
  size={30}
  className="text-indigo-300 ml-auto group-hover:text-indigo-600 group-hover:translate-x-2 transition-all"
/>
    </motion.div>
  );
}

function GenreBtn({ id, label, icon, color, onClick }: any) {
  return (
    <motion.div
      onClick={() => onClick(id)}
      className={`p-8 rounded-[2.5rem] ${color} flex flex-col items-center`}
    >
      <div className="scale-150">{icon}</div>
      <span className="font-extrabold text-lg text-gray-800">
        {label}
      </span>
    </motion.div>
  );
}
