import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Home as HomeIcon, Info, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Inicio', icon: <HomeIcon size={18} /> },
        { path: '/catalog', label: 'Catálogo', icon: <Car size={18} /> },
        { path: '/about', label: 'Sobre Mí', icon: <Info size={18} /> },
        { path: '/contact', label: 'Contacto', icon: <Mail size={18} /> },
    ];

    return (
        <header className="glass-morphism fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 px-8 py-4 flex justify-between items-center rounded-2xl shadow-xl shadow-primary/5">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-secondary p-2.5 rounded-xl text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-secondary/30">
                    <Car size={22} />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase italic">
                    LUXE<span className="text-secondary">DRIVE</span>
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10">
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
            </nav>

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
        </header>
    );
};
