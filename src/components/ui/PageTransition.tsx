
import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`pb-20 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.6,
          delay: 0.1,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
