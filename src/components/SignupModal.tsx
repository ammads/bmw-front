import React, { useState } from 'react';
import { Event } from '../types/event';
import { X } from 'lucide-react';

interface SignupModalProps {
  event: Event;
  onClose: () => void;
  onSubmit: (formData: SignupFormData) => void;
}

export interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  carModel: string;
  eventId: number;
}

export default function SignupModal({ event, onClose, onSubmit }: SignupModalProps) {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    eventId: event.id
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Register for {event.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded-md"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              BMW Model
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g., M3, 330i, X5"
              value={formData.carModel}
              onChange={e => setFormData({ ...formData, carModel: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-6"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}