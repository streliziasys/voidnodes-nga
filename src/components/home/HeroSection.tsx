
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      
      {/* Animated stars/nebula background */}
      <div className="absolute inset-0">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-void-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[300px] -left-[200px] w-[700px] h-[700px] bg-void-glow/5 rounded-full blur-[150px]"></div>
        
        {/* Animated stars */}
        <div className="stars-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() < 0.8 ? '2px' : '3px',
                height: Math.random() < 0.8 ? '2px' : '3px',
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-void-glow/90">
              Void<span className="text-void-accent">Nodes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Free and Paid VPS at Unbeatable Prices
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/plans/paid">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-6 py-3 rounded-lg text-white font-medium",
                    "bg-void-accent hover:bg-void-accent/90 transition-all",
                    "shadow-lg shadow-void-accent/20"
                  )}
                >
                  View Paid Plans
                </motion.button>
              </Link>
              
              <Link to="/plans/free">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-6 py-3 rounded-lg",
                    "bg-transparent border border-void-accent/50 text-white font-medium",
                    "hover:bg-void-accent/10 hover:border-void-accent transition-all"
                  )}
                >
                  View Free VPS
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-6 py-3 rounded-lg",
                    "bg-void-dark-gray/50 text-white font-medium border border-void-accent/20",
                    "hover:bg-void-dark-gray/80 hover:border-void-accent/50 transition-all"
                  )}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center"
          >
            <a 
              href="#about-section"
              className="flex flex-col items-center text-gray-400 hover:text-void-accent transition-colors"
            >
              <span className="text-sm mb-1">Learn More</span>
              <div className="w-6 h-10 rounded-full border-2 border-gray-400 hover:border-void-accent flex justify-center pt-1 transition-colors">
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-1 h-2 bg-gray-400 rounded-full"
                ></motion.div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
