
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import FreeRewardsSection from "@/components/plans/FreeRewardsSection";

const FreePlansPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="container mx-auto px-4 mb-12">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-void-accent mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Homepage
        </Link>
        
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk"
          >
            Free <span className="text-void-accent">VPS Rewards</span>
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
            Earn free VPS resources by inviting friends or boosting our Discord server.
          </motion.p>
        </div>
      </div>
      
      <FreeRewardsSection />
    </PageTransition>
  );
};

export default FreePlansPage;
