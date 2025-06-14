
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ContactSection from "@/components/home/ContactSection";

const HomePage = () => {
  return (
    <PageTransition>
      <div className="pt-16 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-radial from-void-accent/3 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default HomePage;
