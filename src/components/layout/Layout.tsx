
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-void-background">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
