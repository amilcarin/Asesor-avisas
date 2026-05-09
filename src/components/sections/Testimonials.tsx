import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Carlos Méndez",
    origin: "Huehuetenango",
    text: "Gracias a la asesoría logré mi visa H-2A. Ahora estoy trabajando en California y puedo enviarle dinero a mi familia para construir nuestra casa. ¡Muy agradecido!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    name: "María López",
    origin: "Quetzaltenango",
    text: "El proceso para Canadá fue muy claro. La atención de los asesores es excelente y siempre resuelven todas las dudas. ¡Súper recomendado!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    name: "Juan Reyes",
    origin: "Zacapa",
    text: "Pensé que era imposible, pero con el seguimiento correcto logré mi contrato laboral. Es un cambio de vida total para mí y mi familia.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">Historias de Éxito</h2>
          <div className="w-20 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-6" />
          <p className="text-gray-600">Guatemaltecos que ya están cumpliendo sus metas gracias a una asesoría profesional y legal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl relative group hover:translate-y--2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-8 text-[#C5A059]/20 w-12 h-12" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C5A059]"
                />
                <div>
                  <p className="font-bold text-[#002147]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.origin}, GT</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#C5A059] text-[#C5A059]" />)}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
