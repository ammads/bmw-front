import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import FeaturedCars from '../components/FeaturedCars';

export default function CarsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Coches del Grupo</h1>
        </div>
        <FeaturedCars />
      </div>
    </div>
  );
}