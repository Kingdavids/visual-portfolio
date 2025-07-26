import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/storytelling', label: 'Storytelling' },
    { path: '/videography', label: 'Videography' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass px-6 py-4"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          David Ogunniyi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-4 pb-2 space-y-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
