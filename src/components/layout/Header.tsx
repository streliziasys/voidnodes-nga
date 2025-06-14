
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const routes = [
    { name: "Home", path: "/" },
    { name: "Paid Plans", path: "/plans/paid" },
    { name: "Free VPS", path: "/plans/free" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "py-3 glass-nav shadow-lg shadow-void-accent/10" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-white font-space-grotesk relative"
          >
            Void<span className="text-void-accent animated-gradient bg-clip-text text-transparent">Nodes</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-void-accent/20 to-void-glow/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.path}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={route.path}
                className={cn(
                  "text-sm font-medium transition-all relative py-2 px-3 rounded-lg glint-effect hover-lift",
                  location.pathname === route.path 
                    ? "text-void-accent bg-void-accent/10 neon-glow" 
                    : "text-gray-300 hover:text-white hover:bg-void-accent/5"
                )}
              >
                {route.name}
                <motion.span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-void-accent to-void-glow transform transition-transform duration-300 rounded-full",
                    location.pathname === route.path ? "scale-x-100" : "scale-x-0"
                  )}
                  whileHover={{ scaleX: 1 }}
                ></motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none hover-lift"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X size={24} className="text-void-accent" />
            ) : (
              <Menu size={24} />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          pointerEvents: isMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 glass-nav z-40 lg:hidden flex flex-col pt-20"
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -50,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                to={route.path}
                className={cn(
                  "text-xl font-medium transition-all relative py-3 px-6 rounded-xl glint-effect hover-lift",
                  location.pathname === route.path 
                    ? "text-void-accent bg-void-accent/20 neon-glow" 
                    : "text-gray-300 hover:text-white hover:bg-void-accent/10"
                )}
              >
                {route.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
