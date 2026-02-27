import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
            <div className="text-center mb-24">
                <div className="inline-block bg-secondary/10 text-secondary px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest mb-10 italic">
                    Estamos a tu disposición
                </div>
                <h1 className="text-7xl md:text-9xl font-black mb-10 italic uppercase tracking-tighter leading-none">Ponte en <br /><span className="gradient-text">Contacto</span></h1>
                <p className="text-2xl text-primary/70 max-w-3xl mx-auto font-medium leading-relaxed italic">
                    Nuestro equipo exclusivo te asesorará para encontrar la pieza de ingeniería que transformará tu vida.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-16 md:gap-24">
                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-2 flex flex-col gap-12"
                >
                    <div className="bg-surface/50 p-12 rounded-[4rem] border border-border/40 flex flex-col gap-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Sede <span className="text-secondary">Central</span></h2>

                        <div className="flex items-center gap-8 group">
                            <div className="bg-white p-6 rounded-3xl text-secondary shadow-xl border border-border/30 group-hover:scale-110 transition-transform duration-500">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <p className="font-black italic uppercase tracking-widest text-xs text-secondary/50 mb-1">Nuestra Ubicación</p>
                                <p className="text-2xl font-black italic uppercase tracking-tight">Avenida del Lujo 123, Madrid</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 group">
                            <div className="bg-white p-6 rounded-3xl text-secondary shadow-xl border border-border/30 group-hover:scale-110 transition-transform duration-500">
                                <Phone size={32} />
                            </div>
                            <div>
                                <p className="font-black italic uppercase tracking-widest text-xs text-secondary/50 mb-1">Teléfono Directo</p>
                                <p className="text-2xl font-black italic uppercase tracking-tight">+34 900 123 456</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 group">
                            <div className="bg-white p-6 rounded-3xl text-secondary shadow-xl border border-border/30 group-hover:scale-110 transition-transform duration-500">
                                <Mail size={32} />
                            </div>
                            <div>
                                <p className="font-black italic uppercase tracking-widest text-xs text-secondary/50 mb-1">Email Exclusivo</p>
                                <p className="text-2xl font-black italic uppercase tracking-tight">elite@luxedrive.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-80 overflow-hidden rounded-[4rem] group border border-border/30">
                        <img
                            src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800"
                            alt="Map preview"
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-700">
                            <span className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl italic group-hover:scale-110 transition-transform">Ver en Mapas Interactivos</span>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="lg:col-span-3 bg-primary text-white p-14 md:p-24 rounded-[5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] relative overflow-hidden group border border-white/5"
                >
                    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="flex flex-col gap-5">
                                <label className="text-white/30 font-black italic uppercase tracking-widest text-xs ml-6">Identidad</label>
                                <input
                                    required
                                    className="bg-white/5 border border-white/10 rounded-[2rem] p-7 focus:ring-4 focus:ring-secondary/20 focus:border-secondary/40 outline-none placeholder:text-white/10 font-black italic text-white transition-all text-xl"
                                    placeholder="Tu Nombre..."
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <label className="text-white/30 font-black italic uppercase tracking-widest text-xs ml-6">Comunicación</label>
                                <input
                                    required
                                    type="email"
                                    className="bg-white/5 border border-white/10 rounded-[2rem] p-7 focus:ring-4 focus:ring-secondary/20 focus:border-secondary/40 outline-none placeholder:text-white/10 font-black italic text-white transition-all text-xl"
                                    placeholder="Email..."
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label className="text-white/30 font-black italic uppercase tracking-widest text-xs ml-6">Tu Mensaje</label>
                            <textarea
                                required
                                rows={5}
                                className="bg-white/5 border border-white/10 rounded-[2rem] p-7 focus:ring-4 focus:ring-secondary/20 focus:border-secondary/40 outline-none placeholder:text-white/10 font-medium italic text-white transition-all resize-none text-xl"
                                placeholder="Comparte tus deseos con nosotros..."
                            />
                        </div>
                        <button
                            className={`py-8 rounded-full font-black text-2xl flex items-center justify-center gap-5 mt-6 transition-all duration-700 uppercase tracking-[0.2em] italic transform ${sent ? 'bg-emerald-500 scale-95 opacity-50' : 'bg-secondary hover:bg-white hover:text-primary hover:scale-105 active:scale-95 shadow-3xl shadow-secondary/40'}`}
                            disabled={sent}
                        >
                            {sent ? '¡Petición Enviada!' : <><Send size={28} /> Enviar Mensaje</>}
                        </button>
                    </form>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] -z-0 pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
