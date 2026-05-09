/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/sections/Hero';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/sections/Footer';
import { ChatWidget } from './components/chat/ChatWidget';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#C5A059]/30 selection:text-[#002147]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#002147]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center font-bold text-[#002147] text-xl">
              A
            </div>
            <div>
              <p className="font-bold text-white text-lg leading-none">Asesoría</p>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mt-1">Migratoria GT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Inicio</a>
            <a href="#gallery" className="hover:text-[#C5A059] transition-colors">Programas</a>
            <a href="#contact" className="hover:text-[#C5A059] transition-colors">Citas</a>
            <a href="https://wa.me/50259686584" className="px-5 py-2.5 bg-[#C5A059] text-[#002147] rounded-full font-bold hover:bg-white hover:text-[#002147] transition-all">
              WhatsApp
            </a>
          </div>

          <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/50259686584?text=Hola,%20quisiera%20más%20información%20sobre%20las%20visas%20laborales"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-[#20bd5a] transition-colors group"
      >
        <MessageCircle size={32} />
        <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold pointer-events-none">
          ¿Dudas? Chat en vivo
        </div>
      </motion.a>

      {/* AI Assistant */}
      <ChatWidget />
    </div>
  );
}
