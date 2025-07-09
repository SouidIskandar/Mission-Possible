// app/reservation/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Wrench, CheckCircle, ChevronLeft, Droplet, Bolt, Sparkles, Leaf, Home } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Données des services disponibles
const services = [
  {
    id: 'plomberie',
    name: 'Plomberie',
    icon: <Droplet className="text-blue-500" />,
    description: 'Fuites, WC bouchés, installation sanitaire',
    duration: '1-3 heures'
  },
  {
    id: 'electricite',
    name: 'Électricité',
    icon: <Bolt className="text-yellow-500" />,
    description: 'Pannes, installations, tableau électrique',
    duration: '2-4 heures'
  },
  {
    id: 'nettoyage',
    name: 'Nettoyage & Ménage',
    icon: <Sparkles className="text-green-500" />,
    description: 'Ménage régulier ou ponctuel',
    duration: '2-5 heures'
  },
  {
    id: 'jardinage',
    name: 'Jardinage',
    icon: <Leaf className="text-green-600" />,
    description: 'Taille, tonte, élagage, débroussaillage',
    duration: '2-6 heures'
  },
  {
    id: 'bricolage',
    name: 'Petits travaux',
    icon: <Wrench className="text-red-500" />,
    description: 'Montage meuble, étagères, réparations',
    duration: '1-4 heures'
  },
  {
    id: 'gardiennage',
    name: 'Gardiennage',
    icon: <Home className="text-purple-500" />,
    description: 'Surveillance de propriété',
    duration: 'Sur devis'
  }
];

export default function ReservationPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    details: ''
  });

  // Créneaux horaires disponibles
  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '17:00 - 19:00'
  ];

  // Vérifier si un service est passé en paramètre au chargement
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.some(s => s.id === serviceParam)) {
      setSelectedService(serviceParam);
      setStep(2); // Passer directement à l'étape de sélection de date
    }
  }, [searchParams]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique d'envoi à votre API
    console.log({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    setStep(5);
  };

  // Générer les 7 prochains jours (pour l'étape 2)
  const generateNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Réservation en ligne
          </motion.h1>
          <p className="text-xl opacity-90">Réservez votre intervention en quelques clics</p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Barre de progression */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {stepNumber}
                </div>
                <span className="text-xs mt-2 text-gray-500">
                  {stepNumber === 1 && 'Service'}
                  {stepNumber === 2 && 'Date'}
                  {stepNumber === 3 && 'Heure'}
                  {stepNumber === 4 && 'Détails'}
                </span>
              </div>
            ))}
          </div>

          {/* Étape 1 : Sélection du service */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="text-red-600" />
                Sélectionnez un service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    key={service.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedService === service.id ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-full">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Durée: {service.duration}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Étape 2 : Sélection de la date */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => setStep(1)}
                  className="flex items-center text-gray-600 hover:text-red-600"
                >
                  <ChevronLeft size={18} className="mr-1" />
                  Retour
                </button>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Calendar className="text-red-600" />
                  Choisissez une date
                </h2>
                <div></div> {/* Pour l'alignement */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {generateNextDays().map((date) => {
                  const dateStr = date.toLocaleDateString('fr-FR', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short'
                  });
                  const isoDate = date.toISOString().split('T')[0];

                  return (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      key={isoDate}
                      className={`border rounded-lg p-4 text-center cursor-pointer ${selectedDate === isoDate ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
                      onClick={() => handleDateSelect(isoDate)}
                    >
                      <div className="font-bold">{dateStr.split(' ')[0]}</div>
                      <div className="text-lg font-bold">{dateStr.split(' ')[1]}</div>
                      <div className="text-sm text-gray-500">{dateStr.split(' ')[2]}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Étape 3 : Sélection de l'heure */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => setStep(2)}
                  className="flex items-center text-gray-600 hover:text-red-600"
                >
                  <ChevronLeft size={18} className="mr-1" />
                  Retour
                </button>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Clock className="text-red-600" />
                  Choisissez un créneau
                </h2>
                <div></div> {/* Pour l'alignement */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timeSlots.map((time) => (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    key={time}
                    className={`border rounded-lg p-4 text-center cursor-pointer ${selectedTime === time ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    <div className="font-bold text-lg">{time}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Étape 4 : Formulaire de contact */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => setStep(3)}
                  className="flex items-center text-gray-600 hover:text-red-600"
                >
                  <ChevronLeft size={18} className="mr-1" />
                  Retour
                </button>
                <h2 className="text-2xl font-bold">Vos informations</h2>
                <div></div> {/* Pour l'alignement */}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Détails du problème
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Confirmer la réservation
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Étape 5 : Confirmation */}
          {step === 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle className="text-green-500" size={64} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Réservation confirmée !</h2>
              <p className="text-gray-600 mb-6">
                Votre demande a bien été enregistrée. Un technicien vous contactera pour confirmer l'intervention.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto mb-6">
                <h3 className="font-bold mb-3">Récapitulatif :</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Service :</span> {services.find(s => s.id === selectedService)?.name}</p>
                  <p><span className="font-medium">Date :</span> {new Date(selectedDate).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                  <p><span className="font-medium">Créneau :</span> {selectedTime}</p>
                  <p><span className="font-medium">Adresse :</span> {formData.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Voir nos services
                </Link>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedService('');
                    setSelectedDate('');
                    setSelectedTime('');
                    setFormData({
                      name: '',
                      phone: '',
                      address: '',
                      details: ''
                    });
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Nouvelle réservation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}