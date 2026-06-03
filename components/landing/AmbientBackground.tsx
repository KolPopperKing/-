'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

interface AmbientBackgroundProps {
  timeOfDay: TimeOfDay;
}

const timeOfDayStyles = {
  morning: {
    bg: 'from-blue-400/10 via-cyan-300/5 to-purple-200/5',
    text: 'Morning vibes ☀️',
  },
  afternoon: {
    bg: 'from-yellow-400/5 via-orange-300/5 to-purple-300/5',
    text: 'Afternoon energy ✨',
  },
  evening: {
    bg: 'from-purple-500/10 via-pink-400/5 to-red-300/5',
    text: 'Evening mode 🌅',
  },
  night: {
    bg: 'from-indigo-900/10 via-purple-900/5 to-blue-900/5',
    text: 'Night time 🌙',
  },
};

export default function AmbientBackground({ timeOfDay }: AmbientBackgroundProps) {
  const style = timeOfDayStyles[timeOfDay];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${style.bg}`} />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating Bubbles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-2 h-2 bg-purple-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}