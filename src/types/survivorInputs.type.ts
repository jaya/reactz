import { Gender } from './gender.type';

export type SurvivorInputs = {
  name: string;
  age: number;
  gender?: Gender;
};
