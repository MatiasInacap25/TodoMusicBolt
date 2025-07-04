import React from 'react';
import { Play, Headphones, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-800/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%200c16.569%200%2030%2013.431%2030%2030%200%2016.569-13.431%2030-30%2030C13.431%2060%200%2046.569%200%2030%200%2013.431%2013.431%200%2030%200zm0%206c-13.255%200-24%2010.745-24%2024s10.745%2024%2024%2024%2024-10.745%2024-24S43.255%206%2030%206z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">Descubre Nueva Música Cada Día</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Explora el Mundo de la
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Música
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Descubre artistas increíbles, explora géneros diversos y mantente actualizado con las últimas tendencias musicales. 
              Tu destino definitivo para el descubrimiento musical e información de artistas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Comenzar a Explorar</span>
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                <Headphones className="h-5 w-5" />
                <span>Escuchar Ahora</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Concierto de Música" 
                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Experiencia de Concierto en Vivo</h3>
                  <p className="text-white/80 text-sm">Siente la energía de la música en vivo</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50K+</div>
                <div className="text-sm text-gray-400">Artistas</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">1M+</div>
                <div className="text-sm text-gray-400">Canciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;