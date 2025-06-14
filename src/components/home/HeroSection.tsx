
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import TypewriterText from "@/components/ui/TypewriterText";
import FloatingParticles from "@/components/ui/FloatingParticles";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingParticles />
      
      {/* Enhanced Background Effects */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
        
        {/* Animated nebula background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-void-accent/10 rounded-full blur-[120px]"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[300px] -left-[200px] w-[900px] h-[900px] bg-void-glow/8 rounded-full blur-[150px]"
        />

        {/* Enhanced animated stars */}
        <div className="stars-container">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() < 0.7 ? '2px' : '4px',
                height: Math.random() < 0.7 ? '2px' : '4px',
                background: Math.random() < 0.5 
                  ? 'rgba(159, 107, 255, 0.8)' 
                  : 'rgba(210, 156, 255, 0.6)',
                boxShadow: '0 0 6px currentColor',
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8 min-h-[4.5rem] md:min-h-[7.5rem] flex items-center justify-center">
              <TypewriterText
                text="Void Node"
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk tracking-tight"
                delay={500}
                speed={100}
                disableUnderline   // Prevent the underline for the main title
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="text-xl md:text-3xl text-gray-300 mb-12 font-chakra-petch"
            >
              Free and Paid VPS at{' '}
              <span className="animated-gradient bg-clip-text text-transparent font-bold">
                Unbeatable Prices
              </span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              <Link to="/plans/paid">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-8 py-4 rounded-xl text-white font-medium text-lg",
                    "bg-void-accent hover:bg-void-accent/90 transition-all",
                    "shadow-lg shadow-void-accent/30 hover:shadow-void-accent/50",
                    "glint-effect hypnotic-glow"
                  )}
                >
                  View Paid Plans
                </motion.button>
              </Link>
              
              <Link to="/plans/free">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-8 py-4 rounded-xl glass-card",
                    "border-2 border-void-accent/50 text-white font-medium text-lg",
                    "hover:bg-void-accent/10 hover:border-void-accent transition-all",
                    "glint-effect hover-lift"
                  )}
                >
                  View Free VPS
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-8 py-4 rounded-xl glass-card",
                    "text-white font-medium border border-void-accent/30 text-lg",
                    "hover:bg-void-dark-gray/50 hover:border-void-accent/60 transition-all",
                    "glint-effect hover-lift"
                  )}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.a 
              href="#about-section"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-gray-400 hover:text-void-accent transition-all duration-300 group"
            >
              <span className="text-sm mb-2 font-chakra-petch">Learn More</span>
              <div className="w-6 h-12 rounded-full border-2 border-gray-400 group-hover:border-void-accent flex justify-center pt-2 transition-all duration-300 hover-lift">
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-1 h-3 bg-gray-400 group-hover:bg-void-accent rounded-full transition-colors duration-300"
                ></motion.div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
