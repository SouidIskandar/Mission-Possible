'use client';
import { Wrench, Droplet, Bolt, Key, ShieldCheck } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Plomberie d'urgence",
    icon: <Droplet className="text-red-600" size={32} />,
    description: "Fuites, WC bouchés, chauffe-eau en panne - intervention en moins de 30 minutes",
    features: ["24h/24", "Garantie 1 an", "Pièces détachées incluses"]
  },
  {
    title: "Dépannage électrique",
    icon: <Bolt className="text-red-600" size={32} />,
    description: "Pannes courant, tableau électrique, installations neuves - techniciens certifiés",
    features: ["Diagnostic gratuit", "Conformité normes", "Matériel haut de gamme"]
  },
  // Ajoutez d'autres services...
];

export default function ServicesPage() {
  return (
    
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            NOS <span className="text-red-500">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Des solutions rapides et fiables pour tous vos problèmes domestiques
          </motion.p>
        </div>
      </section>

      {/* Grille de services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos domaines d'intervention"
            subtitle="Chaque mission est unique"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Vous ne trouvez pas votre service ?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Notre équipe peut résoudre des problèmes techniques complexes non listés ci-dessus.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
            Contactez un expert
          </button>
        </div>
      </section>
    </div>
  );
}