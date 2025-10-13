import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    Nombre: '',
    Empresa: '',
    Cargo: '',
    Email: '',
    Teléfono: '',
    Producto: preselectedProduct || 'CoreRay CR31',
    Cantidad: '1',
    Mensaje: '',
  });

  useEffect(() => {
    if (isOpen) {
        setFormData({
            Nombre: '',
            Empresa: '',
            Cargo: '',
            Email: '',
            Teléfono: '',
            Producto: preselectedProduct || 'CoreRay CR31',
            Cantidad: '1',
            Mensaje: ''
        });
    }
  }, [isOpen, preselectedProduct]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
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
          _subject: `Solicitud de Cotización: ${formData.Producto} (x${formData.Cantidad})`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2500);
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#183368]">Solicitar Cotización</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar"><X /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="Nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
              <input type="text" id="Nombre" name="Nombre" required value={formData.Nombre} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <div>
              <label htmlFor="Empresa" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
              <input type="text" id="Empresa" name="Empresa" value={formData.Empresa} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <div>
              <label htmlFor="Cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
              <input type="text" id="Cargo" name="Cargo" value={formData.Cargo} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" id="Email" name="Email" required value={formData.Email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <div>
              <label htmlFor="Teléfono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
              <input type="tel" id="Teléfono" name="Teléfono" required value={formData.Teléfono} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg"/>
            </div>
            <div>
              <label htmlFor="Producto" className="block text-sm font-medium text-gray-700 mb-1">Producto de interés *</label>
              <select id="Producto" name="Producto" required value={formData.Producto} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg">
                <option value="Videolaringoscopio CoreRay CR31">Videolaringoscopio CoreRay CR31</option>
                <option value="Video Estilete">Video Estilete</option>
                <option value="Laringoscopios Convencionales">Laringoscopios Convencionales</option>
                <option value="Guías para Tubo Endotraqueal (Bougie)">Guías (Bougie)</option>
                <option value="Otro">Otro equipo</option>
              </select>
            </div>
            <div>
              <label htmlFor="Cantidad" className="block text-sm font-medium text-gray-700 mb-1">Cantidad *</label>
              <input type="number" id="Cantidad" name="Cantidad" min="1" required value={formData.Cantidad} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg"/>
            </div>
          </div>
          <div>
            <label htmlFor="Mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje adicional</label>
            <textarea id="Mensaje" name="Mensaje" rows={4} value={formData.Mensaje} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" placeholder="Especifique aquí si necesita otro equipo..."/>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              Solicitud enviada exitosamente. Nos contactaremos pronto.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              Error al enviar la solicitud. Por favor, intente de nuevo.
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-6 py-3 border rounded-lg font-medium">Cancelar</button>
            <button type="submit" disabled={isSubmitting} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0293CA] to-[#03e28f] text-white rounded-lg font-medium disabled:opacity-50">
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}