'use client';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';

export default function FAQPage() {
  const faqs = [
    {
      question: "Quels sont vos horaires d'intervention ?",
      answer: "Nous intervenons 7j/7 de 8h à 20h pour les dépannages standards, et 24h/24 pour les urgences."
    },
    {
      question: "Quelles zones géographiques couvrez-vous ?",
      answer: "Nous couvrons tout le Grand Tunis avec des techniciens locaux. Contactez-nous pour vérifier la disponibilité dans votre région."
    },
    // Ajoutez 8-10 questions supplémentaires...
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FOIRE AUX <span className="text-red-500">QUESTIONS</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos interrogations
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="Questions fréquentes"
            subtitle="Tout ce que vous devez savoir"
          />

          <div className="space-y-4 mt-8">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="flex items-center">
                    <HelpCircle className="text-red-600 mr-4" size={20} />
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-2 bg-gray-50"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Section contact supplémentaire */}
          <div className="mt-16 bg-red-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h3>
            <p className="mb-6">Notre équipe est disponible pour répondre à toutes vos questions</p>
            <a 
              href="/contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}