import React from 'react';
import { Play, Heart, ExternalLink } from 'lucide-react';

const FeaturedArtists = () => {
  const artists = [
    {
      id: 1,
      name: "Luna Rodríguez",
      genre: "Pop Electrónico",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
      followers: "2.3M",
      monthlyListeners: "5.1M",
      topSong: "Sueños Digitales",
      bio: "Estrella emergente del pop electrónico con voces etéreas y producción innovadora."
    },
    {
      id: 2,
      name: "Marcus Thompson",
      genre: "Neo Soul",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400",
      followers: "1.8M",
      monthlyListeners: "3.7M",
      topSong: "Groove de Medianoche",
      bio: "Artista con alma que mezcla R&B clásico con técnicas de producción modernas."
    },
    {
      id: 3,
      name: "Aria Chen",
      genre: "Folk Indie",
      image: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=400",
      followers: "980K",
      monthlyListeners: "2.1M",
      topSong: "Sinfonía de Flores Silvestres",
      bio: "Narradora acústica con letras poéticas y melodías hipnotizantes."
    },
    {
      id: 4,
      name: "The Neon Collective",
      genre: "Synthwave",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      followers: "1.2M",
      monthlyListeners: "2.8M",
      topSong: "Noches Eléctricas",
      bio: "Dúo electrónico que crea synthwave nostálgico con producción moderna."
    }
  ];

  return (
    <section id="artists" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Artistas Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre artistas increíbles de todo el mundo. Desde talentos emergentes hasta estrellas establecidas, 
            explora su música, historias y últimos lanzamientos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-700">
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
                <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-200 opacity-0 group-hover:opacity-100">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                  <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
                
                <p className="text-purple-400 font-semibold text-sm mb-3">{artist.genre}</p>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{artist.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{artist.followers}</div>
                    <div className="text-xs text-gray-400">Seguidores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{artist.monthlyListeners}</div>
                    <div className="text-xs text-gray-400">Mensuales</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-3 border border-purple-800/30">
                  <div className="text-xs text-gray-400 mb-1">Canción Principal</div>
                  <div className="text-sm font-semibold text-white">{artist.topSong}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;