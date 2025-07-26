"use client";
import { useState } from "react";
import SplashScreen from "../app/SplashScreen";

export default function Home() {
	const [showSplash, setShowSplash] = useState(true);

	return (
		<>
			{showSplash ? (
				<SplashScreen onFinish={() => setShowSplash(false)} />
			) : (
				<main className="min-h-screen flex items-center justify-center bg-white">
					<h1 className="text-4xl font-bold text-gray-800">
						Welcome to my site
					</h1>
				</main>
			)}
		</>
	);
}
