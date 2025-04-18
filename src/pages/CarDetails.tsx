import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import CarDetails from '../components/CarDetails';

export default function CarDetailsPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">Coche seleccionado</h1>

              {/* Back Button with Link */}
              <Link 
                to="/cars" // Path to the car list page
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                ← Back to Car List
              </Link>
            </div>
            <CarDetails />
          </div>
        </div>
    );
}
