'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermeture automatique en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-red-600 font-bold text-2xl tracking-wider">
              MISSION <span className="text-black">POSSIBLE</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/" className="text-black hover:text-red-600 font-medium">Accueil</a>
              <a href="/services" className="text-black hover:text-red-600 font-medium">Services</a>
              
              {/* Dropdown Desktop */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-black hover:text-red-600 font-medium"
                >
                  Plus
                  {dropdownOpen ? (
                    <ChevronUp className="ml-1" size={18} />
                  ) : (
                    <ChevronDown className="ml-1" size={18} />
                  )}
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                    >
                      <a 
                        href="/blog" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Blog
                      </a>
                      <a 
                        href="/faq" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        FAQ
                      </a>
                      <a 
                        href="/garanties" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Garanties
                      </a>
                      <a 
                        href="/mentions-legales" 
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Mentions légales
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/about" className="text-black hover:text-red-600 font-medium">À propos</a>
              <a href="/contact" className="text-black hover:text-red-600 font-medium">Contact</a>
              <a href="/reservation" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">Réserver</a>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-red-600"
              aria-label="Menu mobile"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="px-4 py-2 space-y-2">
              <a 
                href="/" 
                className="block py-2 text-black hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="/services" 
                className="block py-2 text-black hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              
              {/* Dropdown Mobile */}
              <div className="py-2">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-full text-black hover:text-red-600"
                >
                  Plus
                  {dropdownOpen ? (
                    <ChevronUp className="ml-1" size={18} />
                  ) : (
                    <ChevronDown className="ml-1" size={18} />
                  )}
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden"
                    >
                      <a 
                        href="/blog" 
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Blog
                      </a>
                      <a 
                        href="/faq" 
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        FAQ
                      </a>
                      <a 
                        href="/garanties" 
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Garanties
                      </a>
                      <a 
                        href="/mentions-legales" 
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Mentions légales
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="/about" 
                className="block py-2 text-black hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
              <a 
                href="/contact" 
                className="block py-2 text-black hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a 
                href="/reservation" 
                className="block mt-2 bg-red-600 text-white px-4 py-2 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Réserver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}