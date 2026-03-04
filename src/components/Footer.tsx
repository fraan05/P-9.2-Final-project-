import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary text-white mt-32 py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
                <div className="md:col-span-2">
                    <Link to="/" className="flex items-center gap-3 justify-center md:justify-start mb-6">
                        <div className="bg-secondary p-2 rounded-lg text-white">
                            <Car size={24} />
                        </div>
                        <span className="text-2xl font-bold tracking-tighter uppercase italic">
                            LUXE<span className="text-secondary">DRIVE</span>
                        </span>
                    </Link>
                    <p className="text-white/60 max-w-sm mb-8 mx-auto md:mx-0">
                        Redefining the standard of automotive luxury. Excellence, power, and design in every kilometer.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Navigation</h4>
                    <ul className="space-y-4 text-white/50 font-medium">
                        <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
                        <li><Link to="/catalog" className="hover:text-secondary transition-colors">Catalog</Link></li>
                        <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
                    <ul className="space-y-4 text-white/50 font-medium">
                        <li>info@luxedrive.com</li>
                        <li>+34 900 123 456</li>
                        <li>Madrid, España</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-10 text-center text-white/30 text-sm font-medium uppercase tracking-widest">
                <p>© 2024 LuxeDrive. Excellence.</p>
            </div>
        </footer>
    );
};
