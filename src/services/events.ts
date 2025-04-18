import api from './api';
import type { Event } from '../types/event';

export const eventsService = {
  async getAll(): Promise<Event[]> {
    const response = await api.get('/api/events');
    console.log('response service: ' + JSON.stringify(response));
    return response.data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      date: item.date,
      location: item.location,
      attendees: item.attendees,
      maxCapacity: item.maxCapacity,
      description: item.description,
      ...item.attributes,
    }));
  },

  async getById(id: number): Promise<Event> {
    const response = await api.get(`/api/events/${id}`);
    return {
      id: response.data.data.id,
      ...response.data.data.attributes,
    };
  },
};