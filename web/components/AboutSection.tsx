'use client';
import { motion } from 'framer-motion';
import { Bolt, ShieldCheck, Clock, PhoneCall, BadgeCheck, Award, Zap } from 'lucide-react';
import Image from 'next/image'; // Import pour l'optimisation des images

export default function AboutSection() {
  const stats = [
    { value: "24/7", label: "Disponibilité", icon: <Clock className="text-red-600" size={32} /> },
    { value: "100%", label: "Satisfaction", icon: <ShieldCheck className="text-red-600" size={32} /> },
    { value: "30min", label: "Réponse", icon: <Bolt className="text-red-600" size={32} /> },
    { value: "500+", label: "Interventions", icon: <PhoneCall className="text-red-600" size={32} /> },
  ];

  const certifications = [
    { name: "Qualibat", icon: <Award className="text-red-600" size={20} /> },
    { name: "CertiNergy", icon: <Zap className="text-red-600" size={20} /> },
    { name: "Label Eco", icon: <BadgeCheck className="text-red-600" size={20} /> },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre avec effet de découpe */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-black">
              NOTRE MISSION
            </span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chez Mission Possible, nous transformons vos problèmes domestiques en solutions rapides et fiables.
          </p>
        </motion.div>

        {/* Contenu en 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - VRAIE IMAGE (remplacez par votre chemin d'image) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <Image
                src="/images/equipe.jpg" // Chemin vers votre image
                alt="Notre équipe de professionnels"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg z-10">
              <span className="block text-2xl font-bold">5 ans</span>
              <span className="block">d'expérience</span>
            </div>
          </motion.div>

          {/* Partie droite - Texte */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Pourquoi nous choisir ?
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <Bolt className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Intervention express</h4>
                  <p className="text-gray-600">Techniciens disponibles en moins de 30 minutes en urgence</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <ShieldCheck className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Professionnels certifiés</h4>
                  <p className="text-gray-600">Tous nos techniciens sont vérifiés et formés</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <PhoneCall className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Support 24h/24</h4>
                  <p className="text-gray-600">Une équipe toujours disponible pour vos urgences</p>
                </div>
              </li>
            </ul>

            {/* Badges de certifications */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Nos certifications :</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                    <span className="mr-2">{cert.icon}</span>
                    <span className="text-sm font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/a-propos" 
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition-all text-center"
              >
                Rencontrer notre équipe
              </a>
              <a 
                href="/a-propos#certifications" 
                className="border border-red-600 text-red-600 hover:bg-red-50 font-medium py-3 px-6 rounded-full transition-all text-center"
              >
                Voir toutes nos certifications
              </a>
            </div>
          </motion.div>
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-red-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}