import { useState } from 'react';
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

type Page = 'home' | 'videolaringoscopio' | 'nosotros' | 'contacto' | 'privacy' | 'otros-productos';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case 'videolaringoscopio':
        return <Videolaringoscopio onOpenQuote={handleOpenQuote} />;
      case 'nosotros':
        return <Nosotros onOpenQuote={handleOpenQuote} />;
      case 'contacto':
        return <Contacto />;
      case 'privacy':
        return <Privacy />;
      case 'otros-productos':
        return <OtrosProductos onOpenQuote={handleOpenQuote} />;
      default:
        return <Home onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
    }
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

      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {renderPage()}
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