'use client';
import { ShieldCheck, BadgeCheck, Clock, Award } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-8 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center p-4">
            <ShieldCheck className="text-red-600 mb-2" size={28} />
            <span className="font-medium">Garantie 12 mois</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <BadgeCheck className="text-red-600 mb-2" size={28} />
            <span className="font-medium">Professionnels certifiés</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Clock className="text-red-600 mb-2" size={28} />
            <span className="font-medium">Disponible 24h/24</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Award className="text-red-600 mb-2" size={28} />
            <span className="font-medium">+5000 interventions</span>
          </div>
        </div>
      </div>
    </section>
  );
}