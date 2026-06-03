'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function KnowledgeWorldSection() {
  const categories = [
    {
      title: 'קורסים',
      icon: '📚',
      items: 250,
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'סרטונים',
      icon: '🎥',
      items: 180,
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'כלים חיצוניים',
      icon: '🔧',
      items: 45,
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'פודקאסטים',
      icon: '🎧',
      items: 120,
      color: 'from-green-400 to-teal-400',
      bgColor: 'from-green-500/20 to-teal-500/20',
    },
    {
      title: 'חידונים',
      icon: '🧠',
      items: 500,
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-500/20 to-orange-500/20',
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
            🌍 עולם הידע
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            אלפי שיעורים, סרטונים וחומרים חינוכיים המחכים לכם
          </p>
        </motion.div>

        {/* Carousel Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`relative rounded-2xl p-6 h-64 bg-gradient-to-br ${category.bgColor} border border-purple-400/30 cursor-pointer overflow-hidden backdrop-blur-sm`}
                whileHover={{
                  borderColor: 'rgba(168, 85, 247, 0.6)',
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  >
                    {category.icon}
                  </motion.div>

                  {/* Title & Count */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-300 opacity-75 group-hover:opacity-100 transition-opacity">
                      {category.items} פריטים
                    </p>
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="text-xs font-semibold text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    לחקור →
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}