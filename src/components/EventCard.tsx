import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  onRegister: (eventId: number) => void;
}

export default function EventCard({ event, onRegister }: EventCardProps) {
  const spotsLeft = event.maxCapacity - event.attendees;
  
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
      <h3 className="text-xl font-bold mb-4">{event.title}</h3>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-5 h-5" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-5 h-5" />
          <span>{event.attendees} Participantes (Quedan {spotsLeft} plazas)</span>
        </div>
      </div>
      
      <button 
        onClick={() => onRegister(event.id)}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        disabled={spotsLeft === 0}
      >
        {spotsLeft === 0 ? 'Event Full' : 'Register'}
      </button>
    </div>
  );
}