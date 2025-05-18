
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactItem = ({ 
  icon, 
  title, 
  description, 
  link, 
  linkText 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string; 
  linkText: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:neon-glow transition-all"
    >
      <div className="p-3 rounded-full bg-void-accent/10 border border-void-accent/30 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 rounded-md bg-void-accent/10 border border-void-accent/30 hover:bg-void-accent/20 hover:border-void-accent text-white transition-all"
      >
        {linkText}
        <Send size={14} className="ml-2" />
      </a>
    </motion.div>
  );
};

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact-section" className="py-24 px-4 relative" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute -bottom-[400px] -right-[300px] w-[800px] h-[800px] bg-void-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">
            Get In <span className="text-void-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or need support? Reach out to our friendly team through the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactItem 
            icon={<Mail size={24} className="text-void-accent" />}
            title="Email Support"
            description="Get help with your VPS, account, or payment issues via email."
            link="mailto:support@voidnodes.xyz"
            linkText="Email Us"
          />
          
          <ContactItem 
            icon={<MessageCircle size={24} className="text-void-accent" />}
            title="Discord Community"
            description="Join our Discord community for instant support and updates."
            link="https://discord.gg/vdx"
            linkText="Join Discord"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
