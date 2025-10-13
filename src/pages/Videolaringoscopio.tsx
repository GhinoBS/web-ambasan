import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Monitor, Battery, Wifi, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

interface VideolaringoscopioProps {
  onOpenQuote: () => void;
}

export default function Videolaringoscopio({ onOpenQuote }: VideolaringoscopioProps) {
  // Datos de hojas integrados
  const blades: { name: string; description: string; reusable?: boolean }[] = [
    { name: 'MIL-0', description: 'Hoja para uso neonatal, diseñada para neonatos y lactantes con anatomía pequeña.', reusable: true },
    { name: 'Mac1', description: 'Hoja Macintosh para uso pediátrico, anatomía estándar.', reusable: true },
    { name: 'Mac2', description: 'Hoja Macintosh para adulto pequeño.', reusable: true },
    { name: 'Mac3', description: 'Hoja Macintosh estándar para adultos, el modelo más utilizado en anestesiología.', reusable: true },
    { name: 'Mac4', description: 'Hoja Macintosh grande para adultos con cuello largo o anatomía especial.', reusable: true },
    { name: 'D-Blade', description: 'Hoja de doble curvatura para vía aérea difícil, anatomías complejas o limitación de apertura oral.', reusable: true },
  ];

  // Imagenes del producto
  const images = [
    { src: '/assets/VIDEOLARINGOSCOPIO 1.png', alt: 'Videolaringoscopio CoreRay CR31 - Vista principal' },
    { src: '/assets/VIDEOLARINGOSCOPIO 2.png', alt: 'Videolaringoscopio CoreRay CR31 - Vista lateral' },
    { src: '/assets/VIDEOLARINGOSCOPIO 3.png', alt: 'Videolaringoscopio CoreRay CR31 - Detalle' },
    { src: '/assets/VIDEOLARINGOSCOPIO 4.png', alt: 'Videolaringoscopio CoreRay CR31 - Accesorios' },
  ];

  const [current, setCurrent] = useState<number>(0);
  const timeoutRef = useRef<number | null>(null);

  // Opcional: autoplay (puedes desactivarlo poniendo false)
  const AUTOPLAY = false;
  const AUTOPLAY_DELAY = 5000;

  useEffect(() => {
    if (!AUTOPLAY) return;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, AUTOPLAY_DELAY);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // px
    if (diff > threshold) {
      // swipe left -> next
      next();
    } else if (diff < -threshold) {
      // swipe right -> prev
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = () => {
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <>
      <SEO
        title="Videolaringoscopio CoreRay CR31 en Perú | AM BASAN"
        description="Especificaciones técnicas del Videolaringoscopio CoreRay CR31. Imagen HD, diseño ergonómico y hojas reusables. Ideal para manejo de vía aérea difícil. Cotizaciones en todo Perú."
        keywords="videolaringoscopio CoreRay CR31, videolaringoscopio peru, manejo via aérea difícil, especificaciones tecnicas videolaringoscopio, equipos medicos peru"
        canonical="https://ambasan.pe/videolaringoscopio"
      />

      <div className="pt-20">
        <section className="bg-gradient-to-br from-[#183368] to-[#0293CA] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm mb-6 opacity-90">
              <span>Inicio</span> / <span className="font-semibold">Videolaringoscopio CoreRay CR31</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Videolaringoscopio CoreRay CR31
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Tecnología avanzada en imagen HD para el manejo seguro y eficiente de vías aéreas difíciles
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                {/* Slider */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 mb-6">
                  <div
                    className="relative w-full overflow-hidden rounded-lg"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    aria-roledescription="carousel"
                    aria-label="Galería de imágenes del CoreRay CR31"
                  >
                    {/* Imágenes superpuestas (fade) */}
                    <div className="relative w-full h-[360px] md:h-[480px] flex items-center justify-center">
                      {images.map((img, i) => (
                        <img
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          className={`absolute inset-0 m-auto max-h-[92%] max-w-[96%] object-contain rounded-lg transition-opacity duration-500 ease-in-out ${
                            i === current ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'
                          }`}
                          style={{ background: 'white', padding: '1rem' }}
                        />
                      ))}

                      {/* Flechas */}
                      <button
                        aria-label="Anterior"
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-30 focus:outline-none"
                      >
                        <ChevronLeft className="w-6 h-6 text-[#183368]" />
                      </button>
                      <button
                        aria-label="Siguiente"
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-30 focus:outline-none"
                      >
                        <ChevronRight className="w-6 h-6 text-[#183368]" />
                      </button>

                      {/* Indicador simple */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                        {images.map((_, i) => (
                          <button
                            key={`dot-${i}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Ir a la imagen ${i + 1}`}
                            className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {images.map((img, i) => (
                      <button
                        key={`thumb-${i}`}
                        onClick={() => setCurrent(i)}
                        className={`rounded-lg overflow-hidden border-2 focus:outline-none transition-transform transform ${
                          i === current ? 'scale-105 border-[#0293CA] shadow-lg' : 'border-transparent'
                        }`}
                        aria-label={`Seleccionar imagen ${i + 1}`}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-20 object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#183368] mb-4">
                    Características Principales
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    El videolaringoscopio Coreray CR-31 es un equipo médico de alta precisión diseñado para profesionales de la anestesiología y especialistas en manejo de vía aérea difícil. Este videolaringoscopio táctil cuenta con tecnología de pantalla táctil de 4.5 pulgadas que permite visualización en tiempo real de las estructuras anatómicas durante procedimientos de intubación.
                    <br />
                    Como videolaringoscopio en Perú, el modelo CR-31 se ha convertido en la elección preferida de hospitales e instituciones de salud gracias a su portabilidad, batería de larga duración y hojas reusables que permiten adaptarse a diferentes tipos de pacientes y escenarios clínicos. El videolaringoscopio para anestesiología Coreray CR-31 ofrece grabación automática en tarjeta Micro SD, facilitando la documentación de procedimientos y la capacitación del personal médico.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      { title: 'Imagen HD con sistema antiempañamiento', text: 'Visualización clara y nítida en todo momento' },
                      { title: 'Hoja intercambiable', text: 'Compatible con hojas MIL-0, Mac1, Mac2, Mac3, Mac4 y D-Blade' },
                      { title: 'Conectividad por cable tipo C', text: 'Para carga de batería y transferencia de datos' },
                      { title: 'Grabación de procedimientos', text: 'Documentación y revisión de casos clínicos gracias a la memoria interna de 16 GB' },
                      { title: 'Diseño ergonómico', text: 'Comodidad y precisión en cada procedimiento' },
                      { title: 'Estuche rígido incluido', text: 'Protección y portabilidad garantizadas' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[#03e28f] mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-[#183368]">{item.title}</strong>
                          <p className="text-sm text-gray-600">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                    >
                      Pedir cotización
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#183368] mb-12 text-center">
              Especificaciones Técnicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <SpecCard icon={<Monitor />} title="Pantalla" text='Táctil de 4.5" (1280 × 720 px)' />
              <SpecCard icon={<Monitor />} title="Resolución de cámara" text="1280×720 px" />
              <SpecCard icon={<Wifi />} title="Conectividad" text="Cable tipo C" />
              <SpecCard icon={<Battery />} title="Batería" text="Autonomía de más de 5 horas de uso continuo" />
              <SpecCard icon={<Package />} title="Material" text="Carcasa resistente y esterilizable" />
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#183368] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Especificación</th>
                      <th className="px-6 py-4 text-left font-semibold">Detalle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Tipo</td><td className="px-6 py-4 text-gray-600">Videolaringoscopio portátil</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Pantalla</td><td className="px-6 py-4 text-gray-600">4.5" Táctil (HD)</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Resolución de imagen</td><td className="px-6 py-4 text-gray-600">1280×720 px</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Conectividad</td><td className="px-6 py-4 text-gray-600">Tipo C</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Batería</td><td className="px-6 py-4 text-gray-600">3300 mAh (más de 5 h)</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Peso</td><td className="px-6 py-4 text-gray-600">Aprox. 220 g</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Memoria</td><td className="px-6 py-4 text-gray-600">Micro SD 16 GB</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Sistema antiempañamiento</td><td className="px-6 py-4 text-gray-600">Sí, integrado</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Grabación de video</td><td className="px-6 py-4 text-gray-600">Sí, en memoria interna de 16 GB</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- Sección integrada: Hojas Reusables --- */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-[#183368] mb-6 text-center">Hojas Reusables Incluidas</h3>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                El CoreRay CR-31 incluye un juego completo de hojas reusables (esterilizables) para diferentes tipos de pacientes y situaciones clínicas. Cada hoja está diseñada con un perfil específico para optimizar la visualización en diferentes anatomías.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blades.map((blade) => (
                  <div
                    key={blade.name}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#0293CA] hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-[#183368]">{blade.name}</h4>
                      {blade.reusable && (
                        <span className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Reusable
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{blade.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* --- fin sección hojas --- */}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#183368] mb-8 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              <FAQ title="¿Qué garantía tiene el equipo?" text="Todos nuestros videolaringoscopios cuentan con garantía oficial del fabricante de 12 meses, además de soporte técnico especializado en Perú." />
              <FAQ title="¿Cuál es el plazo de entrega?" text="Generalmente contamos con equipos disponibles para entrega inmediata en Lima y envíos nacionales en 2-5 días hábiles." />
              <FAQ title="¿Ofrecen capacitación para el uso del videolaringoscopio?" text="Sí, brindamos capacitación técnica completa sobre el uso y mantenimiento del videolaringoscopio CoreRay CR31 como parte de nuestro servicio integral." />
              <FAQ title="¿Las hojas son reutilizables?" text="Sí, el CoreRay CR31 incluye hojas reusables que pueden esterilizarse y adaptarse a diferentes tipos de pacientes." />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesita más información sobre el CoreRay CR31?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicite una cotización personalizada o contáctenos para resolver sus dudas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onOpenQuote}
                className="bg-white text-[#0293CA] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Solicitar cotización
              </button>
              <a
                href="https://wa.me/51962881108"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0293CA] transition-colors"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function SpecCard({ icon, title, text }: { icon: JSX.Element; title: string; text: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="font-bold text-[#183368] mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function FAQ({ title, text }: { title: string; text: string }) {
  return (
    <details className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
      <summary className="font-semibold text-[#183368] cursor-pointer">
        {title}
      </summary>
      <p className="mt-4 text-gray-600 leading-relaxed">{text}</p>
    </details>
  );
}