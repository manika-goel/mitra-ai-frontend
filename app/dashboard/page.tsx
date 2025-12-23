"use client";

import { useRouter } from "next/navigation";
import DashboardCard from "../components/DashboardCard";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 p-8">
      
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Welcome to your Dashboard 👋
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <DashboardCard
          title="Chat with MitrAI"
          description="Talk freely and share what’s on your mind."
          onClick={() => router.push("/chat")}
        />

        <DashboardCard
          title="Mood Tracker"
          description="Track your emotions and mental state."
          onClick={() => router.push("/mood")}
        />

        <DashboardCard
          title="Your Progress"
          description="See your mental wellness journey."
          onClick={() => router.push("/progress")}
        />

      </div>
    </main>
  );
}
