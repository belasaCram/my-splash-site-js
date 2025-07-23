"use client";
import {motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
    return (
        <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            onAnimationComplete={onFinish}
        >
            <motion.h1
                className="text-white text-4xl font-bold"
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1, repeat: 1, repeatType: "reverse" }}
            >
                Welcome to My Site
            </motion.h1>
        </motion.div>
    );
}