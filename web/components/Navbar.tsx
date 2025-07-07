'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <a href="/about" className="text-black hover:text-red-600 font-medium">À propos</a>
              <a href="/contact" className="text-black hover:text-red-600 font-medium">Contact</a>
              <a href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">Réserver</a>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-red-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <a href="#" className="block py-2 text-black hover:text-red-600">Accueil</a>
          <a href="#" className="block py-2 text-black hover:text-red-600">Services</a>
          <a href="#" className="block py-2 text-black hover:text-red-600">À propos</a>
          <a href="/contact" className="block py-2 text-black hover:text-red-600">Contact</a>
          <a href="#" className="block mt-2 bg-red-600 text-white px-4 py-2 rounded-md text-center">Réserver</a>
        </div>
      )}
    </nav>
  );
}