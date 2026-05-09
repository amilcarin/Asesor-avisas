import { MessageCircle, Facebook, Instagram, Share2, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Asesoría Migratoria Profesional',
          text: 'Tu futuro laboral en el extranjero comienza aquí. ¡Contáctalos!',
          url: window.location.href,
        });
      } catch (error) {
        // Silently handle AbortError (user canceled)
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error al compartir:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles: ' + window.location.href);
      } catch (err) {
        console.error('No se pudo copiar el enlace:', err);
      }
    }
  };

  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-[#002147] mb-6">Asesoría <br/><span className="text-[#C5A059]">Migratoria</span></h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dedicados a abrir puertas internacionales para el talento guatemalteco. Procesos legales, seguros y profesionales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 text-[#002147] rounded-full hover:bg-[#C5A059] hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-gray-100 text-[#002147] rounded-full hover:bg-[#C5A059] hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://wa.me/50259686584" className="p-2 bg-gray-100 text-[#002147] rounded-full hover:bg-green-500 hover:text-white transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#002147] mb-6 uppercase tracking-wider text-sm">Programas</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a 
                  href="https://wa.me/50259686584?text=Hola,%20quisiera%20información%20sobre%20Visas%20H-2A%20Agrícolas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  Visas H-2A (Agrícolas)
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50259686584?text=Hola,%20quisiera%20información%20sobre%20Visas%20H-2B%20de%20Servicios" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  Visas H-2B (Servicios)
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50259686584?text=Hola,%20quisiera%20información%20sobre%20Trabajo%20en%20Canadá" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  Trabajo en Canadá
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  Asesoría para Citas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#002147] mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#C5A059] flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Boulevard+Austriaco+Zona+16+Ciudad+de+Guatemala+Embajada+EEUU" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#002147] transition-colors"
                >
                  Boulevard Austriaco, Zona 16, frente a la Embajada de los Estados Unidos, Ciudad de Guatemala.
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#C5A059]" />
                <a href="tel:+50259686584" className="hover:text-[#002147] transition-colors">+502 5968-6584</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="text-[#C5A059]" />
                <span className="text-sm font-semibold text-[#002147]">Atención Presencial y Remota:</span>
              </li>
              <li className="pl-8 text-sm">
                Lunes a Viernes: 8:00 - 17:00
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#002147] mb-6 uppercase tracking-wider text-sm">Compartir</h4>
            <p className="text-gray-600 mb-6 text-sm">¿Conoces a alguien interesado? Ayúdale a encontrar su oportunidad.</p>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-white rounded-full font-bold hover:bg-[#b08d4a] transition-colors w-full justify-center shadow-lg"
            >
              <Share2 size={20} />
              Compartir Página
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2026 Asesoría Migratoria Profesional. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600">Privacidad</a>
            <a href="#" className="hover:text-gray-600">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
