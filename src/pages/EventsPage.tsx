import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Loader2 } from 'lucide-react';
import { eventsService } from '../services/events';
import SignupModal, { type SignupFormData } from '../components/SignupModal';

export default function EventsPage() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [events, setEvents] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchEvents = async () => {
        try {
          const data = await eventsService.getAll();
          setEvents(data);
        } catch (err) {
          setError('Error fetching events');
        } finally {
          setLoading(false);
        }
      };
  
      fetchEvents();
    }, []);

  const handleRegister = (eventId: number) => {
    setSelectedEventId(eventId);
  };

  const handleSubmit = async (formData: SignupFormData) => {
    try {
      const response = await fetch('http://localhost:1337/api/event-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            carModel: formData.carModel,
            requestStatus: 'Pending', // Default status
            event: formData.eventId,  // Event ID from the form
          },
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create event request.');
      }
  
      alert('Your request has been submitted successfully! You’ll receive a confirmation email shortly.');
      setSelectedEventId(null); // Close the modal
    } catch (error) {
      console.error('Error creating event request:', error);
      alert('There was a problem submitting your request. Please try again.');
    }
  };

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
        <h2 className="text-2xl font-bold text-red-600 mb-4">Failed to load events</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  const selectedEvent = events.find(event => event.id === selectedEventId);

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {event.imageUrl && (
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-6">
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
                    <span>{event.attendees} / {event.maxCapacity} Attendees</span>
                  </div>
                </div>

                {event.description && (
                  <p className="mt-4 text-gray-600">{event.description}</p>
                )}
                
                <button 
                  onClick={() => handleRegister(event.id)}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                  disabled={event.attendees >= event.maxCapacity}
                >
                  {event.attendees >= event.maxCapacity ? 'Event Full' : 'Register Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <SignupModal
          event={selectedEvent}
          onClose={() => setSelectedEventId(null)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}