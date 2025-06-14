
import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import AboutSection from "@/components/home/AboutSection";

const AboutPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk"
          >
            About <span className="text-void-accent">Void Node</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            Learn more about our mission to provide affordable and reliable VPS hosting solutions.
          </motion.p>
        </div>
      </div>
      
      <AboutSection />

      <div className="container mx-auto px-4 max-w-6xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-card p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-300 mb-6">
            Void Node began with a simple idea: make powerful VPS hosting accessible to everyone. 
            In a market dominated by expensive solutions with complex pricing structures, we 
            wanted to create something different - a hosting service that offers both free and 
            affordable paid options without compromising on quality.
          </p>
          <p className="text-gray-300">
            Today, we're proud to serve a growing community of developers, hobbyists, and small 
            businesses who rely on our infrastructure for their projects. Our unique invite and 
            boost reward system allows users to earn free VPS resources, making quality hosting 
            accessible to all.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
