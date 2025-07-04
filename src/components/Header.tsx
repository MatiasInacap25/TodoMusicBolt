import React from 'react';
import { Music, Search, Menu, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TodoMusic
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium">
              Inicio
            </a>
            <a href="#artists" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium">
              Artistas
            </a>
            <a href="#genres" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium">
              Géneros
            </a>
            <a href="#trending" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium">
              Tendencias
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium">
              Acerca de
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artistas, canciones..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-800 border border-gray-700 text-white rounded-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;