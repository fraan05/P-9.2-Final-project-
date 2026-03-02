import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32">
                {children}
            </main>
            <Footer />
        </div>
    );
};
