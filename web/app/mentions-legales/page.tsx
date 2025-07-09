// app/mentions-legales/page.tsx
'use client';

import { Shield, FileText, Building, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const LegalSection = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      <span className="text-red-600 mr-3">{icon}</span>
      {title}
    </h2>
    {children}
  </motion.div>
);

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with animation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-black to-red-900 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            MENTIONS <span className="text-red-500">LÉGALES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Informations juridiques relatives à Mission Possible TN
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="Informations légales"
            subtitle="Conformément aux dispositions de la loi"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 mb-12 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Building className="text-red-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Éditeur du site</h3>
                  <p className="text-gray-600">
                    <strong>Mission Possible TN</strong><br />
                    Société à Responsabilité Limitée (SARL)<br />
                    Capital social : 50 000 TND<br />
                    RCS Tunis B 123 456 789<br />
                    Numéro TVA : TN12345678
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="text-red-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Responsable de publication</h3>
                  <p className="text-gray-600">
                    <strong>Mohamed K.</strong><br />
                    Directeur Général<br />
                    <a href="mailto:contact@missionpossible.tn" className="text-red-600 hover:underline">
                      contact@missionpossible.tn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Hébergement */}
            <LegalSection 
              icon={<FileText size={24} />}
              title="Hébergement"
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <p className="text-gray-600">
                  <strong>Nom :</strong> OVH SAS<br />
                  <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France<br />
                  <strong>Téléphone :</strong> +33 9 72 10 10 07<br />
                  <strong>Site web :</strong> 
                  <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline ml-1">
                    www.ovh.com
                  </a>
                </p>
              </div>
            </LegalSection>

            {/* Protection des données */}
            <LegalSection 
              icon={<Shield size={24} />}
              title="Protection des données"
            >
              <div className="bg-gray-50 rounded-xl p-6 space-y-4 shadow-sm">
                <p className="text-gray-600">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi tunisienne n°2004-63, 
                  vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                </p>
                <p className="text-gray-600">
                  Pour exercer ces droits ou pour toute question relative à la protection de vos données, 
                  veuillez contacter notre délégué à la protection des données :
                </p>
                <div className="flex items-center text-gray-600">
                  <Mail className="text-red-600 mr-2" size={18} />
                  <a href="mailto:dpo@missionpossible.tn" className="text-red-600 hover:underline">
                    dpo@missionpossible.tn
                  </a>
                </div>
              </div>
            </LegalSection>

            {/* Propriété intellectuelle */}
            <LegalSection 
              icon={<FileText size={24} />}
              title="Propriété intellectuelle"
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 mb-4">
                  L'ensemble des éléments constitutifs du site (textes, images, vidéos, logos, marques) 
                  sont la propriété exclusive de Mission Possible TN ou font l'objet d'une autorisation d'utilisation.
                </p>
                <p className="text-gray-600">
                  Toute reproduction, représentation ou diffusion, intégrale ou partielle, 
                  sans autorisation préalable et écrite est strictement interdite et constituerait 
                  une contrefaçon sanctionnée par les articles 52 et suivants du Code de la Propriété Littéraire et Artistique tunisien.
                </p>
              </div>
            </LegalSection>

            {/* Cookies */}
            <LegalSection 
              icon={<FileText size={24} />}
              title="Politique relative aux cookies"
            >
              <div className="bg-gray-50 rounded-xl p-6 space-y-4 shadow-sm">
                <p className="text-gray-600">
                  Notre site utilise des cookies pour :
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Assurer le bon fonctionnement technique du site</li>
                  <li>Mesurer l'audience de manière anonyme</li>
                  <li>Personnaliser votre expérience utilisateur</li>
                </ul>
                <p className="text-gray-600">
                  Vous pouvez configurer votre navigateur pour refuser les cookies, 
                  mais certaines fonctionnalités du site pourraient ne plus être accessibles.
                </p>
                <a 
                  href="/politique-cookies" 
                  className="inline-block mt-4 text-red-600 hover:underline font-medium"
                >
                  En savoir plus sur notre politique des cookies
                </a>
              </div>
            </LegalSection>

            {/* Contact juridique */}
            <LegalSection 
              icon={<Phone size={24} />}
              title="Contact juridique"
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Mail className="text-red-600 mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:legal@missionpossible.tn" className="text-red-600 hover:underline">
                        legal@missionpossible.tn
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="text-red-600 mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold mb-1">Adresse postale</h3>
                      <p className="text-gray-600">
                        20 Rue de la Réparation<br />
                        1080 Tunis, Tunisie
                      </p>
                    </div>
                  </div>
                </div>
                <a 
                  href="/contact?subject=Question%20juridique" 
                  className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Envoyer une demande
                </a>
              </div>
            </LegalSection>
          </div>
        </div>
      </section>
    </div>
  );
}