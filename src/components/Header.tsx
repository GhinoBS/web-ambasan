import { Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', page: 'home', path: '/' },
    { name: 'Videolaringoscopio', page: 'videolaringoscopio', path: '/videolaringoscopio' },
    { name: 'Otros Productos', page: 'otros-productos', path: '/otros-productos' },
    { name: 'Nosotros', page: 'nosotros', path: '/nosotros' },
    { name: 'Contacto', page: 'contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="flex items-center cursor-pointer">
            <img
              src="/assets/logo.png"
              alt="AM BASAN E.I.R.L. Logo"
              className="h-12 w-auto bg-white p-2 rounded"
            />
            <div className="ml-3">
              <span className="text-xl font-bold text-[#183368]">AM BASAN</span>
              <p className="text-xs text-gray-600">Equipos Médicos</p>
            </div>
          </a>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.page}
                href={item.path}
                onClick={(e) => { e.preventDefault(); onNavigate(item.path); }}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-[#0293CA] border-b-2 border-[#0293CA]'
                    : 'text-gray-700 hover:text-[#0293CA]'
                } py-2`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/ambasan.eirl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de AM BASAN"
              className="text-gray-600 hover:text-[#0293CA] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="tel:+51962881108"
              className="bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
            >
              +51 962 881 108
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <a
                key={item.page}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                  currentPage === item.page
                    ? 'text-[#0293CA] bg-gray-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 px-4 flex items-center justify-between">
              <a
                href="https://www.instagram.com/ambasan.eirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de AM BASAN"
                className="text-gray-600 hover:text-[#0293CA] transition-colors p-2"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href="tel:+51962881108"
                className="flex-grow text-center bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white px-4 py-2 rounded-lg text-sm font-medium ml-4"
              >
                +51 962 881 108
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}