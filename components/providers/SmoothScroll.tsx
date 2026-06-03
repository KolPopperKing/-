import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}