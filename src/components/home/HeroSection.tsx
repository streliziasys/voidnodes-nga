
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const FloatingElement = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
      className={cn("absolute floating-gentle", className)}
    >
      <div className="w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full sparkle-twinkle"></div>
    </motion.div>
  );

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Enhanced Background Effects */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[300px] -right-[200px] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-[100px]"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -15, 0],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[400px] -left-[300px] w-[800px] h-[800px] bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-[120px]"
        />

        {/* Floating elements */}
        <FloatingElement delay={1} className="top-[20%] left-[10%]" />
        <FloatingElement delay={1.5} className="top-[30%] right-[15%]" />
        <FloatingElement delay={2} className="bottom-[40%] left-[20%]" />
        <FloatingElement delay={2.5} className="bottom-[30%] right-[25%]" />
        <FloatingElement delay={3} className="top-[60%] left-[70%]" />
        
        {/* Enhanced animated grid */}
        <div className="absolute inset-0 bg-dots opacity-30"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full mb-8 hover-lift-smooth"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">
              Next-Gen VPS Hosting Platform
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4">
              <span className="gradient-text">Void</span>
              <span className="text-white"> Node</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto max-w-md mb-8"
            />
          </motion.div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-4xl font-light text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of hosting with{' '}
              <span className="shimmer-text font-semibold">lightning-fast VPS</span>{' '}
              at unbeatable prices
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              { icon: Zap, text: "Instant Setup" },
              { icon: Shield, text: "DDoS Protected" },
              { icon: Sparkles, text: "99.9% Uptime" }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
                className="glass-card px-6 py-3 rounded-full flex items-center gap-2 hover-lift-smooth"
              >
                <feature.icon className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-300 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-20"
          >
            <Link to="/plans/paid">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "group px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3",
                  "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500",
                  "text-white shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300",
                  "hypnotic-glow magnetic-button relative overflow-hidden"
                )}
              >
                <span className="relative z-10">Explore Paid Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link to="/plans/free">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "group px-8 py-4 rounded-2xl glass-card border-2 border-white/20",
                  "text-white font-semibold text-lg flex items-center gap-3",
                  "hover:bg-white/5 hover:border-indigo-400/50 transition-all duration-300",
                  "hover-lift-smooth magnetic-button"
                )}
              >
                <span>Try Free VPS</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.a 
              href="#about-section"
              className="flex flex-col items-center text-slate-400 hover:text-indigo-400 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <span className="text-sm mb-3 font-medium">Discover More</span>
              <div className="w-6 h-12 rounded-full border-2 border-slate-400 group-hover:border-indigo-400 flex justify-center pt-2 transition-all duration-300">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  className="w-1 h-3 bg-slate-400 group-hover:bg-indigo-400 rounded-full transition-colors duration-300"
                />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
