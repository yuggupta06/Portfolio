"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedTypewriterButton({ text,href }:{ text: string,href?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [index, text.length]);

  return (
    <motion.button
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 2, // delay before falling
        type: 'spring',
        stiffness: 60,
        damping: 15,
        duration: 1.5,
      }}
      className="relative inline-flex h-10 w-20 md:h-14 md:w-32 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      {/* Spinning border background */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Button content with animated typing text */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl font-mono whitespace-nowrap text-center">
        <a href={href}>
        {text.slice(0, index)}
        </a>
        {index < text.length && (
          <motion.span
            className="ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        )}
        
      </span>
    </motion.button>
  );
}
