import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { ArrowRight, Globe, ShieldCheck, Briefcase } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#002147]">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147] via-transparent to-[#002147] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
          alt="International Business" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-12 pt-20">
        <div className="md:w-1/2 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#C5A059] text-[#002147] text-sm font-bold mb-6 tracking-wide uppercase">
              Asesoría Migratoria Profesional
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Tu Futuro Laboral <br />
              <span className="text-[#C5A059]">Comienza Aquí</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
              Expertos en la gestión de visas laborales H-2A y H-2B para EE.UU. y programas de trabajo en Canadá. Construimos puentes hacia nuevas oportunidades para los trabajadores guatemaltecos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Iniciar mi Trámite
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#002147]">
                Ver Programas
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Globe className="text-[#C5A059]" size={24} />
                <p className="text-xs uppercase tracking-wider font-semibold">USA & Canadá</p>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#C5A059]" size={24} />
                <p className="text-xs uppercase tracking-wider font-semibold">100% Legal</p>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-[#C5A059]" size={24} />
                <p className="text-xs uppercase tracking-wider font-semibold">Empleo Seguro</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(197,160,89,0.3)] border-4 border-[#C5A059]/20">
            {/* User: Substitute your image here */}
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000" 
              alt="Visa Hero" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002147] to-transparent opacity-40" />
          </div>
          
          {/* Decorative Floating Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A059] rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
};
