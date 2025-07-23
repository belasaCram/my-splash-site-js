"use client";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
          <h1 className="text-3xl font-bold">🏠 Welcome to My Website</h1>
          <p className="mt-4">This is your main homepage.</p>
        </main>
      )}
    </>
  );
}
