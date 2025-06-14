
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Server, Users, Cpu, MessageCircle } from "lucide-react";

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
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-void-accent/10 transition-all duration-500 border border-void-accent/10 hover:border-void-accent/20 group"
    >
      <motion.div 
        className="p-4 bg-void-dark-gray/30 rounded-xl w-fit mb-6 border border-void-accent/20 group-hover:bg-void-accent/10 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white font-space-grotesk">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Server className="text-void-accent" size={28} />,
      title: "Scalable & Fast Infrastructure",
      description: "Our servers are optimized for performance, with flexible resources to grow with your needs.",
    },
    {
      icon: <Shield className="text-void-accent" size={28} />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. We believe in clear, straightforward pricing models.",
    },
    {
      icon: <Users className="text-void-accent" size={28} />,
      title: "Invite & Boost Rewards",
      description: "Earn free VPS resources by inviting friends or boosting our Discord server.",
    },
    {
      icon: <Cpu className="text-void-accent" size={28} />,
      title: "Crypto-Only for Privacy",
      description: "We accept cryptocurrency payments only, ensuring your privacy and security.",
    },
    {
      icon: <MessageCircle className="text-void-accent" size={28} />,
      title: "Friendly Discord Support",
      description: "Need help? Our responsive support team is just a message away on Discord.",
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about-section" className="py-24 px-4 relative" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-void-accent/3 to-transparent opacity-80 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space-grotesk">
            What is <span className="text-void-accent">Void Node</span>?
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Void Node is a modern hosting solution offering free and paid VPS servers 
            to power your projects, Minecraft servers, bots, and more. Whether you're 
            a developer or hobbyist, we've got unbeatable deals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1 + 0.6}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
