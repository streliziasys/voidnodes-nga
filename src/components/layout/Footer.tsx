
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-void-dark-gray/30 border-t border-void-accent/10 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white font-space-grotesk">
                Void<span className="text-void-accent"> Node</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Free and Paid VPS at Unbeatable Prices
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plans/paid" className="text-gray-400 hover:text-void-accent transition-colors text-sm">
                  Paid VPS Plans
                </Link>
              </li>
              <li>
                <Link to="/plans/free" className="text-gray-400 hover:text-void-accent transition-colors text-sm">
                  Free VPS Rewards
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-void-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-void-accent transition-colors text-sm">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:support@voidnodes.xyz" 
                className="flex items-center text-gray-400 hover:text-void-accent transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                support@voidnodes.xyz
              </a>
              <a 
                href="https://discord.gg/vdx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-void-accent transition-colors text-sm"
              >
                <MessageCircle size={16} className="mr-2" />
                discord.gg/vdx
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-void-accent/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Void Node. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
