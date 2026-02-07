export const onboardingQuestions = {
  en: [
    {
      id: 1,
      question: "How are you feeling right now?",
      type: "emoji",
      options: [
        { key: "happy", label: "Happy", emoji: "😊" },
        { key: "sad", label: "Sad", emoji: "😔" },
        { key: "stressed", label: "Stressed", emoji: "😫" },
        { key: "angry", label: "Angry", emoji: "😠" },
        { key: "calm", label: "Calm", emoji: "🧘" }
      ]
    },
    {
      id: 2,
      question: "What's your energy level today?",
      type: "mcq",
      options: [
        { key: "high", label: "Super Charged ⚡" },
        { key: "okay", label: "I'm Okay 🙂" },
        { key: "low", label: "Feeling Drained 🪫" }
      ]
    },
    {
      id: 3,
      question: "Do you need someone to just listen or give advice?",
      type: "mcq",
      options: [
        { key: "listen", label: "Just listen 👂" },
        { key: "advice", label: "Need advice 💡" },
        { key: "unsure", label: "Not sure 😶‍🌫️" }
      ]
    }
  ],

  hi: [
    {
      id: 1,
      question: "आप अभी कैसा महसूस कर रहे हैं?",
      type: "emoji",
      options: [
        { key: "happy", label: "खुश", emoji: "😊" },
        { key: "sad", label: "उदास", emoji: "😔" },
        { key: "stressed", label: "तनाव में", emoji: "😫" },
        { key: "angry", label: "गुस्सा", emoji: "😠" },
        { key: "calm", label: "शांत", emoji: "🧘" }
      ]
    },
    {
      id: 2,
      question: "आज आपकी ऊर्जा का स्तर कैसा है?",
      type: "mcq",
      options: [
        { key: "high", label: "पूरी तरह ऊर्जा से भरे ⚡" },
        { key: "okay", label: "ठीक-ठाक हूँ 🙂" },
        { key: "low", label: "थका हुआ महसूस कर रहा हूँ 🪫" }
      ]
    },
    {
      id: 3,
      question: "क्या आप चाहते हैं कि कोई सिर्फ सुने या सलाह दे?",
      type: "mcq",
      options: [
        { key: "listen", label: "बस सुने 👂" },
        { key: "advice", label: "सलाह चाहिए 💡" },
        { key: "unsure", label: "पक्का नहीं 😶‍🌫️" }
      ]
    }
  ]
};
