
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

const CleanBreadcrumb = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2 text-sm mb-8"
    >
      <Link 
        to="/" 
        className="flex items-center text-gray-400 hover:text-void-accent transition-colors group"
      >
        <Home size={16} className="mr-1 group-hover:scale-110 transition-transform" />
        Home
      </Link>
      <ChevronRight size={14} className="text-gray-600" />
      <span className="text-white font-medium">Free VPS Rewards</span>
    </motion.nav>
  );
};

export default CleanBreadcrumb;
