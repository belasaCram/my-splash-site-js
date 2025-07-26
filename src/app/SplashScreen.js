"use client";

import "./splashScreenStyle.css";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
	const [typedText, setTypedText] = useState("");
	const [showProgress, setShowProgress] = useState(false);
	const [loadingText, setLoadingText] = useState("");
	const progressRef = useRef(null);

	const fullCommand = "sudo open my-website.dev";
	const loadingPhrases = [
		"Authenticating...",
		"Launching system...",
		"Loading UI components...",
		"Finalizing setup...",
	];

	useEffect(() => {
		let charIndex = 0;
		const typing = setInterval(() => {
			setTypedText(fullCommand.slice(0, charIndex));
			charIndex++;
			if (charIndex > fullCommand.length) {
				clearInterval(typing);
				setTimeout(() => {
					setShowProgress(true);
					startProgress();
				}, 500);
			}
		}, 80);
		return () => clearInterval(typing);
		s;
	}, []);

	const startProgress = () => {
		let progress = 0;
		let phraseIndex = 0;

		const interval = setInterval(() => {
			progress += Math.random() * 12;
			if (progress > 100) progress = 100;

			if (progressRef.current) {
				progressRef.current.style.width = `${progress}%`;
			}

			if (progress % 25 < 10 && phraseIndex < loadingPhrases.length) {
				setLoadingText(loadingPhrases[phraseIndex]);
				phraseIndex++;
			}

			if (progress >= 100) {
				clearInterval(interval);
				setTimeout(onFinish, 800);
			}
		}, 200);
	};

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 bg-[#0D1117] flex items-center justify-center z-50"
				initial={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}>
				{/*  Terminal container */}
				<div className="motion-gradient"></div>

				<div className="terminal-window w-full max-w-4xl bg-[var(--terminal-bg)] rounded-xl border border-[#2D374850] shadow-2xl overflow-hidden">
					{/* Header */}
					<div className="terminal-header flex items-center px-4 py-3 bg-[#1E232B] border-b border-[#2D374850]">
						<div className="flex space-x-2 mr-3">
							<div className="w-3 h-3 rounded-full bg-[var(--terminal-red)] hover:bg-[#FF5F56CC] transition-all"></div>
							<div className="w-3 h-3 rounded-full bg-[var(--terminal-yellow)] hover:bg-[#FFBD2ECC] transition-all"></div>
							<div className="w-3 h-3 rounded-full bg-[var(--terminal-green)] hover:bg-[#27C93FCC] transition-all"></div>
						</div>
						<div className="text-sm text-[#5C6773]">
							bash ~/projects/mywebsite.dev
						</div>
					</div>

					{/* Body */}
					<pre className="terminal-body p-6 font-mono">
						<div className="terminal-line mb-2">
							<span className="text-[#5C6773]">
								# Welcome to the future of terminal
								UI
							</span>
						</div>
						<div className="terminal-line mb-4">
							<span className="text-[#5C6773]">
								# Initializing system...
							</span>
						</div>

						<div className="terminal-command">
							<span className="text-[#64FEDA]">
								user@localhost
							</span>
							<span className="text-white">:</span>
							<span className="text-[#7EE787]">~</span>
							<span className="text-white">$</span>
							<span className="ml-2 terminal-text">
								{typedText}
							</span>
							<span className="cursor-blink">▌</span>
						</div>

						{/* Progress */}
						{showProgress && (
							<div className="mt-6">
								<div className="h-1 w-full bg-[#2D374850] rounded-full overflow-hidden">
									<div
										ref={progressRef}
										className="h-full bg-[var(--terminal-accent,#64FEDA)] transition-all duration-300"
										style={{
											width: "0%",
										}}></div>
								</div>
								<div className="mt-2 text-sm text-gray-400">
									{loadingText}
								</div>
							</div>
						)}
					</pre>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default SplashScreen;
