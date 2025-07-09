'use client';
import { Wrench, Droplet, Bolt, Key, ShieldCheck, Sparkles, Leaf, Home, Fan, Drill, Wifi, Lock, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Plomberie d'urgence",
    icon: <Droplet className="text-red-600" size={32} />,
    description: "Intervention rapide pour tous vos problèmes de plomberie",
    features: ["Fuites d'eau", "WC bouchés", "Chauffe-eau", "Canalisation"],
    image: "/services/plomberie.jpg"
  },
  {
    title: "Dépannage électrique",
    icon: <Bolt className="text-red-600" size={32} />,
    description: "Solutions sûres pour vos installations électriques",
    features: ["Pannes courant", "Tableau électrique", "Installations neuves", "Diagnostic"],
    image: "/services/electricite.jpg"
  },
  {
    title: "Serrures & Sécurité",
    icon: <Lock className="text-red-600" size={32} />,
    description: "Protection et accès pour votre domicile",
    features: ["Dépannage serrure", "Changement cylindre", "Porte blindée", "Système d'alarme"],
    image: "/services/serrurier.jpg"
  },
  {
    title: "Nettoyage & Ménage",
    icon: <Sparkles className="text-red-600" size={32} />,
    description: "Un environnement propre et sain",
    features: ["Ménage régulier", "Nettoyage après travaux", "Vitres", "Profond"],
    image: "/services/nettoyage.jpg"
  },
  {
    title: "Jardinage & Entretien",
    icon: <Leaf className="text-red-600" size={32} />,
    description: "Aménagement et entretien de vos espaces verts",
    features: ["Taille haie", "Tonte gazon", "Élagage", "Débroussaillage"],
    image: "/services/jardinage.jpg"
  },
  {
    title: "Climatisation",
    icon: <Fan className="text-red-600" size={32} />,
    description: "Confort thermique toute l'année",
    features: ["Installation", "Dépannage", "Nettoyage", "Recharge gaz"],
    image: "/services/climatisation.jpg"
  },
];

const professionals = [
  {
    name: "Mohamed K.",
    role: "Mécanicien expert",
    experience: "12 ans",
    image: "/images/team/mecanicien.jpg",
    rating: 4.9
  },
  {
    name: "Ali M.",
    role: "Electricien certifié",
    experience: "8 ans",
    image: "/images/team/electrecien.jpg",
    rating: 4.8
  },
  {
    name: "Samir T.",
    role: "Ménage",
    experience: "5 ans",
    image: "/images/team/menage.jpg",
    rating: 4.7
  },
  {
    name: "Hakim J.",
    role: "Jardinier paysagiste",
    experience: "10 ans",
    image: "/images/team/jardinier.jpg",
    rating: 4.9
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-black to-red-900 text-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
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
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Des solutions rapides et fiables pour tous vos problèmes domestiques et professionnels
          </motion.p>
        </div>
      </section>

      {/* Grille de services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos domaines d'intervention"
            subtitle="Chaque mission est unique"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard 
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Professionnels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Professionnels"
            subtitle="Une équipe qualifiée à votre service"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {professionals.map((pro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all min-h-[420px] min-w-[260px]"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={pro.image}
                    alt={pro.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{pro.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-red-400 text-sm">{pro.role}</span>
                      <span className="flex items-center text-yellow-400 text-sm">
                        <Star className="mr-1" size={16} fill="#f59e0b" />
                        {pro.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Expérience: {pro.experience}</span>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Voir profil
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Besoin d'un service spécifique ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-2xl mx-auto text-lg"
          >
            Notre équipe multidisciplinaire peut résoudre tous vos problèmes techniques, même les plus complexes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg">
              Contactez un expert
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}