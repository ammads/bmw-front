import { Car } from './car'; 

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  car: Car; 
  joinDate: string;
  avatar: string;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };

  cars: Car[]; 
}
