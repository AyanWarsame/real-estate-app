import { useState } from 'react';
import logo from '../assets/logo.svg';
import menu_icon from '../assets/menu_icon.svg'; // Fixed import
import cross_icon from '../assets/cross_icon.svg'; // Fixed import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white items-center">
          <li><a href="#Header" className="hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonials" className="hover:text-gray-400">Testimonials</a></li>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        
        {/* Fixed mobile button */}
        <img 
          onClick={() => setIsMenuOpen(true)} 
          src={menu_icon} 
          className='md:hidden w-7 cursor-pointer' 
          alt="Menu" 
        />
      </div>

      {/* Mobile Menu - Fixed Positioning */}
      <div 
        className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex justify-end p-6 cursor-pointer' onClick={() => setIsMenuOpen(false)}>
          <img src={cross_icon} alt="Close menu" className="w-6" />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-8 px-5 text-lg font-medium">
          <li><a href="#Header" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#Projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#Testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
          <li><button className="bg-blue-500 px-8 py-2 rounded-full text-white mt-4">Sign Up</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;