
import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import FreeRewardsSection from "@/components/plans/FreeRewardsSection";
import CleanBreadcrumb from "@/components/ui/CleanBreadcrumb";
import TypewriterText from "@/components/ui/TypewriterText";

const FreePlansPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <CleanBreadcrumb />
        
        <div className="text-center mb-16">
          <TypewriterText
            text="Free VPS Rewards"
            className="text-4xl md:text-6xl font-bold mb-6 font-chakra-petch"
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
            Unlock powerful VPS resources through our community program. 
            Invite friends or boost our Discord server to earn free hosting credits.
          </motion.p>
        </div>
      </div>
      
      <FreeRewardsSection />
    </PageTransition>
  );
};

export default FreePlansPage;
