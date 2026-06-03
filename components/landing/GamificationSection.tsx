'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GamificationSection() {
  const stats = [
    { label: 'XP', value: '1000+', icon: '⭐', color: 'from-yellow-400 to-orange-400' },
    { label: 'דרגות', value: '50', icon: '👑', color: 'from-purple-400 to-pink-400' },
    { label: 'מטבעות', value: '5000', icon: '💰', color: 'from-cyan-400 to-blue-400' },
    { label: 'אווטארים', value: '200+', icon: '😊', color: 'from-green-400 to-teal-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            🎮 מערכת המשחוק (Gamification)
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ממשיכים להתפתח ועולים בדרגות - כל צעד זוכה בפרסים ודרוך חדשות
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Avatar and Stats */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative w-64 h-80">
              {/* Avatar Container */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-400/50 backdrop-blur-md flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-8xl">🧑‍💻</div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/30 rounded-full border-2 border-yellow-400/60 flex items-center justify-center text-3xl"
                animate={{ y: [-10, 10, -10], x: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💰
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-14 h-14 bg-purple-400/30 rounded-full border-2 border-purple-400/60 flex items-center justify-center text-2xl"
                animate={{ y: [10, -10, 10], x: [-10, 10, -10] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                ⭐
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-0 w-12 h-12 bg-cyan-400/30 rounded-full border-2 border-cyan-400/60 flex items-center justify-center text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎁
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Level Display */}
            <motion.div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-white">רמה הנוכחית</span>
                <span className="text-3xl font-bold text-yellow-300">42</span>
              </div>
              <motion.div
                className="h-3 bg-gray-700 rounded-full overflow-hidden"
                animate={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.div>
              <p className="text-xs text-gray-400 mt-2">650 / 1000 XP עד לרמה הבאה</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color}/20 rounded-xl p-4 border border-purple-400/30 backdrop-blur-sm`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}