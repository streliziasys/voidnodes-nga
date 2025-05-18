
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Server, Users, Cpu, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl p-6 hover:neon-glow transition-all duration-300"
    >
      <div className="p-3 bg-void-dark-gray/50 rounded-lg w-fit mb-4 border border-void-accent/20">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Server className="text-void-accent" size={24} />,
      title: "Scalable & Fast Infrastructure",
      description: "Our servers are optimized for performance, with flexible resources to grow with your needs.",
    },
    {
      icon: <Shield className="text-void-accent" size={24} />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. We believe in clear, straightforward pricing models.",
    },
    {
      icon: <Users className="text-void-accent" size={24} />,
      title: "Invite & Boost Rewards",
      description: "Earn free VPS resources by inviting friends or boosting our Discord server.",
    },
    {
      icon: <Cpu className="text-void-accent" size={24} />,
      title: "Crypto-Only for Privacy",
      description: "We accept cryptocurrency payments only, ensuring your privacy and security.",
    },
    {
      icon: <MessageCircle className="text-void-accent" size={24} />,
      title: "Friendly Discord Support",
      description: "Need help? Our responsive support team is just a message away on Discord.",
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about-section" className="py-24 px-4 relative" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-void-accent/5 to-transparent opacity-60 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">
            What is <span className="text-void-accent">Voidnodes</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Voidnodes is a modern hosting solution offering free and paid VPS servers 
            to power your projects, Minecraft servers, bots, and more. Whether you're 
            a developer or hobbyist, we've got unbeatable deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
