import { motion } from 'framer-motion';
import { Car, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col gap-32 overflow-hidden pb-20">
            <section className="relative px-6 pt-10 md:pt-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-2.5 rounded-full text-sm font-black tracking-widest uppercase mb-10 italic"
                        >
                            <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse"></span>
                            Catálogo Premium 2024
                        </motion.div>
                        <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-10 italic uppercase">
                            Redefiniendo el <br /><span className="gradient-text">Lujo</span>
                        </h1>
                        <p className="text-2xl text-primary/70 mb-14 max-w-xl font-medium leading-relaxed italic">
                            Mucho más que una conducción. Es una declaración de principios. Una oda a la ingeniería y la elegancia sin límites.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <Link to="/catalog">
                                <button className="btn-primary flex items-center justify-center gap-4 w-full sm:w-auto text-xl py-6 px-12 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.4)]">
                                    Ver Catálogo <Zap size={22} />
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="btn-outline w-full sm:w-auto text-xl py-6 px-12 hover:shadow-xl">
                                    Conócenos
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "anticipate" }}
                        className="relative lg:h-full flex items-center justify-center"
                    >
                        <div className="absolute -z-10 w-[150%] h-[150%] bg-gradient-to-br from-secondary/20 via-transparent to-accent/5 rounded-full blur-[140px]"></div>
                        <div className="relative group perspective-1000 w-full">
                            <div className="absolute inset-0 bg-secondary/30 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <img
                                src="https://images.unsplash.com/photo-1603584173870-761ed876527b?auto=format&fit=crop&q=80&w=1200"
                                alt="Automóvil de Lujo"
                                className="relative w-full h-auto rounded-[4.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] transition-all duration-1000 group-hover:scale-[1.03] group-hover:rotate-1"
                            />
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl border border-white/40 hidden xl:block"
                            >
                                <p className="text-secondary font-black italic uppercase tracking-widest text-xs mb-2">Puntuación Elite</p>
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-black italic">4.9</span>
                                    <div className="flex text-accent gap-1">
                                        {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 py-10 bg-surface/50">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
                    {[
                        { label: 'Vehículos Entregados', val: '500+' },
                        { label: 'Años de Experiencia', val: '15' },
                        { label: 'Marcas Exclusivas', val: '25' },
                        { label: 'Clientes Satisfechos', val: '100%' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter gradient-text group-hover:scale-110 transition-transform duration-500 mb-4">{stat.val}</p>
                            <p className="text-sm font-black uppercase tracking-widest text-primary/40 italic">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
                    <div className="max-w-xl">
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">Excelencia en <br /><span className="text-secondary">detalle</span></h2>
                        <p className="text-xl text-primary/60 font-medium italic leading-relaxed">Cada vehículo en nuestra colección pasa por un riguroso proceso de selección para garantizar solo lo mejor.</p>
                    </div>
                    <Link to="/catalog" className="btn-outline px-10 py-5 group">
                        Explorar Colección Completa
                        <span className="inline-block ml-4 group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { icon: <Zap className="text-secondary" size={32} />, title: 'Potencia Pura', desc: 'Siente el rugir de la ingeniería más avanzada del planeta en cada aceleración.' },
                        { icon: <Shield className="text-secondary" size={32} />, title: 'Blindaje de Confianza', desc: 'Garantía extendida y revisiones certificadas por expertos apasionados.' },
                        { icon: <Car className="text-secondary" size={32} />, title: 'Estilo Atemporal', desc: 'Diseños que no pasan de moda, capturando miradas ayer, hoy y siempre.' }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -20, rotate: i % 2 === 0 ? 1 : -1 }}
                            className="p-12 rounded-[4rem] bg-white border border-border/40 hover:border-secondary/20 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 relative overflow-hidden group"
                        >
                            <div className="bg-surface w-24 h-24 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-secondary/10 group-hover:scale-110 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-4xl font-black italic mb-6 uppercase tracking-tighter">{feature.title}</h3>
                            <p className="text-lg text-primary/60 leading-relaxed font-medium italic">{feature.desc}</p>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-6">
                <div className="max-w-7xl mx-auto bg-primary text-white p-14 md:p-32 rounded-[5rem] relative overflow-hidden group border border-white/5">
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-20">
                        <div className="max-w-3xl text-center lg:text-left">
                            <h2 className="text-6xl md:text-[6.5rem] font-black uppercase italic tracking-tighter mb-10 leading-[0.85]">Tu próxima <br /> <span className="text-secondary">leyenda</span> comienza aquí</h2>
                            <p className="text-2xl text-white/40 mb-0 font-medium leading-relaxed italic max-w-2xl">Agenda una cita privada y déjanos mostrarte el futuro de tu garaje.</p>
                        </div>
                        <Link to="/contact">
                            <button className="bg-white text-primary px-16 py-8 rounded-full font-black text-2xl hover:bg-secondary hover:text-white transition-all duration-500 shadow-3xl hover:shadow-secondary/30 transform hover:scale-110 uppercase tracking-widest italic">
                                Solicitar Cita
                            </button>
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
