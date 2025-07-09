'use client';
import { MapPin } from 'lucide-react';

export default function CoverageMap() {
  const cities = ["Tunis", "Sousse", "Sfax", "Nabeul", "Bizerte", "Gabès"];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Zones d'intervention</h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm">
                <MapPin className="text-red-600 mr-2" size={18} />
                <span>{city}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-500">
            Et toutes les villes dans un rayon de 50km autour de ces agglomérations
          </div>
        </div>
      </div>
    </section>
  );
}