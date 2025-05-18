
import React from "react";
import { cn } from "@/lib/utils";
import { HardDrive, Cpu, MemoryStick } from "lucide-react";

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
    <div 
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col",
        "relative overflow-hidden border border-void-accent/30",
        "shadow-lg shadow-void-accent/5",
        "transition-all duration-300 hover:scale-[1.02]",
        "hover:shadow-xl hover:shadow-void-accent/10",
        "hover:border-void-accent/50 group"
      )}
    >
      {/* Price tag */}
      <div className="absolute -right-12 top-6 rotate-45 bg-void-accent text-white px-12 text-sm font-semibold shadow-md">
        ${price}
      </div>
      
      {/* Card content */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 mt-2">
        {name}
        <div className="h-1 w-20 bg-gradient-to-r from-void-accent to-void-glow mt-3 rounded-full"></div>
      </h3>
      
      <div className="flex-grow space-y-4">
        {/* RAM */}
        <div className="flex items-center space-x-3 text-gray-200">
          <div className="p-2 rounded-md bg-void-dark-gray/60 border border-void-accent/20 group-hover:border-void-accent/40 transition-all">
            <MemoryStick size={18} className="text-void-accent" />
          </div>
          <span className="text-lg">{ram} RAM</span>
        </div>
        
        {/* CPU */}
        <div className="flex items-center space-x-3 text-gray-200">
          <div className="p-2 rounded-md bg-void-dark-gray/60 border border-void-accent/20 group-hover:border-void-accent/40 transition-all">
            <Cpu size={18} className="text-void-accent" />
          </div>
          <span className="text-lg">{cpu}</span>
        </div>
        
        {/* Storage */}
        <div className="flex items-center space-x-3 text-gray-200">
          <div className="p-2 rounded-md bg-void-dark-gray/60 border border-void-accent/20 group-hover:border-void-accent/40 transition-all">
            <HardDrive size={18} className="text-void-accent" />
          </div>
          <span className="text-lg">{storage} disk</span>
        </div>
      </div>
      
      <button 
        onClick={handleBuyNow}
        className="mt-8 bg-void-accent/20 border-2 border-void-accent/40 hover:bg-void-accent/30 hover:border-void-accent/60 text-white font-medium py-3 px-6 rounded-lg transition-all group-hover:shadow-md shadow-void-accent/30 text-lg"
      >
        Buy Now
      </button>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
        <div className="absolute inset-0 bg-void-accent opacity-5 blur-2xl"></div>
      </div>
    </div>
  );
};

export default PaidPlanCard;
