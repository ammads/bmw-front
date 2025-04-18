export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  maxCapacity: number;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Summer Track Day',
    date: 'July 15, 2024',
    location: 'Nürburgring, Germany',
    attendees: 45,
    maxCapacity: 50
  },
  {
    id: 2,
    title: 'BMW Heritage Meet',
    date: 'August 5, 2024',
    location: 'Munich, Germany',
    attendees: 120,
    maxCapacity: 150
  },
  {
    id: 3,
    title: 'Mountain Drive Experience',
    date: 'September 20, 2024',
    location: 'Alps, Switzerland',
    attendees: 30,
    maxCapacity: 35
  }
];