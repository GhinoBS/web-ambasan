import { Target, Eye, Award, Users, Heart, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

interface NosotrosProps {
  onOpenQuote: () => void;
}

export default function Nosotros({ onOpenQuote }: NosotrosProps) {
  return (
    <>
      <SEO
        title="Nosotros | AM BASAN E.I.R.L. — Especialistas en Equipos Médicos"
        description="AM BASAN E.I.R.L. es una empresa peruana dedicada a la importación y venta de equipos médicos especializados en anestesiología y manejo de vía aérea difícil."
        keywords="AM BASAN, equipos médicos peru, empresa equipos médicos, anestesiología peru"
        canonical="https://ambasan.com/nosotros"
      />

      <div className="pt-20">
        <section className="bg-gradient-to-br from-[#183368] to-[#0293CA] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm mb-6 opacity-90">
              <span>Inicio</span> / <span className="font-semibold">Nosotros</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre AM BASAN E.I.R.L.
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Comprometidos con la excelencia en equipos médicos para anestesiología
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-6">
                  Quiénes Somos
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  AM BASAN E.I.R.L. es una empresa peruana dedicada a la importación y venta de equipos médicos
                  de alta precisión, especializada en anestesiología y manejo de vía aérea difícil.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  Brindamos equipos certificados, soporte técnico y asesoría especializada para personal de salud
                  en hospitales y clínicas de todo el país.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Nuestro compromiso es proveer tecnología médica de vanguardia que mejore los resultados clínicos
                  y la seguridad de los pacientes en procedimientos críticos.
                </p>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">RUC</p>
                  <p className="text-2xl font-bold text-[#183368]">20607825981</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 flex items-center justify-center">
                <img
                  src="/assets/logo.png"
                  alt="AM BASAN E.I.R.L."
                  className="w-full max-w-md h-auto bg-white p-8 rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#183368] to-[#0293CA] text-white rounded-2xl p-8">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="leading-relaxed text-lg">
                  Proveer soluciones tecnológicas médicas de alta calidad que mejoren la seguridad y los resultados clínicos
                  en anestesiología y manejo de vía aérea difícil, mediante equipos certificados, servicio técnico y capacitación.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0293CA] to-[#03e28f] text-white rounded-2xl p-8">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="leading-relaxed text-lg">
                  Ser el referente líder en Perú como proveedor confiable de videolaringoscopios y soluciones para vía aérea,
                  contribuyendo a la innovación y seguridad en la atención sanitaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-12 text-center">
              Nuestros Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#183368] mb-3">Calidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Importamos únicamente equipos médicos certificados que cumplen con los más altos estándares
                  internacionales de calidad y seguridad.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#183368] mb-3">Compromiso</h3>
                <p className="text-gray-600 leading-relaxed">
                  Estamos comprometidos con la salud de los pacientes y el éxito profesional de nuestros clientes
                  mediante soporte continuo.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#183368] mb-3">Servicio</h3>
                <p className="text-gray-600 leading-relaxed">
                  Brindamos atención personalizada, capacitación especializada y soporte técnico para garantizar
                  el máximo aprovechamiento de nuestros equipos.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#183368] mb-3">Profesionalismo</h3>
                <p className="text-gray-600 leading-relaxed">
                  Actuamos con integridad, responsabilidad y transparencia en cada transacción y relación comercial
                  con nuestros clientes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#183368] mb-3">Innovación</h3>
                <p className="text-gray-600 leading-relaxed">
                  Buscamos constantemente las últimas tecnologías médicas para ofrecer soluciones innovadoras
                  que marquen la diferencia.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#183368] mb-3">Confianza</h3>
                <p className="text-gray-600 leading-relaxed">
                  Construimos relaciones duraderas basadas en la confianza, el cumplimiento y la satisfacción
                  de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183368] mb-12 text-center">
              Por Qué Elegirnos
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] rounded-full p-2 mr-4 flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#183368] mb-2">Equipos Certificados</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Todos nuestros videolaringoscopios y equipos médicos cuentan con certificaciones CE, FDA
                        y cumplen normas internacionales de calidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] rounded-full p-2 mr-4 flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#183368] mb-2">Soporte Especializado</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Contamos con personal capacitado que brinda soporte técnico, mantenimiento y capacitación
                        continua para el uso óptimo de los equipos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] rounded-full p-2 mr-4 flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#183368] mb-2">Experiencia Local</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Entendemos las necesidades del sector salud peruano y ofrecemos soluciones adaptadas
                        a hospitales, clínicas y centros médicos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] rounded-full p-2 mr-4 flex-shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#183368] mb-2">Garantía y Respaldo</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ofrecemos garantía oficial en todos nuestros productos y respaldo post-venta para
                        asegurar la continuidad operativa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#183368] to-[#0293CA] rounded-2xl p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">¿Listo para equipar su institución?</h3>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Solicite una cotización personalizada del videolaringoscopio CoreRay CR31 y descubra cómo podemos
                  ayudarle a mejorar la seguridad en sus procedimientos de anestesiología.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="bg-white text-[#0293CA] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Solicitar cotización
                  </button>
                  <a
                    href="https://wa.me/51962881108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0293CA] transition-colors text-center"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}