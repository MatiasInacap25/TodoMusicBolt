import React from 'react';
import { Users, Music, Headphones, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Artistas",
      description: "Desde talentos emergentes hasta superestrellas globales"
    },
    {
      icon: Music,
      value: "1M+",
      label: "Canciones",
      description: "A través de todos los géneros y décadas"
    },
    {
      icon: Headphones,
      value: "100M+",
      label: "Reproducciones",
      description: "Transmisiones mensuales en todo el mundo"
    },
    {
      icon: Globe,
      value: "180+",
      label: "Países",
      description: "Música de todo el mundo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%200c16.569%200%2030%2013.431%2030%2030%200%2016.569-13.431%2030-30%2030C13.431%2060%200%2046.569%200%2030%200%2013.431%2013.431%200%2030%200zm0%206c-13.255%200-24%2010.745-24%2024s10.745%2024%2024%2024%2024-10.745%2024-24S43.255%206%2030%206z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Música que Conecta al Mundo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Únete a millones de amantes de la música descubriendo nuevos sonidos, apoyando artistas y conectando a través del lenguaje universal de la música.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-gray-200 mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;