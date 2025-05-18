
import React, { useEffect, useRef } from "react";
import PaidPlanCard from "./PaidPlanCard";

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
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-background-pulse');
        } else {
          entry.target.classList.remove('animate-background-pulse');
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative z-10 opacity-0 animate-fade-in"
      style={{ animationDelay: '150ms' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {PAID_PLANS.map((plan, index) => (
          <PaidPlanCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            ram={plan.ram}
            cpu={plan.cpu}
            storage={plan.storage}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-12 space-y-6">
        <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-xl font-bold text-white mb-4">Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> Full Root Access
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> DDoS Protection
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> 99.9% Uptime Guarantee
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> Flexible Billing
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✕</span> No IPv4
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> Payment: Crypto Only, No Refunds
            </li>
          </ul>
        </div>
        
        <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <h3 className="text-xl font-bold text-white mb-4">System Specs</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> 512GB DDR4 RAM / 28 Cores / 56 Threads
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> 2.5TB Disk
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> Xeon E5-2680 v4 @ 2.40GHz
            </li>
            <li className="flex items-center">
              <span className="text-void-accent mr-2">✓</span> USA Hosting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaidPlansSection;
