'use client';
import { Bot, MessageSquare, UploadCloud } from 'lucide-react';
import { useState } from 'react';

export default function SmartDiagnostic() {
  const [step, setStep] = useState(1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-red-600">Diagnostic Intelligent</span> en 3 étapes
        </h2>
        
        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex-1">
                <div className={`flex flex-col items-center ${step >= item ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step > item ? 'bg-green-100 text-green-600' : 
                    step === item ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item}
                  </div>
                  <div className={`h-1 w-full ${
                    step > item ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="text-center">
              <UploadCloud className="mx-auto text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">1. Uploadez des photos</h3>
              <p className="text-gray-600 mb-6">
                Prenez des photos claires du problème sous différents angles
              </p>
              <button 
                onClick={() => setStep(2)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
              >
                Simuler l'upload
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <Bot className="mx-auto text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">2. Analyse en cours</h3>
              <p className="text-gray-600 mb-6">
                Notre IA analyse les photos pour identifier le problème...
              </p>
              <div className="animate-pulse">🔍 Scanning des images...</div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <MessageSquare className="mx-auto text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">3. Diagnostic complet</h3>
              <div className="bg-white p-4 rounded-lg shadow-inner text-left mb-6">
                <h4 className="font-bold mb-2">Problème identifié :</h4>
                <p className="text-gray-600 mb-2">- Fuite au niveau du joint de robinet</p>
                <p className="text-gray-600">- Usure des joints d'étanchéité</p>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-bold mb-2">Solution recommandée :</h4>
                  <p className="text-gray-600">Remplacement des joints + vérification du raccordement</p>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
                Programmer l'intervention
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}