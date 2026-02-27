import type { Car, Review } from '../types';


const MOCK_CARS: Car[] = [
    {
        id: '1',
        brand: 'Porsche',
        model: '911 Carrera',
        year: 2024,
        price: 120000,
        description: 'The definitive sports car. A design that has evolved over decades but remains timeless.',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
        category: 'Sports',
        features: ['Flat-six engine', 'RWD', 'PDK Transmission']
    },
    {
        id: '2',
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2023,
        price: 89000,
        description: 'The fastest accelerating production car today. Pure electric performance.',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000',
        category: 'Electric',
        features: ['Tri-motor setup', '1020 HP', 'Autopilot']
    },
    {
        id: '3',
        brand: 'Mercedes-Benz',
        model: 'G-Class',
        year: 2024,
        price: 140000,
        description: 'The icon of luxury off-roading. Unmistakable design and ultimate presence.',
        image: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=1000',
        category: 'SUV',
        features: ['V8 Biturbo', '4MATIC', 'Triple locking differentials']
    },
    {
        id: '4',
        brand: 'Audi',
        model: 'RS7 Sportback',
        year: 2024,
        price: 115000,
        description: 'High-performance luxury in a beautiful fastback body. The perfect daily driver for enthusiasts.',
        image: 'https://images.unsplash.com/photo-1621359953476-b0600b24033c?auto=format&fit=crop&q=80&w=1000',
        category: 'Luxury',
        features: ['Quattro AWD', 'Twin-turbo V8', 'Dynamic Ride Control']
    },
    {
        id: '5',
        brand: 'Ferrari',
        model: 'SF90 Stradale',
        year: 2024,
        price: 520000,
        description: 'The ultimate hybrid supercar. A new chapter in Ferrari history with 1000cv.',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
        category: 'Sports',
        features: ['Hybrid V8', 'AWD', '1000 HP']
    },
    {
        id: '6',
        brand: 'Rolls-Royce',
        model: 'Phantom',
        year: 2024,
        price: 460000,
        description: 'The pinnacle of luxury. Hand-crafted excellence for those who demand the absolute best.',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
        category: 'Luxury',
        features: ['V12 Engine', 'Magic Carpet Ride', 'Bespoke Interior']
    },
    {
        id: '7',
        brand: 'Lamborghini',
        model: 'Urus Performante',
        year: 2023,
        price: 260000,
        description: 'The Super SUV that thinks it is a supercar. Aggressive design and unparalleled power.',
        image: 'https://images.unsplash.com/photo-1621271166668-ade934c56855?auto=format&fit=crop&q=80&w=1000',
        category: 'SUV',
        features: ['Twin-turbo V8', 'Carbon Fiber', 'Sport Exhaust']
    },
    {
        id: '8',
        brand: 'BMW',
        model: 'i7 M70',
        year: 2024,
        price: 168000,
        description: 'Pure electric luxury with M performance. The flagship of the new digital era.',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
        category: 'Electric',
        features: ['Dual Motor', '650 HP', 'Executive Lounge']
    },
    {
        id: '9',
        brand: 'Bentley',
        model: 'Continental GT',
        year: 2024,
        price: 240000,
        description: 'The definitive Grand Tourer. Effortless power meets exquisite craftsmanship.',
        image: 'https://images.unsplash.com/photo-1621932953986-15fcfecbc67d?auto=format&fit=crop&q=80&w=1000',
        category: 'Luxury',
        features: ['W12 engine', 'All-Wheel Drive', 'Fine Leather']
    },
    {
        id: '10',
        brand: 'Lucid',
        model: 'Air Sapphire',
        year: 2024,
        price: 249000,
        description: 'Setting new standards for electric luxury sedans. Range, power, and elegance redefined.',
        image: 'https://images.unsplash.com/photo-1590362891175-9e7246524113?auto=format&fit=crop&q=80&w=1000',
        category: 'Electric',
        features: ['Tri-motor', '1200+ HP', 'Air Suspension']
    }
];


export const carService = {
    getCars: async (): Promise<Car[]> => {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_CARS), 800);
        });
    },
    getCarById: async (id: string): Promise<Car | undefined> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_CARS.find(car => car.id === id)), 400);
        });
    }
};


const reviews: Review[] = [];


export const reviewService = {
    getReviewsByCarId: async (carId: string): Promise<Review[]> => {
        return reviews.filter(r => r.carId === carId);
    },
    addReview: async (review: Omit<Review, 'id' | 'date'>): Promise<Review> => {
        const newReview: Review = {
            ...review,
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString()
        };
        reviews.push(newReview);
        return newReview;
    }
};
