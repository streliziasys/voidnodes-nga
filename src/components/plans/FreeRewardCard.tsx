
import React from "react";
import { cn } from "@/lib/utils";
import { HardDrive, Cpu, MemoryStick } from "lucide-react";

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
    <div
      className={cn(
        "glass-card rounded-xl p-5 flex flex-col",
        "opacity-0 animate-fade-in transition-all duration-300",
        "hover:neon-glow hover:scale-[1.02] hover:border-void-accent/30",
      )}
      style={{ animationDelay: `${index * 75}ms` }}
    >
      <div className="absolute -right-12 top-6 rotate-45 bg-void-light-gray/80 text-white px-12 text-sm font-semibold">
        {requirement}
      </div>
      
      <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
        {title}
      </h4>
      
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="flex flex-col items-center p-2 rounded-md bg-void-dark-gray/50 border border-void-accent/10 hover:border-void-accent/30 transition-all text-center">
          <MemoryStick size={16} className="text-void-accent mb-1" />
          <span className="text-sm">{ram}</span>
        </div>
        
        <div className="flex flex-col items-center p-2 rounded-md bg-void-dark-gray/50 border border-void-accent/10 hover:border-void-accent/30 transition-all text-center">
          <Cpu size={16} className="text-void-accent mb-1" />
          <span className="text-sm">{cpu}</span>
        </div>
        
        <div className="flex flex-col items-center p-2 rounded-md bg-void-dark-gray/50 border border-void-accent/10 hover:border-void-accent/30 transition-all text-center">
          <HardDrive size={16} className="text-void-accent mb-1" />
          <span className="text-sm">{storage}</span>
        </div>
      </div>
    </div>
  );
};

export default FreeRewardCard;
