import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carService } from '../services/api';
import type { Car } from '../types';
import { CarModal } from '../components/CarModal';

const Catalog = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    carService.getCars().then(data => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  const handleOpenModal = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  if (loading) return <div className="flex justify-center py-20 font-black italic">CARGANDO...</div>;

  return (
    <div className="flex flex-col gap-12 px-6">
      <header className="text-center lg:text-left">
        <h1 className="text-6xl font-black italic uppercase tracking-tighter">
          Catálogo de <span className="gradient-text">Elite</span>
        </h1>
        <p className="text-primary/60 font-medium">Selecciona un vehículo para ver detalles exclusivos.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="bg-surface rounded-[2.5rem] border border-border/40 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500"
              onClick={() => handleOpenModal(car)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.model}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-primary px-6 py-2 rounded-full font-black uppercase text-xs">Ver Detalles</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-secondary font-black text-xs tracking-widest uppercase italic">{car.brand}</h3>
                <h2 className="text-2xl font-black italic uppercase">{car.model}</h2>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xl font-black">${car.price.toLocaleString()}</span>
                  <span className="text-secondary font-bold text-sm">Explorar →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <CarModal 
        car={selectedCar} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Catalog;