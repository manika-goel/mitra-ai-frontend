export const onboardingQuestions = [
  {
    id: 1,
    question: "How are you feeling right now?",
    type: "emoji",
    options: [
      { label: "Happy", emoji: "😊" },
      { label: "Sad", emoji: "😔" },
      { label: "Stressed", emoji: "😫" },
      { label: "Angry", emoji: "😠" },
      { label: "Calm", emoji: "🧘" }
    ]
  },
  {
    id: 2,
    question: "What's your energy level today?",
    type: "mcq",
    options: ["Super Charged ⚡", "I'm Okay 🙂", "Feeling Drained 🪫"]
  },
  {
    id: 3,
    question: "Do you need someone to just listen or give advice?",
    type: "mcq",
    options: ["Just listen 👂", "Need advice 💡", "Not sure 😶‍🌫️"]
  }
];