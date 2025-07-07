// app/contact/page.tsx
'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, AlertTriangle, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            CONTACTEZ <span className="text-red-500">L'ÉQUIPE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Notre équipe est disponible 24h/24 pour répondre à vos demandes
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Envoyez un message"
                subtitle="Réponse garantie sous 1 heure"
                align="left"
              />
              <ContactForm />
            </motion.div>

            {/* Right column - Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Emergency card */}
              <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <AlertTriangle className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Urgence 24/7</h3>
                    <p className="text-red-100 mb-3">
                      Besoin d'une intervention immédiate ? Appelez notre numéro d'urgence :
                    </p>
                    <div className="flex items-center">
                      <Phone className="mr-2" />
                      <span className="text-2xl font-bold">71 234 567</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact methods */}
              <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Autres moyens de contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Phone className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-gray-600">71 234 567 (Standard)</p>
                      <p className="text-gray-600">98 765 432 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Mail className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">contact@missionpossible.tn</p>
                      <p className="text-gray-600">urgences@missionpossible.tn</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <MessageCircle className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Réseaux sociaux</h4>
                      <div className="flex gap-4 mt-2">
                        <a href="#" className="text-gray-600 hover:text-red-600">
                          Facebook
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <Clock className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Horaires</h4>
                      <p className="text-gray-600">Lundi-Vendredi : 8h-18h</p>
                      <p className="text-gray-600">Samedi : 9h-13h</p>
                      <p className="text-gray-600">Urgences : 24h/24</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Notre siège</h3>
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600">20 Rue de la Réparation</p>
                    <p className="text-gray-600">1080 Tunis, Tunisie</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12785.158312158025!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzIzLjQiTiAxMMKwMTAnNTQuNSJF!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Questions fréquentes"
            subtitle="Trouvez rapidement une réponse"
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quel est le délai moyen d'intervention ?",
                answer: "Pour les urgences, nous intervenons en moins de 2 heures. Pour les demandes standard, sous 24 heures."
              },
              {
                question: "Quels sont vos modes de paiement acceptés ?",
                answer: "Espèces, cartes bancaires, virement et mandat administratif."
              },
              // Ajoutez d'autres questions...
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-red-600 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}