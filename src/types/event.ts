export interface Event {
  id: number;
  title: string;
  date: Date; // You can use the built-in Date object for both date and time.
  time: string; // Represent time as a string (e.g., "14:00" for 2 PM)
  location: string;
  attendees: number;
  maxCapacity: number;
  description?: string; // Optional description field
  imageUrl?: string; // Optional image URL field
}