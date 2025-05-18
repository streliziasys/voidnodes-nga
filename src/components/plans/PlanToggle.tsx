
import React from "react";
import { cn } from "@/lib/utils";

interface PlanToggleProps {
  activeTab: 'paid' | 'free';
  setActiveTab: (tab: 'paid' | 'free') => void;
}

const PlanToggle = ({ activeTab, setActiveTab }: PlanToggleProps) => {
  return (
    <div className="flex justify-center mb-10 z-10 relative">
      <div className="bg-void-dark-gray/50 backdrop-blur-md p-1 rounded-lg shadow-lg border border-void-accent/10 inline-flex">
        <button
          onClick={() => setActiveTab('paid')}
          className={cn(
            "px-6 py-3 text-sm md:text-base font-medium rounded-md transition-all duration-300 relative",
            activeTab === 'paid'
              ? "bg-void-accent text-white shadow-lg animate-pulse-glow"
              : "bg-transparent text-gray-400 hover:text-white"
          )}
        >
          <span className="relative z-10">Paid VPS Plans</span>
          {activeTab === 'paid' && (
            <span className="absolute inset-0 bg-gradient-to-r from-void-accent/80 to-void-glow/80 rounded-md blur opacity-70"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('free')}
          className={cn(
            "px-6 py-3 text-sm md:text-base font-medium rounded-md transition-all duration-300 relative",
            activeTab === 'free'
              ? "bg-void-accent text-white shadow-lg animate-pulse-glow"
              : "bg-transparent text-gray-400 hover:text-white"
          )}
        >
          <span className="relative z-10">Free VPS Rewards</span>
          {activeTab === 'free' && (
            <span className="absolute inset-0 bg-gradient-to-r from-void-accent/80 to-void-glow/80 rounded-md blur opacity-70"></span>
          )}
        </button>
      </div>
    </div>
  );
};

export default PlanToggle;
