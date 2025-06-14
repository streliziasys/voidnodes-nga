
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Gift, Zap } from "lucide-react";

interface SectionTabsProps {
  activeSection: 'invite' | 'boost' | 'both';
  onSectionChange: (section: 'invite' | 'boost' | 'both') => void;
}

const SectionTabs = ({ activeSection, onSectionChange }: SectionTabsProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="glass-card rounded-full p-1 flex gap-1">
        <button
          onClick={() => onSectionChange(activeSection === 'invite' ? 'both' : 'invite')}
          className={cn(
            "relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
            (activeSection === 'invite' || activeSection === 'both')
              ? "text-white bg-void-accent/20 shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-void-accent/10"
          )}
        >
          <Gift size={16} />
          Invite Rewards
          {(activeSection === 'invite' || activeSection === 'both') && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-void-accent/20 rounded-full border border-void-accent/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
        
        <button
          onClick={() => onSectionChange(activeSection === 'boost' ? 'both' : 'boost')}
          className={cn(
            "relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
            (activeSection === 'boost' || activeSection === 'both')
              ? "text-white bg-void-accent/20 shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-void-accent/10"
          )}
        >
          <Zap size={16} />
          Boost Rewards
          {(activeSection === 'boost' || activeSection === 'both') && (
            <motion.div
              layoutId="activeTab2"
              className="absolute inset-0 bg-void-accent/20 rounded-full border border-void-accent/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default SectionTabs;
