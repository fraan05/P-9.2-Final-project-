export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
  image: string;
  category: 'Sedan' | 'SUV' | 'Sports' | 'Luxury' | 'Electric';
  features: string[];
}


export interface Review {
  id: string;
  carId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
