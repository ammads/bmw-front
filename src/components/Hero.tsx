import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold">BMWMDZ</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Únete a la comunidad definitiva de entusiastas de BMW. Comparte tu pasión, conéctate con otros y experimenta la alegría de impulsar la excelencia.
          </p>
          <button disabled className="bg-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
           Únete
          </button>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Actualmente estamos trabajando en la página web, pero contáctanos por nuestro instagram: https://www.instagram.com/bmwmadriz?igsh=MW9uNWpvYWRhcTV3cQ==
          </p>
        </div>
      </div>
    </div>
  );
}