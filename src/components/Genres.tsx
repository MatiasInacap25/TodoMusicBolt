import React from 'react';
import { Music, Headphones, Radio, Disc } from 'lucide-react';

const Genres = () => {
  const genres = [
    {
      id: 1,
      name: "Electrónica",
      icon: Radio,
      description: "Ritmos sintetizados y paisajes sonoros digitales",
      color: "from-blue-500 to-purple-600",
      artists: "15,234",
      tracks: "250K+",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Hip Hop",
      icon: Disc,
      description: "Ritmos rítmicos y letras poderosas",
      color: "from-orange-500 to-red-600",
      artists: "12,876",
      tracks: "180K+",
      image: "https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Rock Indie",
      icon: Music,
      description: "Sonidos alternativos y expresión artística",
      color: "from-green-500 to-teal-600",
      artists: "8,945",
      tracks: "120K+",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "R&B Soul",
      icon: Headphones,
      description: "Melodías suaves y voces con alma",
      color: "from-pink-500 to-purple-600",
      artists: "6,721",
      tracks: "95K+",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "Jazz Fusión",
      icon: Music,
      description: "Armonías complejas e improvisación",
      color: "from-yellow-500 to-orange-600",
      artists: "4,532",
      tracks: "75K+",
      image: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Ambient",
      icon: Radio,
      description: "Sonidos atmosféricos y meditativos",
      color: "from-cyan-500 to-blue-600",
      artists: "3,210",
      tracks: "60K+",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="genres" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explora Géneros Musicales
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sumérgete en paisajes musicales diversos. Desde ritmos electrónicos hasta melodías con alma, 
            descubre tu próximo sonido favorito a través de múltiples géneros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genres.map((genre) => {
            const IconComponent = genre.icon;
            return (
              <div key={genre.id} className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={genre.image} 
                    alt={genre.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${genre.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{genre.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{genre.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-lg font-bold text-white">{genre.artists}</div>
                      <div className="text-sm text-gray-400">Artistas</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{genre.tracks}</div>
                      <div className="text-sm text-gray-400">Pistas</div>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${genre.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Explorar {genre.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Genres;