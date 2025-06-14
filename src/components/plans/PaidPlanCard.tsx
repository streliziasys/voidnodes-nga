
import React from "react";
import { cn } from "@/lib/utils";
import { HardDrive, Cpu, MemoryStick } from "lucide-react";
import { motion } from "framer-motion";

interface PlanProps {
  name: string;
  price: number;
  ram: string;
  cpu: string;
  storage: string;
  index: number;
}

const PaidPlanCard = ({ name, price, ram, cpu, storage, index }: PlanProps) => {
  const handleBuyNow = () => {
    window.open("https://discord.gg/vdx", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden",
        "border border-void-accent/30 hover:border-void-accent/60",
        "shadow-xl shadow-void-accent/10 hover:shadow-void-accent/20",
        "transition-all duration-500 group glint-effect"
      )}
    >
      {/* Enhanced price tag */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-void-accent to-void-glow text-white px-16 py-2 text-sm font-bold shadow-lg"
      >
        ${price}
      </motion.div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-accent/5 to-void-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Plan name with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="relative z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-4 text-glow">
          {name}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-void-accent to-void-glow mt-4 rounded-full"
          />
        </h3>
      </motion.div>
      
      <div className="flex-grow space-y-6 relative z-10">
        {/* Enhanced specs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="flex items-center space-x-4 text-gray-200 hover-lift"
        >
          <div className="p-3 rounded-xl glass-card border border-void-accent/20 group-hover:border-void-accent/50 transition-all">
            <MemoryStick size={20} className="text-void-accent cpu-spin" />
          </div>
          <span className="text-lg font-medium">{ram} RAM</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="flex items-center space-x-4 text-gray-200 hover-lift"
        >
          <div className="p-3 rounded-xl glass-card border border-void-accent/20 group-hover:border-void-accent/50 transition-all">
            <Cpu size={20} className="text-void-accent hdd-pulse" />
          </div>
          <span className="text-lg font-medium">{cpu}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="flex items-center space-x-4 text-gray-200 hover-lift"
        >
          <div className="p-3 rounded-xl glass-card border border-void-accent/20 group-hover:border-void-accent/50 transition-all sparkle">
            <HardDrive size={20} className="text-void-accent" />
          </div>
          <span className="text-lg font-medium">{storage} disk</span>
        </motion.div>
      </div>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.6 }}
        onClick={handleBuyNow}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 glass-card border-2 border-void-accent/50 hover:border-void-accent text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-void-accent/20 text-lg relative z-10 glint-effect hypnotic-glow"
      >
        Buy Now
      </motion.button>
    </motion.div>
  );
};

export default PaidPlanCard;
