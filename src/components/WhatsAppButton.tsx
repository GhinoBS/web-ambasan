export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51962881108"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-transparent w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/assets/logo_wsp.png" alt="WhatsApp" className="w-full h-full object-cover" />
    </a>
  );
}