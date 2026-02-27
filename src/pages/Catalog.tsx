import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Star } from 'lucide-react';
import { carService } from '../services/api';
import type { Car } from '../types';
import { CarModal } from '../components/CarModal';


const Catalog = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);


    useEffect(() => {
        carService.getCars().then(data => {
            setCars(data);
            setLoading(false);
        });
    }, []);


    const filteredCars = cars.filter(car => {
        const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.model.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });


    const categories = ['All', 'Sports', 'Luxury', 'Electric', 'SUV', 'Sedan'];


    const handleGoogleSearch = (car: Car) => {
        const query = `${car.brand} ${car.model} ${car.year} ofertas`;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    };


    if (loading) return (
        <div className="flex justify-center items-center h-[60vh]">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="rounded-full h-16 w-16 border-t-4 border-secondary border-r-4 border-r-transparent"
            ></motion.div>
        </div>
    );


    return (
        <div className="flex flex-col gap-16 px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-6xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">Catálogo de <span className="gradient-text">Elite</span></h1>
                    <p className="text-primary/60 text-xl font-medium">Explora nuestra selección curada de vehículos de alta gama.</p>
                </div>


                <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
                    <div className="relative group flex-1 md:flex-none">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors" size={22} />
                        <input
                            type="text"
                            placeholder="Buscar marca o modelo..."
                            className="bg-surface border border-border/50 rounded-2xl pl-14 pr-8 py-5 w-full md:w-[400px] focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary/30 font-bold text-lg transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>


                    <div className="relative flex-1 md:flex-none">
                        <select
                            className="bg-surface border border-border/50 rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary/30 font-bold text-lg appearance-none min-w-[220px] cursor-pointer transition-all"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat === 'All' ? 'Todas las Categorías' : cat}</option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/30 font-black">↓</div>
                    </div>
                </div>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <AnimatePresence mode="popLayout">
                    {filteredCars.map((car) => (
                        <motion.div
                            layout
                            key={car.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="bg-surface rounded-[3rem] border border-border/40 overflow-hidden flex flex-col group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700"
                        >
                            <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedCar(car)}>
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 flex items-center justify-center">
                                    <span className="bg-white text-primary px-6 py-3 rounded-full font-black uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">Ver Detalles</span>
                                </div>
                                <img
                                    src={car.image}
                                    alt={`${car.brand} ${car.model}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl font-black text-sm shadow-xl z-20 italic">
                                    {car.year}
                                </div>
                                <div className="absolute bottom-6 left-6 bg-secondary px-5 py-2 rounded-xl text-white font-black text-xs uppercase tracking-widest z-20 shadow-lg">
                                    {car.category}
                                </div>
                            </div>


                            <div className="p-10 flex flex-col flex-1 gap-6">
                                <div className="flex justify-between items-start">
                                    <div className="max-w-[70%]">
                                        <h3 className="text-secondary font-black uppercase tracking-[0.2em] text-xs mb-2 italic">{car.brand}</h3>
                                        <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-tight">{car.model}</h2>
                                    </div>
                                    <p className="text-2xl font-black text-primary">
                                        <span className="text-sm align-top mr-1 font-bold italic">$</span>
                                        {car.price.toLocaleString()}
                                    </p>
                                </div>


                                <p className="text-lg text-primary/50 line-clamp-2 font-medium leading-relaxed">
                                    {car.description}
                                </p>


                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {car.features.map((f, i) => (
                                        <span key={i} className="bg-white border border-border/30 text-[10px] px-3.5 py-1.5 rounded-full text-primary/40 font-black uppercase tracking-wider">
                                            {f}
                                        </span>
                                    ))}
                                </div>


                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => setSelectedCar(car)}
                                        className="flex-1 btn-primary flex items-center justify-center gap-2 group/btn"
                                    >
                                        Explorar <Star size={18} className="group-hover:rotate-12 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => handleGoogleSearch(car)}
                                        className="p-4 border border-border/50 rounded-2xl hover:bg-white hover:text-secondary hover:shadow-xl transition-all duration-300"
                                        title="Buscar ofertas en Google"
                                    >
                                        <ExternalLink size={22} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>


            <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />


            {filteredCars.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-32 bg-surface rounded-[4rem] border-4 border-dashed border-border/30"
                >
                    <p className="text-3xl font-black text-primary/20 italic uppercase tracking-tighter">Sin resultados para esta búsqueda</p>
                </motion.div>
            )}
        </div>
    );
};


export default Catalog