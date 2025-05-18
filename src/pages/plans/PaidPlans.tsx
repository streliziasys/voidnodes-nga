
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import PaidPlansSection from "@/components/plans/PaidPlansSection";

const PaidPlansPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="container mx-auto px-4 mb-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-400 hover:text-void-accent mb-12 transition-colors border border-gray-700 hover:border-void-accent/40 px-4 py-2 rounded-lg"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Homepage
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk relative inline-block">
            Paid <span className="text-void-accent">VPS Plans</span>
            <div className="absolute -inset-2 blur-2xl bg-void-accent/10 -z-10 rounded-full"></div>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
            Choose from our range of affordable VPS plans with powerful specs and full root access.
            All plans come with DDoS protection and 99.9% uptime guarantee.
          </p>
        </div>
      </div>
      
      {/* Add a decorative element */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-void-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-void-glow/5 rounded-full filter blur-3xl"></div>
      
      <PaidPlansSection />
    </PageTransition>
  );
};

export default PaidPlansPage;
