// src/components/PageAnimator.jsx

import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh"
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: "-100vh"
  }
};

const PageAnimator = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimator;