'use client';
import { Smartphone, Zap, Wrench } from 'lucide-react';

export default function ARPreview() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-red-600">Prévisualisation AR</span> avant intervention
            </h2>
            <p className="text-gray-300 mb-6">
              Visualisez en réalité augmentée les réparations nécessaires directement sur votre smartphone.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Zap className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                <span>Diagnostic visuel immédiat</span>
              </li>
              <li className="flex items-start">
                <Wrench className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                <span>Estimation précise des travaux</span>
              </li>
            </ul>
            <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <Smartphone className="mr-2" />
              Essayer maintenant
            </button>
          </div>
          <div className="md:w-1/2 relative">
            {/* Placeholder pour la vue AR */}
            <div className="bg-gray-900 rounded-xl aspect-[9/16] max-w-xs mx-auto flex items-center justify-center">
              <div className="text-center p-6">
                <div className="bg-gray-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="text-red-600" size={32} />
                </div>
                <p className="text-gray-400">Pointez votre caméra sur la zone à réparer</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-red-600 rounded-lg opacity-30" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-red-600 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}