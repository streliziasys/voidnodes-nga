
import React, { useEffect, useRef } from "react";
import PaidPlanCard from "./PaidPlanCard";
import { motion, useInView } from "framer-motion";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {PAID_PLANS.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PaidPlanCard
              name={plan.name}
              price={plan.price}
              ram={plan.ram}
              cpu={plan.cpu}
              storage={plan.storage}
              index={index}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-card rounded-xl p-6"
        >
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="glass-card rounded-xl p-6"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default PaidPlansSection;
