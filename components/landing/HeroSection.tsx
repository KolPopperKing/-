'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 - Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent" />

        {/* Layer 2 - Animated Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Layer 3 - Glow Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Particle System */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              backgroundColor: ['rgba(168, 85, 247, 0.5)', 'rgba(34, 211, 238, 0.5)', 'rgba(236, 72, 153, 0.5)'][Math.floor(Math.random() * 3)],
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Avatars */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { pos: 'top-10 md:top-20 left-10 md:left-20', delay: 0, emoji: '😊' },
            { pos: 'top-10 md:top-20 right-10 md:right-20', delay: 0.2, emoji: '🚀' },
            { pos: 'bottom-10 md:bottom-20 left-10 md:left-20', delay: 0.4, emoji: '⭐' },
            { pos: 'bottom-10 md:bottom-20 right-10 md:right-20', delay: 0.6, emoji: '🎨' },
          ].map((avatar, i) => (
            <motion.div
              key={i}
              className={`absolute ${avatar.pos} pointer-events-none`}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                delay: avatar.delay,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <motion.div
                className={`w-16 md:w-24 h-16 md:h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-purple-500/30 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center text-3xl font-bold text-white`}
                whileHover={{ scale: 1.1 }}
              >
                {avatar.emoji}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
            בְּרוּכִים הַבָּאִים לְיֶלֶד פְּלוּס
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
            הַמָּקוֹם שֶׁבּוֹ הַדִּמְיוֹן שֶׁלָּכֶם הוֹפֵךְ לִמְצִיאוּת ✨
          </p>
        </motion.div>

        {/* Subtitle with Features */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            פלטפורמה אינטראקטיבית לילדים המשלבת:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {['יצירה', 'למידה', 'משחקים', 'קהילה', 'בטיחות'].map((feature, index) => (
              <motion.div
                key={feature}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4 border border-purple-400/30 backdrop-blur-sm hover:border-purple-300/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <p className="text-purple-100 font-semibold">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            className="relative px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Claymorphism Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-purple-300/50 group-hover:border-purple-300/100 transition-all duration-300" />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/50 group-hover:shadow-purple-400/75 transition-all duration-300 blur-xl" />

            {/* Text */}
            <span className="relative z-10 text-white group-hover:text-white transition-colors">
              הבואו להתחיל 🚀
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-purple-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}