
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled 
            ? "py-4 glass-nav shadow-2xl shadow-black/20" 
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm" />
            </motion.div>
            <motion.span 
              whileHover={{ x: 2 }}
              className="text-2xl font-black text-white tracking-tight"
            >
              Void<span className="gradient-text">Node</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-2xl">
              {routes.map((route, index) => (
                <motion.div
                  key={route.path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                >
                  <Link
                    to={route.path}
                    className={cn(
                      "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      "hover:bg-white/5 hover:text-white",
                      location.pathname === route.path 
                        ? "text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30" 
                        : "text-slate-300"
                    )}
                  >
                    {route.name}
                    {location.pathname === route.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-400/20"
                        initial={false}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl glass-card hover:bg-white/5 transition-all duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X size={24} className="text-indigo-400" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="absolute right-0 top-0 h-full w-80 glass-nav border-l border-white/10 p-8 pt-24"
            >
              <div className="space-y-4">
                {routes.map((route, index) => (
                  <motion.div
                    key={route.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={route.path}
                      className={cn(
                        "block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300",
                        "hover:bg-white/5 hover:text-white",
                        location.pathname === route.path 
                          ? "text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30" 
                          : "text-slate-300"
                      )}
                    >
                      {route.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
