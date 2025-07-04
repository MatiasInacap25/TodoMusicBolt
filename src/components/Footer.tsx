import React from 'react';
import { Music, Instagram, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TodoMusic</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Tu destino definitivo para el descubrimiento musical. Conecta con artistas, explora nuevos géneros, 
              y sumérgete en el mundo de la música como nunca antes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors duration-200 border border-gray-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors duration-200 border border-gray-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors duration-200 border border-gray-700">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors duration-200 border border-gray-700">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="#artists" className="text-gray-400 hover:text-white transition-colors duration-200">Artistas</a></li>
              <li><a href="#genres" className="text-gray-400 hover:text-white transition-colors duration-200">Géneros</a></li>
              <li><a href="#trending" className="text-gray-400 hover:text-white transition-colors duration-200">Tendencias</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">Acerca de</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contáctanos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Términos de Servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Mantente Actualizado</h4>
              <p className="text-gray-400">Recibe las últimas noticias musicales y actualizaciones de artistas</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  className="pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 w-full sm:w-64 text-white"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 TodoMusic. Todos los derechos reservados. Hecho con ❤️ para amantes de la música en todo el mundo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;