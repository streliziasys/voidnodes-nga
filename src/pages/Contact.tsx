
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-void-accent mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Homepage
        </Link>
        
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk"
          >
            Contact <span className="text-void-accent">Us</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            Have questions? We're here to help you with any inquiries about our services.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-void-accent/10 border border-void-accent/30 mr-4">
                  <Mail size={24} className="text-void-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Support</h3>
                  <a 
                    href="mailto:support@voidnodes.xyz" 
                    className="text-gray-300 hover:text-void-accent transition-colors"
                  >
                    support@voidnodes.xyz
                  </a>
                  <p className="mt-1 text-sm text-gray-400">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-void-accent/10 border border-void-accent/30 mr-4">
                  <MessageCircle size={24} className="text-void-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Discord Support</h3>
                  <a 
                    href="https://discord.gg/vdx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-void-accent transition-colors"
                  >
                    discord.gg/vdx
                  </a>
                  <p className="mt-1 text-sm text-gray-400">
                    Join our community for instant support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={cn(
                    "w-full px-4 py-2 rounded-md",
                    "bg-void-dark-gray/80 border border-void-accent/20",
                    "focus:border-void-accent focus:outline-none focus:ring-1 focus:ring-void-accent/50",
                    "text-white placeholder-gray-500"
                  )}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={cn(
                    "w-full px-4 py-2 rounded-md",
                    "bg-void-dark-gray/80 border border-void-accent/20",
                    "focus:border-void-accent focus:outline-none focus:ring-1 focus:ring-void-accent/50",
                    "text-white placeholder-gray-500"
                  )}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={cn(
                    "w-full px-4 py-2 rounded-md",
                    "bg-void-dark-gray/80 border border-void-accent/20",
                    "focus:border-void-accent focus:outline-none focus:ring-1 focus:ring-void-accent/50",
                    "text-white placeholder-gray-500"
                  )}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={cn(
                  "px-6 py-3 rounded-lg w-full flex justify-center items-center",
                  "bg-void-accent hover:bg-void-accent/90 transition-all",
                  "shadow-lg shadow-void-accent/20 text-white font-medium"
                )}
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
