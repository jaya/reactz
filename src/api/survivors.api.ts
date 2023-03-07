import { SurvivorInputs } from '../types/survivorInputs.type';
import apiClient from './apiClient.config';

const createSurvivor = async (inputs: SurvivorInputs) => {
  await apiClient.post('/survivors', inputs);
};

export { createSurvivor };
