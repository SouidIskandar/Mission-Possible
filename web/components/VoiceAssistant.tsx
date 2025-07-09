'use client';
import { Mic, Volume2, Bot } from 'lucide-react';
import { useState } from 'react';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [response, setResponse] = useState('');

  const handleListen = () => {
    setIsListening(true);
    // Simulation de reconnaissance vocale
    setTimeout(() => {
      setIsListening(false);
      setResponse("J'ai détecté un problème de fuite d'eau. Je vous recommande un plombier disponible dans votre secteur dans les 2 heures.");
    }, 2000);
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-red-400">Assistant Vocal</span> Intelligent
            </h2>
            <p className="text-gray-300 mb-6">
              Décrivez votre problème à voix haute et recevez une solution instantanée.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="bg-red-400 rounded-full p-1 mr-3 mt-1">
                  <Volume2 size={14} className="text-white" />
                </div>
                <span>Reconnaissance vocale avancée</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-400 rounded-full p-1 mr-3 mt-1">
                  <Bot size={14} className="text-white" />
                </div>
                <span>Analyse intelligente des besoins</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-gray-800 rounded-xl p-8">
            <div className="flex justify-center mb-6">
              <button 
                onClick={handleListen}
                className={`p-6 rounded-full ${isListening ? 'bg-red-600 animate-pulse' : 'bg-red-500'} transition-all`}
              >
                <Mic size={32} />
              </button>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 min-h-24">
              {isListening ? (
                <div className="text-center py-4">
                  <div className="inline-flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <p className="mt-2 text-gray-400">Écoute en cours...</p>
                </div>
              ) : response ? (
                <div className="flex">
                  <div className="mr-3">
                    <div className="bg-red-400 rounded-full p-2">
                      <Bot size={18} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Assistant MP</p>
                    <p className="text-gray-300">{response}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-center py-4">
                  Appuyez sur le microphone pour décrire votre problème
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}