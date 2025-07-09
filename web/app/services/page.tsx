// app/services/page.tsx
'use client';

import { Wrench, Droplet, Bolt, Sparkles, Leaf, Home, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'plomberie',
    title: "Plomberie d'urgence",
    icon: <Droplet className="text-blue-500" size={32} />,
    description: "Fuites, WC bouchés, chauffe-eau en panne - intervention rapide",
    features: ["24h/24", "Garantie 1 an", "Pièces incluses"]
  },
  {
    id: 'electricite',
    title: "Dépannage électrique",
    icon: <Bolt className="text-yellow-500" size={32} />,
    description: "Pannes courant, tableau électrique, installations neuves",
    features: ["Diagnostic gratuit", "Normes respectées"]
  },
  {
    id: 'nettoyage',
    title: "Nettoyage & Ménage",
    icon: <Sparkles className="text-green-500" size={32} />,
    description: "Un environnement propre et sain",
    features: ["Régulier/ponctuel", "Matériel fourni"]
  },
  {
    id: 'jardinage',
    title: "Jardinage & Entretien",
    icon: <Leaf className="text-green-600" size={32} />,
    description: "Aménagement et entretien de vos espaces verts",
    features: ["Taille haie", "Tonte gazon", "Élagage"]
  },
  {
    id: 'bricolage',
    title: "Petits travaux",
    icon: <Wrench className="text-red-500" size={32} />,
    description: "Montage meuble, étagères, réparations diverses",
    features: ["Intervention rapide", "Matériel fourni"]
  },
  {
    id: 'gardiennage',
    title: "Gardiennage",
    icon: <Home className="text-purple-500" size={32} />,
    description: "Surveillance de votre propriété",
    features: ["24h/24", "Agents qualifiés"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            NOS <span className="text-red-500">SERVICES</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des solutions professionnelles pour tous vos besoins
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/reservation?service=${service.id}`}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}