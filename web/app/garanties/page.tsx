import { ShieldCheck, Clock, BadgeCheck, Settings } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function GuaranteesPage() {
  const guarantees = [
    {
      icon: <ShieldCheck className="text-red-600" size={32} />,
      title: "Garantie 2 ans",
      description: "Toutes nos interventions sont garanties 24 mois pièces et main d'œuvre"
    },
    {
      icon: <Clock className="text-red-600" size={32} />,
      title: "Ponctualité",
      description: "Intervention dans le créneau horaire convenu ou remise de 10%"
    },
    // Ajoutez d'autres garanties...
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            NOS <span className="text-red-500">GARANTIES</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Votre tranquillité d'esprit est notre priorité
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos engagements"
            subtitle="La qualité avant tout"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>

          {/* Section processus */}
          <div className="mt-16">
            <SectionTitle 
              title="Notre processus qualité"
              subtitle="Comment nous garantissons l'excellence"
            />

            <div className="relative mt-12">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-red-600 transform -translate-x-1/2"></div>
              
              {/* Étapes */}
              {[
                {
                  title: "Sélection rigoureuse",
                  description: "Nos techniciens sont certifiés et passent par 3 étapes de vérification"
                },
                // Ajoutez 3-4 étapes supplémentaires...
              ].map((step, index) => (
                <div key={index} className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-1/2 justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}