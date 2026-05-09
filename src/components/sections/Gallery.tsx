import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

const IMAGENES = [
  { id: 1, src: "https://images.unsplash.com/photo-1569336415962-a4bd9f67c0f1?q=80&w=800", title: "Infografía Visas H-2A" },
  { id: 2, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", title: "Oportunidades en Canadá" },
  { id: 3, src: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800", title: "Nuestros Servicios" },
  { id: 4, src: "https://images.unsplash.com/photo-1600880212340-02d956ea7189?q=80&w=820", title: "Posters Informativos" },
  { id: 5, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800", title: "Asesoría Profesional" },
  { id: 6, src: "https://placeholder_img_1.jpg", title: "Tu Logo Aquí" },
  { id: 7, src: "https://placeholder_img_2.jpg", title: "Checklist de Requisitos" },
  { id: 8, src: "https://placeholder_img_3.jpg", title: "Testimonios de Éxito" },
];

export const Gallery = () => {
  const downloadChecklist = () => {
    // Logic to download PDF
    const link = document.createElement('a');
    link.href = '#'; // In a real app, this would be a link to public/Requisitos_Visa_Laboral.pdf
    link.download = 'Requisitos_Visa_Laboral.pdf';
    alert('Simulando descarga: Requisitos_Visa_Laboral.pdf\n(Agregue el archivo real en la carpeta public/)');
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">Galería de Información</h2>
          <div className="w-20 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nuestras infografías y pósters informativos para conocer más sobre los programas de visas laborales disponibles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMAGENES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5] bg-gray-100"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x500?text=${encodeURIComponent(img.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-bold text-xl">{img.title}</p>
                <button className="text-[#C5A059] text-sm font-semibold mt-2 flex items-center gap-1">
                  Ver detalles <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
            <div className="bg-[#002147] text-white px-8 py-4 rounded-2xl mb-8 flex flex-col items-center shadow-xl border-b-4 border-[#C5A059]">
                <p className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-1">Único Pago por Asesoría</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold">Q</span>
                    <span className="text-4xl font-extrabold tracking-tighter">1,000.00</span>
                </div>
            </div>
            <Button size="lg" variant="secondary" onClick={downloadChecklist} className="gap-2">
                <Download size={20} />
                Descargar Checklist de Requisitos (PDF)
            </Button>
            <p className="mt-4 text-xs text-gray-400 italic">Todo reclutamiento es gratuito y legalmente gestionado.</p>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
