import { motion } from 'framer-motion';
import { Award, Briefcase, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <div className="inline-block bg-secondary/10 text-secondary px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 italic">
                    Nuestra Visión
                </div>
                <h1 className="text-7xl md:text-9xl font-black mb-8 italic uppercase tracking-tighter leading-none">Sobre <span className="gradient-text">LuxeDrive</span></h1>
                <p className="text-2xl text-primary/60 max-w-3xl mx-auto font-medium leading-relaxed italic">Apasionados por la excelencia automotriz y el diseño vanguardista que redefine los límites de lo posible.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-secondary/10 rounded-[4rem] rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-700"></div>
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                        alt="Founder"
                        className="rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] w-full h-auto transform group-hover:-rotate-3 transition-transform duration-1000"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col gap-10"
                >
                    <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Liderando con <span className="text-secondary">Visión</span></h2>
                    <p className="text-xl text-primary/60 font-medium leading-relaxed italic">
                        Con más de una década en la industria del automóvil de lujo, nuestra misión es conectar a los entusiastas más exigentes con los vehículos de sus sueños, garantizando una experiencia de compra tan premium como los mismos coches que representamos.
                    </p>
                    <div className="grid grid-cols-1 gap-6 mt-4">
                        {[
                            { icon: <Award className="text-secondary" size={28} />, title: 'Calidad Certificada', desc: 'Cada vehículo es inspeccionado minuciosamente por nuestro equipo de ingenieros.' },
                            { icon: <Briefcase className="text-secondary" size={28} />, title: 'Experiencia Elite', desc: 'Años asesorando a los coleccionistas más prestigiosos de todo el mundo.' },
                            { icon: <Heart className="text-secondary" size={28} />, title: 'Pasión Pura', desc: 'Amamos lo que hacemos y se nota en cada detalle de nuestro servicio personalizado.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="flex gap-6 p-8 rounded-[2.5rem] bg-surface border border-border/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="shrink-0 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border border-border/20">{item.icon}</div>
                                <div>
                                    <h4 className="text-xl font-black italic uppercase tracking-tight mb-2 italic">{item.title}</h4>
                                    <p className="text-primary/50 font-medium italic">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
