
import React from "react";
import { cn } from "@/lib/utils";
import { HardDrive, Cpu, MemoryStick } from "lucide-react";
import { motion } from "framer-motion";

interface RewardCardProps {
  title: string;
  ram: string;
  cpu: string;
  storage: string;
  requirement: string;
  index: number;
}

const FreeRewardCard = ({
  title,
  ram,
  cpu,
  storage,
  requirement,
  index
}: RewardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        bounce: 0.3
      }}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "relative glass-card rounded-2xl p-6 overflow-hidden",
        "border border-void-accent/20 bg-gradient-to-br from-void-dark-gray/40 to-void-dark-gray/20",
        "hover:border-void-accent/40 hover:shadow-lg hover:shadow-void-accent/10",
        "transition-all duration-300 group"
      )}
    >
      {/* Requirement Badge */}
      <div className="absolute top-4 right-4 bg-void-accent/20 backdrop-blur-sm border border-void-accent/30 text-void-accent px-3 py-1 rounded-full text-xs font-semibold">
        {requirement}
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        <h4 className="text-xl font-bold text-white mb-6 font-chakra-petch">
          {title}
        </h4>
        
        <div className="grid grid-cols-3 gap-3">
          {/* RAM */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 rounded-xl bg-void-dark-gray/50 border border-void-accent/10 hover:border-void-accent/30 transition-all text-center group/spec"
          >
            <MemoryStick size={20} className="text-void-accent mb-2 group-hover/spec:animate-pulse" />
            <span className="text-sm font-medium text-white">{ram}</span>
            <span className="text-xs text-gray-400">RAM</span>
          </motion.div>
          
          {/* CPU */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 rounded-xl bg-void-dark-gray/50 border border-void-accent/10 hover:border-void-accent/30 transition-all text-center group/spec"
          >
            <Cpu size={20} className="text-void-accent mb-2 group-hover/spec:animate-spin" />
            <span className="text-sm font-medium text-white">{cpu}</span>
            <span className="text-xs text-gray-400">CPU</span>
          </motion.div>
          
          {/* Storage */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 rounded-xl bg-void-dark-gray/50 border border-void-accent/10 hover:border-void-accent/30 transition-all text-center group/spec"
          >
            <HardDrive size={20} className="text-void-accent mb-2 group-hover/spec:animate-pulse" />
            <span className="text-sm font-medium text-white">{storage}</span>
            <span className="text-xs text-gray-400">SSD</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FreeRewardCard;
