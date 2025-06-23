
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Void<span className="gradient-text">Node</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Next-generation VPS hosting platform offering unbeatable performance 
              and pricing for developers worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:support@voidnodes.xyz"
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass-card p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
              </motion.a>
              <motion.a
                href="https://discord.gg/vdx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass-card p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-indigo-400" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg">Hosting</h3>
            <ul className="space-y-4">
              {[
                { name: "Paid VPS Plans", path: "/plans/paid" },
                { name: "Free VPS Rewards", path: "/plans/free" },
                { name: "Performance", path: "/about" },
                { name: "Pricing", path: "/plans/paid" }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Support", path: "/contact" },
                { name: "Community", href: "https://discord.gg/vdx" }
              ].map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg">Stay Updated</h3>
            <p className="text-slate-400">
              Join our community for the latest updates and exclusive offers.
            </p>
            <motion.a
              href="https://discord.gg/vdx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-xl border border-indigo-400/30 hover:bg-indigo-500/10 hover:border-indigo-400/50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-indigo-400" />
              <span className="text-white font-medium">Join Discord</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} VoidNode. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for the community</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
