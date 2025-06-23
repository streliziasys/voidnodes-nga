
import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Phone, MapPin } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import CleanBreadcrumb from "@/components/ui/CleanBreadcrumb";
import TypewriterText from "@/components/ui/TypewriterText";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  return (
    <PageTransition className="pt-24">
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-void-glow/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-void-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <CleanBreadcrumb />
          
          <div className="text-center mb-16">
            <TypewriterText
              text="Contact Us"
              className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk"
              speed={80}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-32 h-1 bg-gradient-to-r from-void-accent to-void-glow mx-auto mb-8 rounded-full"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              Have questions? We're here to help you with any inquiries about our services.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-8 md:p-10 rounded-2xl border border-void-accent/10 hover:border-void-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-void-accent/10"
            >
              <div className="flex items-center mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-void-accent to-void-glow rounded-full mr-4"></div>
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Get In Touch</h2>
              </div>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 rounded-xl bg-void-accent/10 border border-void-accent/20 mr-6 group-hover:bg-void-accent/20 transition-all duration-300">
                    <Mail size={24} className="text-void-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white">Email Support</h3>
                    <a 
                      href="mailto:admin@voidhost.pro" 
                      className="text-gray-300 hover:text-void-accent transition-colors text-lg"
                    >
                      admin@voidhost.pro
                    </a>
                    <p className="mt-2 text-sm text-gray-400">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 rounded-xl bg-void-accent/10 border border-void-accent/20 mr-6 group-hover:bg-void-accent/20 transition-all duration-300">
                    <MessageCircle size={24} className="text-void-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white">Discord Support</h3>
                    <a 
                      href="https://discord.gg/vdx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-void-accent transition-colors text-lg"
                    >
                      discord.gg/vdx
                    </a>
                    <p className="mt-2 text-sm text-gray-400">
                      Join our community for instant support
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-8 md:p-10 rounded-2xl border border-void-accent/10 hover:border-void-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-void-accent/10"
            >
              <div className="flex items-center mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-void-accent to-void-glow rounded-full mr-4"></div>
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">Send a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl",
                        "bg-void-dark-gray/50 border border-void-accent/20",
                        "focus:border-void-accent focus:outline-none focus:ring-2 focus:ring-void-accent/20",
                        "text-white placeholder-gray-500",
                        "transition-all duration-300"
                      )}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl",
                        "bg-void-dark-gray/50 border border-void-accent/20",
                        "focus:border-void-accent focus:outline-none focus:ring-2 focus:ring-void-accent/20",
                        "text-white placeholder-gray-500",
                        "transition-all duration-300"
                      )}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl resize-none",
                      "bg-void-dark-gray/50 border border-void-accent/20",
                      "focus:border-void-accent focus:outline-none focus:ring-2 focus:ring-void-accent/20",
                      "text-white placeholder-gray-500",
                      "transition-all duration-300"
                    )}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-8 py-4 rounded-xl w-full flex justify-center items-center",
                    "bg-gradient-to-r from-void-accent to-void-glow hover:from-void-accent/90 hover:to-void-glow/90",
                    "transition-all duration-300",
                    "shadow-lg shadow-void-accent/20 hover:shadow-void-accent/30",
                    "text-white font-semibold text-lg",
                    "border border-void-accent/30 hover:border-void-accent/50"
                  )}
                >
                  Send Message
                  <Send size={20} className="ml-3" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
