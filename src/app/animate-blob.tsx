"use client";

import { motion } from "framer-motion";

export default function AnimatedBlob() {
  return (
    <motion.div
      className="absolute w-[300px] h-[300px] rounded-full bg-purple-500 blur-[120px] opacity-60"
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -60, 80, 0],
        scale: [1, 1.2, 0.9, 1]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
