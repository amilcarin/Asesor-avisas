import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Volume2, VolumeX, User, Bot } from 'lucide-react';
import { chatWithElena } from '@/src/services/geminiService';
import { cn } from '@/src/lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Qué gusto saludarle! Soy Sofía. ¿Ya cuenta con su pasaporte vigente o le gustaría que le apoye con información sobre nuestros procesos para EE.UU. y Canadá? 🇬🇹' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ttsEnabled, setTtsEnabled] = useState(true);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const speak = (text: string) => {
    if (!ttsEnabled || !window.speechSynthesis) return;

    // Cancel existing speech
    window.speechSynthesis.cancel();

    // Clean text: remove asterisks and other symbols that TTS might read aloud
    let cleanText = text.replace(/[\*\#\_]/g, '').trim();
    
    // Regex to find 8-digit phone numbers (with or without hyphen) 
    // and format them into pairs for better TTS narration (e.g. 59 68 65 84)
    cleanText = cleanText.replace(/(\d{2})(\d{2})[-]?(\d{2})(\d{2})/g, '$1 $2 $3 $4');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-MX'; // Mexican accent is closest to general Latin American/Central American in standard TTS
    utterance.rate = 0.95;
    utterance.pitch = 1.05; // Slightly higher/softer for "Elena"

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithElena(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
    
    if (isOpen) {
      speak(response);
    }
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 50 }}
            className="fixed bottom-24 right-5 z-50 flex flex-col items-center gap-2"
          >
            <button
              onClick={() => setIsDismissed(true)}
              className="bg-white/90 text-gray-400 p-1 rounded-full shadow-md hover:text-red-500 transition-colors border border-gray-100"
              title="Cerrar asistente"
            >
              <X size={12} />
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 bg-[#C5A059] text-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                alt="Sofía Asistente"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full h-[85vh] sm:h-[600px] sm:w-96 bg-white sm:rounded-3xl shadow-[0_0_50px_rgba(0,33,71,0.2)] flex flex-col z-[100] overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#002147] p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
                    alt="Sofía" 
                    className="w-10 h-10 rounded-full bg-white object-cover border border-[#C5A059]"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#002147]" />
                </div>
                <div>
                  <p className="font-bold leading-none mb-1">Sofía</p>
                  <p className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">En línea ahora</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setTtsEnabled(!ttsEnabled)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title={ttsEnabled ? "Desactivar voz" : "Activar voz"}
                >
                  {ttsEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-100 rounded-full transition-colors text-sm font-bold"
                >
                  <X size={18} />
                  <span>Cerrar</span>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4 scroll-smooth"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "max-w-[85%] p-3 rounded-2xl flex items-start gap-2 text-sm",
                    m.role === 'user' 
                      ? "bg-[#002147] text-white self-end rounded-br-none shadow-md" 
                      : "bg-white text-gray-800 self-start shadow-sm rounded-bl-none border border-gray-100"
                  )}
                >
                  {m.role === 'model' && <Bot size={16} className="mt-1 flex-shrink-0 text-[#C5A059]" />}
                  <span className="leading-relaxed">{m.text}</span>
                  {m.role === 'user' && <User size={16} className="mt-1 flex-shrink-0 text-blue-300" />}
                </motion.div>
              ))}
              {isTyping && (
                <div className="self-start bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-1">
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                </div>
              )}
            </div>

            {/* Input Overlay with Close option */}
            <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3 shrink-0">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Duda: Visa, costos, citas..."
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 bg-[#C5A059] text-white rounded-full disabled:opacity-50 hover:bg-[#b08d4a] transition-colors shadow-md"
                >
                  <Send size={18} />
                </button>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xs text-gray-400 hover:text-[#002147] transition-colors text-center font-medium py-1"
              >
                Finalizar consulta y navegar la página
              </button>
            </div>
            
            {isSpeaking && (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white px-3 py-1 rounded-full text-[10px] flex items-center gap-2 shadow-lg animate-pulse z-10">
                <Volume2 size={10} /> Sofía está hablando...
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
