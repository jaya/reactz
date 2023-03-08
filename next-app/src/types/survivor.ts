export interface Survivor {
  id: string;
  name: string;
  age: number;
  latitude: number;
  longitude: number;
  gender: 'MALE' | 'FEMALE'
  inventoryItems: {
    item: {
      id: string;
      name: string;
      points: number;
    }
    quantity: number;
  }[]
}