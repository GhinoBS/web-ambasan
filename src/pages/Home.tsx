import { ArrowRight, CheckCircle2, Shield, Headphones, Truck } from 'lucide-react';
import SEO from '../components/SEO';

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
}

export default function Home({ onNavigate, onOpenQuote }: HomeProps) {
  const entregas = [
    { src: '/assets/entregas/entrega_1.jpg', alt: 'Entrega de Videolaringoscopio 1' },
    { src: '/assets/entregas/entrega_2.jpg', alt: 'Entrega de Videolaringoscopio 2' },
    { src: '/assets/entregas/entrega_3.jpg', alt: 'Entrega de Videolaringoscopio 3' },
    { src: '/assets/entregas/entrega_4.jpg', alt: 'Entrega de Videolaringoscopio 4' },
  ];
  
  const otrosProductosPreview = [
    { nombre: "Laringoscopios", imagen: "/assets/laringoscopio_convencional.png", alt: "Laringoscopios Convencionales" },
    { nombre: "Guías (Bougie)", imagen: "/assets/guias_endotraqueales.png", alt: "Guías Endotraqueales (Bougie)" },
    { nombre: "Resucitador Manual", imagen: "/assets/resucitador.png", alt: "Resucitador Manual" },
    { nombre: "Pinzas Magill", imagen: "/assets/pinzas_magill.png", alt: "Pinzas Magill" },
  ];

  return (
    <>
      <SEO
        title="AM BASAN E.I.R.L. | Videolaringoscopios y Equipos Médicos en Perú"
        description="AM BASAN E.I.R.L. — Importación y venta de videolaringoscopios CoreRay CR31 y soluciones para manejo de vía aérea difícil en todo el Perú. Cotizaciones y soporte a nivel nacional."
        keywords="videolaringoscopio, videolaringoscopio peru, CoreRay CR31, manejo via aérea difícil, equipos anestesiología, am basan, equipos medicos peru"
        canonical="https://ambasan.pe/"
      />

      <section className="relative bg-gradient-to-br from-[#183368] via-[#183368] to-[#0293CA] text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AM BASAN — Especialistas en Videolaringoscopios y Equipos para Vía Aérea Difícil en Perú
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Importación y comercialización de equipos médicos para anestesiología. Tecnología confiable, soporte técnico y entrega a nivel nacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-shadow flex items-center justify-center"
                >
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('videolaringoscopio')}
                  className="bg-white text-[#183368] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Ver Videolaringoscopio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="/assets/EMPRESA.PNG"
                  alt="Videolaringoscopio CoreRay CR31 en Perú"
                  className="w-full h-auto rounded-lg bg-white p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#183368] mb-2">Equipos Certificados</h3>
              <p className="text-sm text-gray-600">Importamos solo equipos médicos certificados y de alta calidad</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#183368] mb-2">Soporte Técnico</h3>
              <p className="text-sm text-gray-600">Asistencia técnica especializada y capacitación continua</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#183368] mb-2">Entrega Nacional</h3>
              <p className="text-sm text-gray-600">Cobertura en todo Perú con envíos seguros y rápidos</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#183368] mb-2">Garantía</h3>
              <p className="text-sm text-gray-600">Respaldo y garantía oficial en todos nuestros equipos</p>
            </div>
          </div>
        </div>
      </section>

      <section id="videolaringoscopio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-4">
              Videolaringoscopio CoreRay CR31
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología avanzada para el manejo seguro de vías aéreas difíciles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
                  <img
                    src="/assets/VIDEOLARINGOSCOPIO 1.png"
                    alt="Videolaringoscopio CoreRay CR31"
                    className="max-w-full h-auto bg-white p-4 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#183368] mb-6">
                CoreRay CR31: videolaringoscopio portátil con pantalla táctil
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Diseño ergonómico y herramientas especializadas para intubación en vías aéreas difíciles.
                El videolaringoscopio más confiable del mercado peruano.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Imagen HD con sistema antiempañamiento</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Hoja intercambiable y reusable</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Puerto tipo C para carga y transferencia de datos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Grabación de procedimientos en memoria interna</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Diseño ergonómico</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Estuche rígido y accesorios incluidos</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('videolaringoscopio')}
                  className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center"
                >
                  Ver especificaciones
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={onOpenQuote}
                  className="border-2 border-[#0293CA] text-[#0293CA] px-6 py-3 rounded-lg font-semibold hover:bg-[#0293CA] hover:text-white transition-colors"
                >
                  Pedir cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-4">
              Entregas Realizadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros equipos médicos llegando a especialistas en todo el país.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entregas.map((entrega, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={entrega.src} alt={entrega.alt} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-4">
              Nuestro Catálogo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestra variedad de soluciones para anestesiología y manejo de la vía aérea.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {otrosProductosPreview.map((producto) => (
              <div key={producto.nombre} className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 transition-transform transform hover:scale-105">
                <div className="h-32 flex items-center justify-center mb-4">
                  <img src={producto.imagen} alt={producto.alt} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="font-bold text-sm md:text-base text-[#183368]">{producto.nombre}</h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => onNavigate('otros-productos')}
              className="bg-gradient-to-r from-[#183368] to-[#0293CA] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-6">
                Quiénes Somos
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                AM BASAN E.I.R.L. es una empresa peruana dedicada a la importación y venta de equipos médicos de alta precisión,
                especializada en anestesiología y manejo de vía aérea difícil. Brindamos equipos certificados, soporte técnico
                y asesoría para personal de salud en hospitales y clínicas.
              </p>
              <button
                onClick={() => onNavigate('nosotros')}
                className="text-[#0293CA] font-semibold flex items-center hover:text-[#183368] transition-colors"
              >
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#183368] to-[#0293CA] rounded-2xl p-8 text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="leading-relaxed">
                  Proveer soluciones tecnológicas médicas de alta calidad que mejoren la seguridad y los resultados clínicos
                  en anestesiología y manejo de vía aérea difícil, mediante equipos certificados, servicio técnico y capacitación.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="leading-relaxed">
                  Ser el referente líder en Perú como proveedor confiable de videolaringoscopios y soluciones para vía aérea,
                  contribuyendo a la innovación y seguridad en la atención sanitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para mejorar sus procesos de anestesiología?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Solicite una cotización personalizada o contáctenos para más información sobre el videolaringoscopio CoreRay CR31
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenQuote}
              className="bg-white text-[#0293CA] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Solicitar cotización
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0293CA] transition-colors"
            >
              Contactar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}