import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedArtists from './components/FeaturedArtists';
import Genres from './components/Genres';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <FeaturedArtists />
        <Genres />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;