import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-gray-800 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-serif">Celebrate</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavItem text="Home" />
          <NavItem text="Shop" />
          <NavItem text="About" />
          <NavItem text="Contact" />
        </div>
        
        <div className="hidden md:flex space-x-4">
          <IconButton icon={<Search size={20} />} />
          <IconButton icon={<ShoppingBag size={20} />} />
          <IconButton icon={<User size={20} />} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <NavItem text="Home" />
          <NavItem text="Shop" />
          <NavItem text="About" />
          <NavItem text="Contact" />
          <div className="flex justify-between mt-4">
            <IconButton icon={<Search size={20} />} />
            <IconButton icon={<ShoppingBag size={20} />} />
            <IconButton icon={<User size={20} />} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ text }) => (
  <a href="/" className="block hover:text-red-600 transition-colors duration-200">
    {text}
  </a>
);

const IconButton = ({ icon }) => (
  <button className="hover:text-red-600 transition-colors duration-200">
    {icon}
  </button>
);

export default Navbar;