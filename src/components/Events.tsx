import { useState, useEffect } from 'react';
import { Event } from '../types/event';
import EventCard from './EventCard';
import { eventsService } from '../services/events';
import SignupModal, { SignupFormData } from './SignupModal';
import { Loader2 } from 'lucide-react';

const EventsList = () => {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);


    const [events, setEvents] = useState<Event[]>([]);
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

  const handleSubmit = (formData: SignupFormData) => {
    // Here you would typically send the data to your backend
    console.log('Registration submitted:', formData);
    setSelectedEventId(null);
    alert('Registro exitoso! Recibirás un correo electrónico de confirmación en breve.');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  const selectedEvent = events.find(event => event.id === selectedEventId);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Próximos Eventos</h2>
        
        {events.length === 0 ? (
          <p className="text-center text-gray-600">No hay eventos programados en este momento.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard 
                key={event.id}
                event={event}
                onRegister={handleRegister}
              />
            ))}
          </div>
        )}
      </div>

      {selectedEvent && (
        <SignupModal
          event={selectedEvent}
          onClose={() => setSelectedEventId(null)}
          onSubmit={handleSubmit}
        />
      )}
    </section>
  );
};

export default EventsList;
