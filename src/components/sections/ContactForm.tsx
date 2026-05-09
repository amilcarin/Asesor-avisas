import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-[#002147]">
        <div className="container mx-auto px-6 max-w-lg">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-500 w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-[#002147] mb-4">¡Solicitud Enviada!</h3>
            <p className="text-gray-600 mb-8">
              Gracias por confiar en nosotros. Un asesor migratorio profesional se pondrá en contacto con usted vía WhatsApp en las próximas 24 horas.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Enviar otra solicitud</Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#002147] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl font-bold mb-6">Inicia tu Solicitud de Asesoría</h2>
            <div className="w-20 h-1.5 bg-[#C5A059] mb-8 rounded-full" />
            <p className="text-lg text-blue-100 mb-12 max-w-xl">
              Complete el siguiente formulario con sus datos reales para recibir una evaluación preliminar gratuita. Nuestro equipo verificará si cumple con el perfil para las vacantes actuales.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C5A059] font-bold">1</span>
                </div>
                <p className="text-blue-50">Llene sus datos personales y departamento de residencia.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C5A059] font-bold">2</span>
                </div>
                <p className="text-blue-50">Seleccione el país de su interés (EE.UU. o Canadá).</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C5A059] font-bold">3</span>
                </div>
                <p className="text-blue-50">Espere nuestra llamada o mensaje para agendar su cita.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nombre Completo</label>
                  <input required type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Edad</label>
                  <input required type="number" placeholder="Ej. 25" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Departamento de Residencia</label>
                <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none">
                  <option value="">Seleccione un departamento</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Huehuetenango">Huehuetenango</option>
                  <option value="Quetzaltenango">Quetzaltenango</option>
                  <option value="Alta Verapaz">Alta Verapaz</option>
                  <option value="San Marcos">San Marcos</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Interés</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer">
                    <input type="radio" name="country" value="USA" className="peer sr-only" defaultChecked />
                    <div className="px-4 py-3 text-center border border-gray-200 rounded-xl peer-checked:bg-[#002147] peer-checked:text-white transition-all">
                      EE.UU.
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="country" value="Canada" className="peer sr-only" />
                    <div className="px-4 py-3 text-center border border-gray-200 rounded-xl peer-checked:bg-[#002147] peer-checked:text-white transition-all">
                      Canadá
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Número de WhatsApp</label>
                <div className="relative">
                  <input required type="tel" placeholder="5968-6584" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none" />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+502</span>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full gap-2" size="lg">
                {loading ? "Enviando..." : "Solicitar Evaluación Ahora"}
                {!loading && <Send size={20} />}
              </Button>
              
              <p className="text-center text-xs text-gray-400">
                Al enviar acepta ser contactado por nuestros asesores. Información 100% confidencial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
