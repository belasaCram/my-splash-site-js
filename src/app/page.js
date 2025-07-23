"use client";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleFinish = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleFinish} />}

      {!showSplash && (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
          <h1 className="text-3xl font-bold">🏠 Index Page</h1>
          <p className="mt-4">Now you're seeing the main website content.</p>
        </main>
      )}
    </>
  );
}
