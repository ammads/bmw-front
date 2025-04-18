import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { carsService } from '../services/cars'; 
import { Car } from '../types/car'; 

const CarList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all cars when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars = await carsService.getAll();
        setCars(fetchedCars); // Store the fetched cars in the state
      } catch (err) {
        setError('Failed to fetch cars. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchCars();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>No se ha encontrado ningún coche.</div>
  }

  return (
    <section id="featured" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Coches del grupo</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={`http://localhost:1337${car.images.formats.small.url}`}
                alt={car.model}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.model}</h3>
                <p className="text-gray-600 mb-4">{car.description}</p>

                {/* Use Link to navigate to the car details page */}
                <Link
                  to={`/car/${car.documentId}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarList;
