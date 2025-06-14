
import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import AboutSection from "@/components/home/AboutSection";
import CleanBreadcrumb from "@/components/ui/CleanBreadcrumb";
import TypewriterText from "@/components/ui/TypewriterText";

const AboutPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-void-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <CleanBreadcrumb />
          
          <div className="text-center mb-16">
            <TypewriterText
              text="About Void Node"
              className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk"
              speed={80}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-32 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-8 rounded-full"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              Learn more about our mission to provide affordable and reliable VPS hosting solutions.
            </motion.p>
          </div>
        </div>
        
        <AboutSection />

        <div className="container mx-auto px-4 max-w-6xl py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-void-accent/10 hover:border-void-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-void-accent/10"
          >
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-void-accent to-void-glow rounded-full mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Our Story</h2>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Void Node began with a simple idea: make powerful VPS hosting accessible to everyone. 
                In a market dominated by expensive solutions with complex pricing structures, we 
                wanted to create something different - a hosting service that offers both free and 
                affordable paid options without compromising on quality.
              </p>
              <p className="text-lg">
                Today, we're proud to serve a growing community of developers, hobbyists, and small 
                businesses who rely on our infrastructure for their projects. Our unique invite and 
                boost reward system allows users to earn free VPS resources, making quality hosting 
                accessible to all.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
