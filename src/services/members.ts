import api from './api';
import type { Member } from '../types/member';

export const membersService = {
  async getAll(): Promise<Member[]> {
    const response = await api.get('/api/members?populate=cars');
    console.log('members in service: ' + JSON.stringify(response));
    return response.data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      firstName: item.firstName,
      lastName: item.lastName,
      instagram: item.instagram,
      cars: item.cars,
      ...item.attributes,
    }));
  },

  async getById(id: number): Promise<Member> {
    const response = await api.get(`/api/members/${id}`);
    return {
      id: response.data.data.id,
      documentId: response.data.data.documentId,
      firstName: response.data.data.firstName,
      lastName: response.data.data.lastName,
      instagram: response.data.data.instagram,
      cars: response.data.data.cars,
      ...response.data.data.attributes,
    };
  },
};