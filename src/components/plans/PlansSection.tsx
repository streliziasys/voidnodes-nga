
import React, { useState, useEffect } from "react";
import PlanToggle from "./PlanToggle";
import PaidPlansSection from "./PaidPlansSection";
import FreeRewardsSection from "./FreeRewardsSection";

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState<'paid' | 'free'>('paid');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('plans-section') as HTMLElement);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="plans-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-void-background overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-void-accent/5 to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute -bottom-[500px] -left-[300px] w-[800px] h-[800px] bg-void-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-[400px] -right-[300px] w-[700px] h-[700px] bg-void-glow/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-void-glow/90 relative inline-block">
            Choose Your Plan
            <div className="absolute -inset-1 blur-md bg-void-accent/20 -z-10 rounded-full"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're going paid or free, Voidnodes has your back.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Plan toggle */}
        <PlanToggle activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Plan sections - updated to always be visible but with display control */}
        <div className="relative">
          <div className={`${activeTab === 'paid' ? 'block' : 'hidden'}`}>
            <PaidPlansSection />
          </div>
          
          <div className={`${activeTab === 'free' ? 'block' : 'hidden'}`}>
            <FreeRewardsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
