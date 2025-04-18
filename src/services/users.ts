import api from './api';
import type { User } from '../types/user';

export const usersService = {
  async getAll(): Promise<User[]> {
    const response = await api.get('/api/users?populate=cars');
    console.log('users in service: ' + JSON.stringify(response));

    return response.data.map((item: any) => {
      // Remove duplicate cars by filtering based on the documentId
      const uniqueCars = item.cars.filter((car: any, index: number, self: any[]) => {
        return self.findIndex((c: any) => c.documentId === car.documentId) === index;
      });

      return {
        id: item.id,
        documentId: item.documentId,
        firstName: item.firstName,
        lastName: item.lastName,
        instagram: item.instagram,
        tiktok: item.tiktok,
        cars: uniqueCars,  // Use unique cars, filtered to remove duplicates
        ...item.attributes,
      };
    });
  },

  async getById(id: number): Promise<User> {
    const response = await api.get(`/api/users/${id}?populate=cars`);
    const userData = response.data.data;

    // Filter out duplicate cars from the user's data
    const uniqueCars = userData.cars.filter((car: any, index: number, self: any[]) => {
      return self.findIndex((c: any) => c.documentId === car.documentId) === index;
    });

    return {
      id: userData.id,
      documentId: userData.documentId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      instagram: userData.instagram,
      tiktok: userData.tiktok,
      cars: uniqueCars,  // Use unique cars for this user
      ...userData.attributes,
    };
  },
};