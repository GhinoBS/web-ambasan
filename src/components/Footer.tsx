import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navigationLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Videolaringoscopio', path: '/videolaringoscopio' },
    { name: 'Otros Productos', path: '/otros-productos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Política de Privacidad', path: '/privacy' },
  ];

  return (
    <footer className="bg-[#183368] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">AM BASAN E.I.R.L.</h3>
            <p className="text-sm text-gray-300 mb-2">RUC: 20607825981</p>
            <p className="text-sm text-gray-300">
              Especialistas en equipos médicos para anestesiología y manejo de vía aérea difícil
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <div className="space-y-2">
              {navigationLinks.map(link => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => { e.preventDefault(); onNavigate(link.path); }}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="tel:+51962881108"
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +51 962 881 108
              </a>
              <a
                href="mailto:ventas_ambasan@hotmail.com"
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                ventas_ambasan@hotmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} AM BASAN E.I.R.L. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}