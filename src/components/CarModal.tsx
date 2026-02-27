import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send, User } from 'lucide-react';
import type { Car, Review } from '../types';
import { reviewService } from '../services/api';


interface CarModalProps {
    car: Car | null;
    onClose: () => void;
}


export const CarModal = ({ car, onClose }: CarModalProps) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newReview, setNewReview] = useState({ userName: '', rating: 5, comment: '' });
    const [submitting, setSubmitting] = useState(false);


    useEffect(() => {
        if (car) {
            reviewService.getReviewsByCarId(car.id).then(setReviews);
        }
    }, [car]);


    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!car) return;
        setSubmitting(true);
        const added = await reviewService.addReview({
            carId: car.id,
            ...newReview
        });
        setReviews([added, ...reviews]);
        setNewReview({ userName: '', rating: 5, comment: '' });
        setSubmitting(false);
    };


    return (
        <AnimatePresence>
            {car && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary/90 backdrop-blur-xl"
                    />


                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 40 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative bg-white w-full max-w-7xl max-h-full overflow-hidden rounded-[4rem] shadow-[0_100px_150px_-50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row border border-white/20"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 z-50 p-4 bg-white/10 hover:bg-white/20 text-white md:text-primary rounded-2xl transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 active:scale-95"
                        >
                            <X size={24} />
                        </button>

                        <div className="md:w-3/5 p-12 overflow-y-auto custom-scrollbar">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img
                                    src={car.image}
                                    alt={car.model}
                                    className="w-full h-[400px] object-cover rounded-[3rem] mb-12 shadow-2xl"
                                />
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                                    <div>
                                        <h3 className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-3 italic">{car.brand}</h3>
                                        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">{car.model}</h2>
                                    </div>
                                    <div className="lg:text-right pt-4 lg:pt-0">
                                        <p className="text-4xl font-black text-primary leading-none mb-3">
                                            <span className="text-sm align-top mr-1 font-bold italic">$</span>
                                            {car.price.toLocaleString()}
                                        </p>
                                        <div className="inline-block bg-surface px-5 py-2 rounded-xl font-black text-sm italic border border-border/50 uppercase tracking-widest">{car.year} Model</div>
                                    </div>
                                </div>


                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="font-black italic uppercase tracking-widest text-xs mb-6 text-primary/40">Descripción</h4>
                                        <p className="text-xl text-primary/60 font-medium leading-relaxed">{car.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-black italic uppercase tracking-widest text-xs mb-6 text-primary/40">Especificaciones</h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {car.features.map((f, i) => (
                                                <span key={i} className="bg-surface border border-border/50 px-5 py-3 rounded-2xl text-sm font-black uppercase tracking-wider italic">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="md:w-2/5 p-12 bg-surface border-l border-border/50 flex flex-col h-full overflow-hidden">
                            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-12">Experiencias <span className="text-secondary">&</span> Opiniones</h3>


                            <div className="flex-1 overflow-y-auto pr-4 mb-12 flex flex-col gap-8 custom-scrollbar">
                                {reviews.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center py-10 text-primary/30 gap-6">
                                        <Star size={48} className="opacity-10" />
                                        <p className="text-xl font-black italic uppercase tracking-tighter">No hay reseñas todavía.<br />Sé el primero en opinar.</p>
                                    </div>
                                ) : (
                                    reviews.map((review, i) => (
                                        <motion.div
                                            key={review.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="bg-white p-8 rounded-[2.5rem] border border-border/40 shadow-xl shadow-primary/5 hover:scale-[1.02] transition-transform duration-300"
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-secondary/10 p-3 rounded-2xl text-secondary"><User size={20} /></div>
                                                    <span className="font-black uppercase tracking-tight italic">{review.userName}</span>
                                                </div>
                                                <div className="flex text-accent gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} className={i < review.rating ? 'text-accent' : 'text-primary/10'} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-lg text-primary/70 font-medium leading-relaxed italic">"{review.comment}"</p>
                                        </motion.div>
                                    ))
                                )}
                            </div>


                            <form onSubmit={handleSubmitReview} className="mt-auto bg-white p-8 rounded-[3rem] border border-border/40 shadow-2xl flex flex-col gap-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative flex-1">
                                        <input
                                            required
                                            placeholder="Tu nombre"
                                            className="bg-surface border border-border/50 rounded-2xl px-6 py-4 w-full outline-none focus:ring-4 focus:ring-secondary/10 font-black italic text-primary"
                                            value={newReview.userName}
                                            onChange={e => setNewReview({ ...newReview, userName: e.target.value })}
                                        />
                                    </div>
                                    <select
                                        className="bg-surface border border-border/50 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-secondary/10 font-black italic text-primary cursor-pointer"
                                        value={newReview.rating}
                                        onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                                    >
                                        {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
                                    </select>
                                </div>
                                <div className="relative">
                                    <textarea
                                        required
                                        placeholder="Comparte tu experiencia..."
                                        className="bg-surface border border-border/50 rounded-2xl px-6 py-4 w-full outline-none focus:ring-4 focus:ring-secondary/10 font-medium italic resize-none pr-16 text-primary"
                                        rows={3}
                                        value={newReview.comment}
                                        onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                                    />
                                    <button
                                        disabled={submitting}
                                        className="absolute right-3 bottom-3 bg-secondary text-white p-4 rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-lg shadow-secondary/30 disabled:opacity-50"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
