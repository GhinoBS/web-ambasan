import { Mail, Phone, Clock, Send, Briefcase, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function Contacto() {
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    Teléfono: '',
    Empresa: '',
    Asunto: '',
    Mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ventas_ambasan@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuevo Mensaje de Contacto: ${formData.Asunto}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
            Nombre: '', Email: '', Teléfono: '', Empresa: '', Asunto: '', Mensaje: '',
        });
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SEO
        title="Contacto | AM BASAN E.I.R.L. — Cotizaciones y Consultas"
        description="Contáctenos para cotizaciones de videolaringoscopios y equipos médicos. Teléfono: +51 962 881 108. Email: ventas_ambasan@hotmail.com"
        keywords="contacto AM BASAN, cotizar videolaringoscopio, equipos médicos peru contacto"
        canonical="https://ambasan.pe/contacto"
      />

      <div className="pt-20">
        <section className="bg-gradient-to-br from-[#183368] to-[#0293CA] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm mb-6 opacity-90">
              <span>Inicio</span> / <span className="font-semibold">Contacto</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctenos
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Estamos listos para atender sus consultas y cotizaciones
            </p>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div>
                <h2 className="text-3xl font-bold text-[#183368] mb-6">
                  Información de Contacto
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Puede comunicarse con nosotros a través de los siguientes canales o enviarnos un mensaje
                  directamente usando el formulario.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#0293CA] mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Teléfono / WhatsApp</h3>
                      <a href="tel:+51962881108" className="text-gray-600 hover:text-[#0293CA]">+51 962 881 108</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#0293CA] mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Correo Electrónico</h3>
                      <a href="mailto:ventas_ambasan@hotmail.com" className="text-gray-600 hover:text-[#0293CA]">ventas_ambasan@hotmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#0293CA] mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 am - 6:00 pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-[#0293CA] mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">RUC</h3>
                      <p className="text-gray-600">20607825981</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                    <a
                        href="https://wa.me/51962881108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                        <MessageSquare className="mr-3 h-6 w-6" />
                        Contactar por WhatsApp
                    </a>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-[#183368] mb-6">
                    Envíenos un Mensaje
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="Nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="Nombre"
                        name="Nombre"
                        required
                        value={formData.Nombre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0293CA] focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="Email"
                          name="Email"
                          required
                          value={formData.Email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0293CA] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="Teléfono" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="Teléfono"
                          name="Teléfono"
                          required
                          value={formData.Teléfono}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0293CA] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="Empresa" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa / Institución
                      </label>
                      <input
                        type="text"
                        id="Empresa"
                        name="Empresa"
                        value={formData.Empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0293CA] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="Asunto" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto *
                      </label>
                      <select
                        id="Asunto"
                        name="Asunto"
                        required
                        value={formData.Asunto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0293CA] focus:border-transparent"
                      >
                        <option value="">Seleccione un asunto</option>
                        <option value="Cotización Videolaringoscopio">Cotización Videolaringoscopio</option>
                        <option value="Información Técnica">Información Técnica</option>
                        <option value="Soporte Técnico">Soporte Técnico</option>
                        <option value="Consulta General">Consulta General</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="Mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje *
                      </label>
                      <textarea
                        id="Mensaje"
                        name="Mensaje"
                        rows={5}
                        required
                        value={formData.Mensaje}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0293CA] focus:border-transparent"
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                        Mensaje enviado exitosamente. Nos contactaremos pronto.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                        Error al enviar el mensaje. Por favor, intente de nuevo o contáctenos por WhatsApp.
                        </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 flex items-center justify-center"
                    >
                      {isSubmitting ? 'Enviando...' : <><Send className="h-5 w-5 mr-2" />Enviar Mensaje</>}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}