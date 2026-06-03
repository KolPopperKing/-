'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToActionSection() {
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
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            רוֹצִים לְהַתְחִיל?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            הִכָּנְסוּ לָעוֹלָם שֶׁל יֶלֶד פְּלוּס וְהוּצִיאוּ אֶת הַדִּמְיוֹן שֶׁלָּכֶם!
          </p>
          <p className="text-gray-400">בתוך דקה אחת אתם יכולים להתחיל לשחק ולהתפתח</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          {/* Primary Button - Login/Register */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-md" />
            <Link href="/auth/kids-login">
              <button className="relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl text-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
                🚀 הבואו להתחיל עכשיו
              </button>
            </Link>
          </motion.div>

          {/* Secondary Button - Learn More */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="px-8 md:px-12 py-4 md:py-5 border-2 border-purple-400 text-purple-300 font-bold rounded-2xl text-lg hover:border-purple-300 hover:text-purple-200 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              📚 קרא עוד
            </button>
          </motion.div>
        </motion.div>

        {/* Trust Elements */}
        <motion.div className="mt-16 flex justify-center gap-8 flex-wrap text-sm" variants={itemVariants}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <span className="text-gray-300">
              עוד <span className="font-bold text-cyan-300">50,000+</span> ילדים חוברים
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-gray-300">
              דירוג <span className="font-bold text-yellow-300">4.9/5</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-gray-300">
              <span className="font-bold text-purple-300">זוכה פרסים</span> בחינוך דיגיטלי
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}