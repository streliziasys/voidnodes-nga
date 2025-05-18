
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import FreeRewardCard from "./FreeRewardCard";
import { ChevronDown } from "lucide-react";

const INVITE_REWARDS = [
  {
    title: "Invite Tier 1",
    ram: "8GB",
    cpu: "2 cores",
    storage: "64GB",
    requirement: "3x invites"
  },
  {
    title: "Invite Tier 2",
    ram: "16GB",
    cpu: "4 cores",
    storage: "128GB",
    requirement: "6x invites"
  },
  {
    title: "Invite Tier 3",
    ram: "24GB",
    cpu: "6 cores",
    storage: "150GB",
    requirement: "9x invites"
  },
  {
    title: "Invite Tier 4",
    ram: "32GB",
    cpu: "8 cores",
    storage: "198GB",
    requirement: "12x invites"
  },
  {
    title: "Invite Tier 5",
    ram: "48GB",
    cpu: "12 cores",
    storage: "220GB",
    requirement: "16x invites"
  },
  {
    title: "Invite Tier 6",
    ram: "64GB",
    cpu: "16 cores",
    storage: "245GB",
    requirement: "24x invites"
  },
  {
    title: "Invite Tier 7",
    ram: "96GB",
    cpu: "18 cores",
    storage: "350GB",
    requirement: "35x invites"
  }
];

const BOOST_REWARDS = [
  {
    title: "Boost Tier 1",
    ram: "32GB",
    cpu: "8 cores",
    storage: "196GB",
    requirement: "2x Boost"
  },
  {
    title: "Boost Tier 2",
    ram: "48GB",
    cpu: "12 cores",
    storage: "256GB",
    requirement: "4x Boost"
  },
  {
    title: "Boost Tier 3",
    ram: "64GB",
    cpu: "24 cores",
    storage: "384GB",
    requirement: "6x Boost"
  }
];

const FreeRewardsSection = () => {
  const [activeSection, setActiveSection] = useState<'invite' | 'boost' | 'both'>('both');

  return (
    <div className="relative z-10 space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
      {/* Collapsible sections */}
      <div className="space-y-6">
        {/* Invite Rewards Section */}
        <div className="glass-card rounded-xl overflow-hidden">
          <button 
            onClick={() => setActiveSection(activeSection === 'invite' ? 'both' : 'invite')}
            className="w-full flex justify-between items-center p-4 bg-void-dark-gray/50 hover:bg-void-dark-gray/70 transition-colors"
          >
            <h3 className="text-lg font-bold text-white">Invite Rewards</h3>
            <ChevronDown 
              size={20} 
              className={cn(
                "text-void-accent transition-transform duration-300",
                (activeSection === 'invite' || activeSection === 'both') && "rotate-180"
              )} 
            />
          </button>
          
          <div 
            className={cn(
              "transition-all duration-300 overflow-hidden",
              (activeSection === 'invite' || activeSection === 'both') 
                ? "max-h-[2000px] opacity-100" 
                : "max-h-0 opacity-0"
            )}
          >
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {INVITE_REWARDS.map((reward, index) => (
                  <FreeRewardCard
                    key={reward.title}
                    title={reward.title}
                    ram={reward.ram}
                    cpu={reward.cpu}
                    storage={reward.storage}
                    requirement={reward.requirement}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="mt-4 p-4 border border-void-accent/20 bg-void-dark-gray/30 rounded-lg text-gray-300 text-sm">
                <h4 className="font-semibold mb-2 text-white">Notice</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span> 
                    <span>No IPv4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-void-accent mr-2">✓</span> 
                    <span>Rewards can be stacked</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-void-accent mr-2">ℹ</span> 
                    <span>Voidnodes reserves right to revoke if needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Boost Rewards Section */}
        <div className="glass-card rounded-xl overflow-hidden">
          <button 
            onClick={() => setActiveSection(activeSection === 'boost' ? 'both' : 'boost')}
            className="w-full flex justify-between items-center p-4 bg-void-dark-gray/50 hover:bg-void-dark-gray/70 transition-colors"
          >
            <h3 className="text-lg font-bold text-white">Boost Rewards</h3>
            <ChevronDown 
              size={20} 
              className={cn(
                "text-void-accent transition-transform duration-300",
                (activeSection === 'boost' || activeSection === 'both') && "rotate-180"
              )} 
            />
          </button>
          
          <div 
            className={cn(
              "transition-all duration-300 overflow-hidden",
              (activeSection === 'boost' || activeSection === 'both') 
                ? "max-h-[1000px] opacity-100" 
                : "max-h-0 opacity-0"
            )}
          >
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {BOOST_REWARDS.map((reward, index) => (
                  <FreeRewardCard
                    key={reward.title}
                    title={reward.title}
                    ram={reward.ram}
                    cpu={reward.cpu}
                    storage={reward.storage}
                    requirement={reward.requirement}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="mt-4 p-4 border border-void-accent/20 bg-void-dark-gray/30 rounded-lg text-gray-300 text-sm">
                <h4 className="font-semibold mb-2 text-white">Notice</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span> 
                    <span>No IPv4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-void-accent mr-2">✓</span> 
                    <span>Alt boosts allowed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-void-accent mr-2">✓</span> 
                    <span>Lifetime VPS even after boost ends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-void-accent mr-2">ℹ</span> 
                    <span>Revocable if abused</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeRewardsSection;
