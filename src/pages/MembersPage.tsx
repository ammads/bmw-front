import React, { useEffect, useState } from 'react';
import { Users, Instagram, Facebook, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usersService } from '../services/users';
import { User } from '../types/user';
import { SocialIcon } from 'react-social-icons'

export default function MembersPage() {
  const [members, setMembers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await usersService.getAll();
        console.log('data: ' + JSON.stringify(data));
        setMembers(data);
      } catch (err) {
        console.log('error: ' + err);
        setError('Error fetching members');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Failed to load members</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
          <Users className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold">Nuestros miembros</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => {
            const tiktokUsername = member.tiktok?.replace(/^@/, '');

            return (
              <div key={member.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={member.avatar}
                    alt={`${member.firstName}'s avatar`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{member.firstName}</h3>

                    <div className="flex gap-2 mt-1">
                      {member.instagram && (
                        <a 
                          href={`https://www.instagram.com/${member.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-pink-600 transition-colors"
                        >
                          <SocialIcon network="instagram" />
                        </a>
                      )}

                      {tiktokUsername && (
                        <a 
                          href={`https://www.tiktok.com/@${tiktokUsername}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-pink-600 transition-colors"
                        >
                          <SocialIcon network="tiktok" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {member.cars && member.cars.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg mb-2 text-gray-700">Coches:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {member.cars.map((car) => (
                        <li key={car.id}>
                          <Link 
                            to={`/car/${car.documentId}`} 
                            className="text-blue-600 hover:text-blue-800 font-semibold"
                          >
                            {car.model} ({car.year}) - {car.horsepower} HP
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
