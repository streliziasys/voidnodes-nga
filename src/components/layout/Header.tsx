
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-void-background/90 backdrop-blur-md border-b border-void-accent/20 shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white font-space-grotesk">
            Void<span className="text-void-accent">Nodes</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-sm font-medium transition-all relative py-2",
                location.pathname === route.path 
                  ? "text-void-accent" 
                  : "text-gray-300 hover:text-white"
              )}
            >
              {route.name}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-void-accent transform transition-transform duration-300",
                  location.pathname === route.path ? "scale-x-100" : "scale-x-0"
                )}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-void-accent" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-void-background/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-300 flex flex-col pt-20",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-8"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-xl font-medium transition-all relative py-2 px-4",
                location.pathname === route.path 
                  ? "text-void-accent" 
                  : "text-gray-300 hover:text-white"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
