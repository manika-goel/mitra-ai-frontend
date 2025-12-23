"use client";
import { useState } from "react";
import OnboardingPopup from "./components/OnboardingPopup";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const router = useRouter();

  const handleComplete = () => {
    setShowOnboarding(false);
    // User directly Email Login page par chala jayega
    router.push("/auth/login/email");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
      {showOnboarding ? (
        <OnboardingPopup onComplete={handleComplete} />
      ) : (
        <div className="flex items-center justify-center min-h-screen font-bold text-indigo-600 animate-pulse">
          Taking you to Login...
        </div>
      )}
    </main>
  );
}