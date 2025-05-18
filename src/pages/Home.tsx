
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
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default HomePage;
