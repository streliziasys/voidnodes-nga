
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Simplified Background Effects */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Single gradient orb for better performance */}
        <div className="absolute -top-[200px] -right-[100px] w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl" />
        
        {/* Simplified grid */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full mb-8"
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
              <span className="gradient-text">Void</span>
              <span className="text-white">Node</span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-4xl font-light text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of hosting with{' '}
              <span className="text-indigo-400 font-semibold">lightning-fast VPS</span>{' '}
              at unbeatable prices
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              { icon: Zap, text: "Instant Setup" },
              { icon: Shield, text: "DDoS Protected" },
              { icon: Sparkles, text: "99.9% Uptime" }
            ].map((feature, index) => (
              <div
                key={feature.text}
                className="glass-card px-6 py-3 rounded-full flex items-center gap-2"
              >
                <feature.icon className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-300 font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-20"
          >
            <Link to="/plans/paid">
              <button
                className={cn(
                  "group px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3",
                  "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500",
                  "text-white shadow-xl transition-all duration-300",
                  "magnetic-button"
                )}
              >
                <span>Explore Paid Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link to="/plans/free">
              <button
                className={cn(
                  "group px-8 py-4 rounded-2xl glass-card border-2 border-white/20",
                  "text-white font-semibold text-lg flex items-center gap-3",
                  "hover:bg-white/5 hover:border-indigo-400/50 transition-all duration-300",
                  "magnetic-button"
                )}
              >
                <span>Try Free VPS</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>

          {/* Simplified Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center"
          >
            <a 
              href="#about-section"
              className="flex flex-col items-center text-slate-400 hover:text-indigo-400 transition-colors duration-300"
            >
              <span className="text-sm mb-3 font-medium">Discover More</span>
              <div className="w-6 h-12 rounded-full border-2 border-slate-400 hover:border-indigo-400 flex justify-center pt-2 transition-colors duration-300">
                <div className="w-1 h-3 bg-slate-400 hover:bg-indigo-400 rounded-full floating-gentle" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
