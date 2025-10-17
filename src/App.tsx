import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import Videolaringoscopio from './pages/Videolaringoscopio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Privacy from './pages/Privacy';
import OtrosProductos from './pages/OtrosProductos';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Obtenemos el nombre de la página actual a partir de la ruta
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/videolaringoscopio':
        return 'videolaringoscopio';
      case '/otros-productos':
        return 'otros-productos';
      case '/nosotros':
        return 'nosotros';
      case '/contacto':
        return 'contacto';
      case '/privacy':
        return 'privacy';
      default:
        return '';
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AM BASAN E.I.R.L.",
          "url": "https://ambasan.com",
          "logo": "https://ambasan.com/assets/logo.png",
          "description": "AM BASAN E.I.R.L. (RUC 20607825981) — Importación y venta de videolaringoscopios y equipos para anestesiología en Perú.",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+51 962 881 108",
              "contactType": "sales",
              "email": "ventas_ambasan@hotmail.com"
            }
          ]
        })}
      </script>

      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />} />
          <Route path="/videolaringoscopio" element={<Videolaringoscopio onOpenQuote={handleOpenQuote} />} />
          <Route path="/otros-productos" element={<OtrosProductos onOpenQuote={handleOpenQuote} />} />
          <Route path="/nosotros" element={<Nosotros onOpenQuote={handleOpenQuote} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />

      <WhatsAppButton />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct="CoreRay CR31"
      />
    </div>
  );
}

export default App;