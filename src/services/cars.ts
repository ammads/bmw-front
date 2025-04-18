import api from './api';
import type { Car } from '../types/car';

export const carsService = {
  async getAll(): Promise<Car[]> {
    const response = await api.get('/api/cars?populate=images');
    console.log('response service: ' + JSON.stringify(response));
    return response.data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      description: item.documentId,
      model: item.model,
      horsepower:  item.horsepower,
      year: item.year,
      engine: item.engine,
      motor: item.motor,
      images: item.images,
      ...item.attributes,
    }));
  },

  async getById(documentId: string): Promise<Car> {
    const response = await api.get(`/api/cars/${documentId}?populate=images`);
    console.log('single resp: ' + JSON.stringify(response));
    return {
      id: response.data.data.id,
      documentId: response.data.data.documentId,
      description: response.data.data.documentId,
      model: response.data.data.model,
      horsepower:  response.data.data.horsepower,
      year: response.data.data.year,
      engine: response.data.data.engine,
      motor: response.data.data.motor,
      images: response.data.data.images,
      ...response.data.data.attributes,
    };
  },
};