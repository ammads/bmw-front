import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import { carsService } from '../services/cars'; // Assuming this is the correct path for your service
import { Car } from '../types/car'; // Assuming you have defined your `Car` type

const CarDetails = () => {
  const { documentId } = useParams<{ documentId: string }>(); // Extract documentId from the route parameters
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        if (!documentId) {
          throw new Error('No car ID provided.');
        }
        const fetchedCar = await carsService.getById(documentId);
        setCar(fetchedCar);
      } catch (err) {
        setError('Failed to fetch car details. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [documentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!car) {
    return <div>No car found.</div>;
  }

  return (
    <section id="car-details" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{car.model}</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={`http://localhost:1337${car.images.formats.large.url}`}
            alt={car.model}
            className="w-full object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600 mb-4">{car.description}</p>
            <p className="text-lg font-semibold">Year: {car.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
