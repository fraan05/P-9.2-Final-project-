import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Info, Mail, Home as HomeIcon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Inicio', icon: <HomeIcon size={18} /> },
        { path: '/catalog', label: 'Catálogo', icon: <Car size={18} /> },
        { path: '/about', label: 'Sobre Mí', icon: <Info size={18} /> },
        { path: '/contact', label: 'Contacto', icon: <Mail size={18} /> },
    ];

    return (
        <nav className="glass-morphism fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 px-8 py-4 flex justify-between items-center rounded-2xl shadow-xl shadow-primary/5">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-secondary p-2.5 rounded-xl text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-secondary/30">
                    <Car size={22} />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase italic">
                    LUXE<span className="text-secondary">DRIVE</span>
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`flex items-center gap-2 font-semibold text-sm uppercase tracking-wider hover:text-secondary transition-all relative py-1 ${location.pathname === link.path ? 'text-secondary' : 'text-primary/60'
                            }`}
                    >
                        {link.label}
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="nav-underline"
                                className="absolute -bottom-1 left-0 w-full h-[3px] bg-secondary rounded-full"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-primary p-2 hover:bg-surface rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-xl border border-border p-8 flex flex-col gap-6 md:hidden rounded-3xl shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 text-xl font-bold p-4 rounded-2xl transition-colors ${location.pathname === link.path ? 'bg-secondary/10 text-secondary' : 'hover:bg-surface'}`}
                            >
                                <span className={`${location.pathname === link.path ? 'text-secondary' : 'text-primary/40'}`}>{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-32">
                {children}
            </main>
            <footer className="bg-primary text-white mt-32 py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-3 justify-center md:justify-start mb-6">
                            <div className="bg-secondary p-2 rounded-lg text-white">
                                <Car size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter">LUXE<span className="text-secondary">DRIVE</span></span>
                        </Link>
                        <p className="text-white/60 max-w-sm mb-8 mx-auto md:mx-0">
                            Redefiniendo el estándar del lujo automotriz. Excelencia, potencia y diseño en cada kilómetro.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Navegación</h4>
                        <ul className="space-y-4 text-white/50">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Catálogo</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Sobre Mí</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4 text-white/50">
                            <li>info@luxedrive.com</li>
                            <li>+34 900 123 456</li>
                            <li>Madrid, España</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-10 text-center text-white/30 text-sm">
                    <p>© 2024 LuxeDrive. Excelencia en movimiento.</p>
                </div>
            </footer>
        </div>
    );
};
