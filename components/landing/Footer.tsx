'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'תכונות', href: '#features' },
      { label: 'הצגה', href: '#demo' },
      { label: 'מחירים', href: '#pricing' },
      { label: 'ביטחון', href: '#security' },
    ],
    company: [
      { label: 'אודות', href: '#about' },
      { label: 'פתיחת דברים', href: '#jobs' },
      { label: 'בלוג', href: '#blog' },
      { label: 'צור קשר', href: '#contact' },
    ],
    legal: [
      { label: 'תקנון שימוש', href: '/terms' },
      { label: 'מדיניות פרטיות', href: '/privacy' },
      { label: 'COPPA', href: '/coppa' },
      { label: 'זכויות יוצרים', href: '/copyright' },
    ],
    social: [
      { label: 'Instagram', href: '#', icon: '📱' },
      { label: 'TikTok', href: '#', icon: '🎵' },
      { label: 'YouTube', href: '#', icon: '📺' },
      { label: 'Twitter', href: '#', icon: '🐦' },
    ],
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent to-slate-900/50 border-t border-purple-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              יֶלֶד פְּלוּס
            </motion.div>
            <p className="text-gray-400 text-sm">
              פלטפורמה אינטראקטיבית בטוחה לילדים, המשלבת יצירה, למידה ומשחקים.
            </p>
            <div className="mt-6 flex gap-3">
              {footerLinks.social.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg hover:border-purple-300/60 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4">מוצר</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4">חברה</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-4">משפטי</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-gray-400 text-sm">
            © 2026 יֶלֶד פְּלוּס. כל הזכויות שמורות.
            <span className="text-purple-300 mr-1">❤️</span>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
            >
              🌍 עברית
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              כל המערכות פעילות
            </span>
          </div>
        </motion.div>
      </div>

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}