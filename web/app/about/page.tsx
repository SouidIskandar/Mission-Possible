'use client';
import { motion } from 'framer-motion';
import { Bolt, ShieldCheck, Users, Award } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import TeamMember from '@/components/TeamMember';


export default function AboutPage() {
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
            NOTRE <span className="text-red-500">HISTOIRE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Découvrez l'équipe derrière Mission Possible TN
          </motion.p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre mission"
            subtitle="Transformer les problèmes en solutions"
          />

          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Fondée en 2020, Mission Possible TN est née d'un constat simple : les services de dépannage à domicile 
              manquaient cruellement de réactivité et de professionnalisme en Tunisie.
            </p>
            <p>
              Nous avons donc créé une plateforme qui combine <strong>technologie moderne</strong> et <strong>savoir-faire artisanal</strong> 
              pour offrir des interventions rapides, fiables et transparentes.
            </p>
            <p>
              Aujourd'hui, notre équipe de <strong>15 techniciens certifiés</strong> intervient dans tout le Grand Tunis, 
              avec un taux de satisfaction client de 98%.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos valeurs"
            subtitle="Ce qui nous guide au quotidien"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Bolt className="text-red-600" size={32} />,
                title: "Rapidité",
                description: "Intervention en moins de 2h pour les urgences"
              },
              {
                icon: <ShieldCheck className="text-red-600" size={32} />,
                title: "Fiabilité",
                description: "Techniciens vérifiés et certifiés"
              },
              {
                icon: <Users className="text-red-600" size={32} />,
                title: "Proximité",
                description: "Des professionnels près de chez vous"
              },
              {
                icon: <Award className="text-red-600" size={32} />,
                title: "Excellence",
                description: "Garantie 2 ans sur toutes nos interventions"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre équipe"
            subtitle="Des experts à votre service"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Mohamed K.",
                role: "Fondateur & Directeur",
                expertise: "15 ans d'expérience en plomberie",
                image: "/images/team/mohamed.jpg"
              },
              // Ajoutez d'autres membres...
            ].map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}