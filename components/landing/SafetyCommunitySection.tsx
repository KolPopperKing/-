'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SafetyCommunitySection() {
  const safetyFeatures = [
    {
      icon: '👮',
      title: 'פיקוח צוות',
      description: 'צוות דיקן מפקח על כל התוכן',
    },
    {
      icon: '🛡️',
      title: 'Moderation',
      description: 'סינון תוכן בטוח עבור ילדים',
    },
    {
      icon: '🔒',
      title: 'הרשאות מובנות',
      description: 'שליטה מלאה על הגדרות הפרטיות',
    },
    {
      icon: '💬',
      title: 'תקשורת בטוחה',
      description: 'צ\'אט מוגן עם בדיקות בטיחות',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            🛡️ ביטחון וקהילה
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            בטיחות הילדים היא עדיפות ראשונה שלנו - פלטפורמה מוגנת ובטוחה לכולם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Shield Icon and Highlights */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              className="relative w-72 h-72 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Shield Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl border-2 border-emerald-400/50"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(16, 185, 129, 0.3)',
                    '0 0 60px rgba(16, 185, 129, 0.6)',
                    '0 0 30px rgba(16, 185, 129, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Center Icon */}
              <motion.div className="text-8xl z-10">🛡️</motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-2xl p-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-300/60 transition-all duration-300 h-full">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-emerald-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}