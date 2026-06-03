'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CreateAndPlaySection() {
  const features = [
    {
      title: 'יצירת סיפורים',
      icon: '📖',
      description: 'ספר את סיפורך בצבעים וחיים',
      color: 'from-pink-400 to-red-400',
    },
    {
      title: 'יצירת תמונות',
      icon: '🎨',
      description: 'צייר וגרום לדמיון שלך להיות אמיתי',
      color: 'from-purple-400 to-pink-400',
    },
    {
      title: 'בניית משחקים',
      icon: '🎮',
      description: 'בנה משחקים משלך ושחק עם חברים',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      title: 'חידונים אינטראקטיביים',
      icon: '🧩',
      description: 'תשובה לחידות וקבל פרסים',
      color: 'from-orange-400 to-yellow-400',
    },
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
    hidden: { opacity: 0, y: 20 },
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
          className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            ⭐ ליצור ולשחק
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            בחרו מעולם של כלים יצירתיים שמעניקים חירות מלאה לדמיונכם
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative h-full rounded-3xl p-6 bg-slate-900/50 border border-purple-400/30 backdrop-blur-md hover:border-purple-300/60 transition-all duration-300 overflow-hidden group cursor-pointer">
                {/* Hover Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>

                  {/* Hover Lift Effect */}
                  <motion.div
                    className="mt-4 inline-block px-4 py-2 bg-purple-500/20 rounded-lg text-purple-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    בואו נתחיל →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}