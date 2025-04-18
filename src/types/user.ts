import { Car } from './car'; 

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  car: Car; 
  joinDate: string;
  avatar: string;
  bio?: string;
  instagram: string;
  tiktok: string;
  cars: Car[]; 
}
