'use client';
import { AlertTriangle, Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center animate-pulse">
        <AlertTriangle className="mr-2" />
        <a href="tel:+21612345678" className="flex items-center font-bold">
          <Phone className="mr-2" size={18} />
          Urgence ? Appelez le 12 345 678
        </a>
      </div>
    </div>
  );
}