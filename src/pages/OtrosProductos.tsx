import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { ArrowRight, X } from 'lucide-react';

interface OtrosProductosProps {
  onOpenQuote: () => void;
}

const productos = [
    {
    nombre: "Video Estilete",
    marca: "Coreray",
    descripcion: "Para intubación traqueal de rutina y difícil. Ideal para anestesia, UCI, quirófano, rescate de emergencia, etc.",
    imagen: "/assets/video_estilete.png",
  },
  {
    nombre: "Laringoscopios Convencionales y Fibra Óptica",
    marca: "Riester / Riester surgical",
    descripcion: "Hojas Macintosh, Miller y articuladas de diversos tamaños, desde prematuro hasta adulto extra grande. Mangos de acero inoxidable.",
    imagen: "/assets/laringoscopio_convencional.png",
  },
  {
    nombre: "Guías para Tubo Endotraqueal (Bougie)",
    marca: "Formed",
    descripcion: "Herramienta para guiar la intubación endotraqueal, especialmente útil en casos de intubación difícil. Tamaños adulto y pediátrico.",
    imagen: "/assets/guias_endotraqueales.png",
  },
  {
    nombre: "Resucitador Manual",
    marca: "BESMED",
    descripcion: "Designado para la respiración artificial y la resucitación cardiopulmonar. Tamaños adulto, pediátrico y neonatal. Reusable y autoclavable.",
    imagen: "/assets/resucitador.png",
  },
  {
    nombre: "Máscara Laríngea",
    marca: "Medix / Formed / Medprot",
    descripcion: "Disponibles en versiones reusables (silicona) y descartables (PVC). Tamaños desde 0-5 kg hasta 70-100 kg.",
    imagen: "/assets/mascara_laringea.png",
  },
  {
    nombre: "Máscara de Anestesia de PVC",
    marca: "Hsiner",
    descripcion: "Mascarilla con cojín de aire y válvula, de uso desechable. Tamaños desde neonato hasta adulto extragrande.",
    imagen: "/assets/mascara_anestesia.png",
  },
  {
    nombre: "Pinzas Magill",
    marca: "Comedsa / Riester surgical",
    descripcion: "Fabricadas en acero inoxidable, disponibles en tamaños para infante, pediátrico y adulto.",
    imagen: "/assets/pinzas_magill.png",
  },
  {
    nombre: "Tubos Endotraqueales",
    marca: "Ecan / Rusch / Sunmed",
    descripcion: "Con o sin balón, disponibles en una amplia gama de tamaños, también disponible en modelo anillado.",
    imagen: "/assets/tubos_endotraqueales.png",
  },
  {
    nombre: "Tubos Nasofaríngeos",
    marca: "Medix / Formed",
    descripcion: "Tubo de polímero grado médico, suave y flexible. Múltiples tamaños disponibles.",
    imagen: "/assets/tubos_nasofaringeos.png",
  },
  {
    nombre: "Tubos Orofaríngeos (Cánula de Guedel)",
    marca: "Matthew / Medix / Medprot",
    descripcion: "Evita la caída de la lengua y la obstrucción del paso de aire. Codificación de colores para identificación de tamaño.",
    imagen: "/assets/tubos_orofaringeos.png",
  },
  {
    nombre: "Guia Reusable",
    marca: "Coreray",
    descripcion: "Guía reusable diseñada para facilitar la intubación traqueal. Proporciona rigidez y forma adecuada al tubo endotraqueal.",
    imagen: "/assets/guia_reusable.png",
  },
  {
    nombre: "Coche de Paro",
    marca: "",
    descripcion: "Fabricado en material ABS de alta resistencia, con soporte para tanque de oxígeno, tablero para RCP y cerradura centralizada.",
    imagen: "/assets/coche_paro.png",
  },
];

export default function OtrosProductos({ onOpenQuote }: OtrosProductosProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);


  return (
    <>
      <SEO
        title="Otros Productos | AM BASAN E.I.R.L. — Equipos Médicos"
        description="Catálogo de equipos médicos adicionales para anestesiología y manejo de vía aérea, incluyendo laringoscopios, resucitadores, máscaras laríngeas y más."
        keywords="equipos médicos perú, laringoscopio convencional, resucitador manual, máscara laríngea, pinzas magill"
        canonical="https://ambasan.com/otros-productos"
      />

      <div className="pt-20">
        <section className="bg-gradient-to-br from-[#183368] to-[#0293CA] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm mb-6 opacity-90">
              <span>Inicio</span> / <span className="font-semibold">Otros Productos</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Productos</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Soluciones integrales para anestesiología y manejo de la vía aérea.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.map((producto, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="h-64 bg-gray-200 cursor-pointer" onClick={() => setSelectedImage(producto.imagen)}>
                    <img src={producto.imagen} alt={producto.nombre} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#183368] mb-2">{producto.nombre}</h3>
                    {producto.marca && <p className="text-sm text-gray-500 mb-2">Marca: {producto.marca}</p>}
                    <p className="text-gray-600 leading-relaxed flex-grow">{producto.descripcion}</p>
                    <button
                      onClick={onOpenQuote}
                      className="mt-4 bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center"
                    >
                      Solicitar Cotización <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20 pt-12 border-t">
              <h3 className="text-3xl font-bold text-[#183368] mb-8 text-center">También contamos con:</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto text-gray-700">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Bomba de infusión</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Electrocardiógrafo</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Desfibriladores</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Máquina de anestesia</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Monitor multiparámetros</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Aspiradores de secreciones</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Ecógrafos</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Termómetros</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Pulsoxímetro</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Pantoscopios</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Estetoscopio</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-3 text-[#0293CA]" />Tensiómetro</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Vista ampliada" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-5 -right-5 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition shadow-lg"
              aria-label="Cerrar imagen"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}