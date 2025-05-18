
import React, { useEffect, useRef } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    // Create staggered animation delay
    card.style.animationDelay = `${index * 100}ms`;
    
    const addGlint = () => {
      card.classList.add("animate-glint");
      setTimeout(() => {
        card.classList.remove("animate-glint");
      }, 1500);
    };
    
    // Add periodic glint effect
    const glintInterval = setInterval(addGlint, 5000 + (index * 1000));
    
    return () => {
      clearInterval(glintInterval);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col glint-effect",
        "opacity-0 animate-fade-in",
        "transition-all duration-300 hover:scale-[1.02]",
        "hover:neon-glow hover:border-void-accent/40",
        "group relative overflow-hidden"
      )}
    >
      {/* Price tag */}
      <div className="absolute -right-12 top-6 rotate-45 bg-void-accent/80 text-white px-12 text-sm font-semibold">
        ${price}
      </div>
      
      {/* Card content */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 mt-2">
        {name}
        <div className="h-1 w-20 bg-gradient-to-r from-void-accent to-void-glow mt-2 rounded-full"></div>
      </h3>
      
      <div className="flex-grow space-y-4">
        {/* RAM */}
        <div className="flex items-center space-x-3 text-gray-200">
          <div className="p-2 rounded-md bg-void-dark-gray/50 border border-void-accent/10 group-hover:border-void-accent/30 transition-all">
            <MemoryStick size={18} className="text-void-accent" />
          </div>
          <span>{ram} RAM</span>
        </div>
        
        {/* CPU */}
        <div className="flex items-center space-x-3 text-gray-200">
          <div className="p-2 rounded-md bg-void-dark-gray/50 border border-void-accent/10 group-hover:border-void-accent/30 transition-all">
            <Cpu size={18} className="text-void-accent" />
          </div>
          <span>{cpu}</span>
        </div>
        
        {/* Storage */}
        <div className="flex items-center space-x-3 text-gray-200">
          <div className="p-2 rounded-md bg-void-dark-gray/50 border border-void-accent/10 group-hover:border-void-accent/30 transition-all">
            <HardDrive size={18} className="text-void-accent" />
          </div>
          <span>{storage} disk</span>
        </div>
      </div>
      
      <button className="mt-6 bg-void-accent/10 border border-void-accent/30 hover:bg-void-accent/20 hover:border-void-accent text-white font-medium py-2 px-4 rounded-md transition-all group-hover:neon-glow">
        Select Plan
      </button>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="absolute inset-0 bg-void-accent opacity-5 blur-xl"></div>
      </div>
    </div>
  );
};

export default PaidPlanCard;
