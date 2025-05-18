
import React, { useRef } from "react";
import PaidPlanCard from "./PaidPlanCard";
import { useInView } from "framer-motion";

const PAID_PLANS = [
  {
    name: "Nano",
    price: 1,
    ram: "8GB",
    cpu: "2 Core",
    storage: "30GB"
  },
  {
    name: "Basic",
    price: 2,
    ram: "16GB",
    cpu: "4 Cores",
    storage: "50GB"
  },
  {
    name: "Standard",
    price: 4,
    ram: "24GB",
    cpu: "6 Cores",
    storage: "100GB"
  },
  {
    name: "Pro",
    price: 6,
    ram: "32GB",
    cpu: "8 Cores",
    storage: "256GB"
  },
  {
    name: "Elite",
    price: 10,
    ram: "48GB",
    cpu: "12 Cores",
    storage: "384GB"
  },
  {
    name: "Extreme",
    price: 12,
    ram: "64GB",
    cpu: "24 Cores",
    storage: "512GB"
  }
];

const PaidPlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <div 
      ref={sectionRef}
      className="container mx-auto px-4 relative z-10 max-w-7xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PAID_PLANS.map((plan, index) => (
          <div key={plan.name}>
            <PaidPlanCard
              name={plan.name}
              price={plan.price}
              ram={plan.ram}
              cpu={plan.cpu}
              storage={plan.storage}
              index={index}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16 space-y-8">
        <div className="glass-card rounded-xl p-8 border border-void-accent/30 shadow-lg shadow-void-accent/5">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-void-accent/20 p-2 rounded-lg mr-3">
              <span className="text-void-accent">✓</span>
            </span>
            Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> Full Root Access
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> DDoS Protection
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> 99.9% Uptime Guarantee
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> Flexible Billing
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2 bg-red-500/10 p-1 rounded-full">✕</span> No IPv4
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> Payment: Crypto Only, No Refunds
            </li>
          </ul>
        </div>
        
        <div className="glass-card rounded-xl p-8 border border-void-accent/30 shadow-lg shadow-void-accent/5">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-void-accent/20 p-2 rounded-lg mr-3">
              <span className="text-void-accent">✓</span>
            </span>
            System Specs
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> 512GB DDR4 RAM / 28 Cores / 56 Threads
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> 2.5TB Disk
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> Xeon E5-2680 v4 @ 2.40GHz
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2 bg-void-accent/10 p-1 rounded-full">✓</span> USA Hosting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaidPlansSection;
