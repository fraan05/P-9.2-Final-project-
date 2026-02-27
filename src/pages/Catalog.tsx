import { useState, useEffect } from 'react';
import { carService } from '../services/api';
import type { Car } from '../types';

const Catalog = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    carService.getCars().then(data => setCars(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Coches</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1/3', gap: '20px' }}>
        {cars.map(car => (
          <div key={car.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={car.image} alt={car.model} style={{ width: '100%' }} />
            <h2>{car.brand} {car.model}</h2>
            <p>{car.description}</p>
            <span>${car.price}</span>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;