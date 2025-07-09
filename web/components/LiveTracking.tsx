'use client';
import { MapPin, Clock, User, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function LiveTracking() {
  const [activeTech, setActiveTech] = useState({
    name: "Mohamed K.",
    role: "Plombier",
    distance: "À 1.2km",
    eta: "10 min",
    status: "En route"
  });

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-red-600">Suivi Live</span> de votre intervention
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <User className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold">{activeTech.name}</h3>
                <p className="text-gray-600">{activeTech.role}</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeTech.status === "En route" 
                ? "bg-yellow-100 text-yellow-800" 
                : "bg-green-100 text-green-800"
            }`}>
              {activeTech.status}
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={18} />
                Distance
              </span>
              <span className="font-medium">{activeTech.distance}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center text-gray-600">
                <Clock className="mr-2" size={18} />
                Temps estimé
              </span>
              <span className="font-medium">{activeTech.eta}</span>
            </div>
          </div>

          <div className="h-48 bg-gray-200 rounded-lg mb-6 relative overflow-hidden">
            {/* Carte fictive avec animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute" />
              <div className="w-8 h-8 bg-red-600 rounded-full opacity-20 absolute" />
            </div>
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
              <MapPin className="text-red-600" size={20} />
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
            Voir le trajet en direct
          </button>
        </div>
      </div>
    </section>
  );
}