"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

export default function SplashScreen({ onFinish }) {
    const [typedText, setTypedText] = useState("");
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [startFade, setStartFade] = useState(false);

    const fullText = "sudo launch mywebsite.dev";
 
    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prev) => prev + fullText[index]);
            index++;

            if (index === fullText.length) {
                clearInterval(typingInterval);
                setIsTypingDone(true);

                // Start fade after typing
                setTimeout(() => setStartFade(true), 1000);
                setTimeout(() => onFinish(), 2000);
            }
        }, 100); // Typing speed

        return () => clearInterval(typingInterval);
    }, []);

    return (
    <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: startFade ? 0 : 1 }}
        transition={{ duration: 1 }}
    >
        {/* Terminal Window */}
        <div className="relative z-10 bg-[#1e1e1e] text-green-400 rounded-md p-6 shadow-2xl w-[90%] max-w-md font-mono border border-gray-700 transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform" />
                <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform" />
            </div>

            {/* Typing line */}
            <div className="text-sm leading-relaxed">
                <span className="text-white">~</span>$ {typedText}
                <span className="animate-pulse">▍</span>
            </div>

            {/* Optional next line after typing */}
            {isTypingDone && (
                <motion.div
                    className="mt-2 text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Authenticating...
                    <br />
                    Launching...
                </motion.div>
            )}
        </div>

    </motion.div>
    );
}
