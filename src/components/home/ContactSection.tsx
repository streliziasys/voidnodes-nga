
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactItem = ({ 
  icon, 
  title, 
  description, 
  link, 
  linkText,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string; 
  linkText: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-void-accent/10 transition-all duration-500 border border-void-accent/10 hover:border-void-accent/20 group"
    >
      <motion.div 
        className="p-4 rounded-xl bg-void-accent/10 border border-void-accent/20 mb-6 group-hover:bg-void-accent/20 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl font-bold mb-3 text-white font-space-grotesk">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-void-accent/20 to-void-glow/20 border border-void-accent/30 hover:from-void-accent/30 hover:to-void-glow/30 hover:border-void-accent/50 text-white transition-all duration-300 font-medium"
      >
        {linkText}
        <Send size={16} className="ml-2" />
      </motion.a>
    </motion.div>
  );
};

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact-section" className="py-24 px-4 relative" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute -bottom-[400px] -right-[300px] w-[800px] h-[800px] bg-void-accent/3 rounded-full blur-[200px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space-grotesk">
            Get In <span className="text-void-accent">Touch</span>
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
            className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Have questions or need support? Reach out to our friendly team through the channels below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ContactItem 
            icon={<Mail size={28} className="text-void-accent" />}
            title="Email Support"
            description="Get help with your VPS, account, or payment issues via email."
            link="mailto:support@voidnodes.xyz"
            linkText="Email Us"
            delay={0.6}
          />
          
          <ContactItem 
            icon={<MessageCircle size={28} className="text-void-accent" />}
            title="Discord Community"
            description="Join our Discord community for instant support and updates."
            link="https://discord.gg/vdx"
            linkText="Join Discord"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
