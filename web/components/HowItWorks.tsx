'use client';
import { ClipboardList, UserCheck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <ClipboardList className="text-red-600" size={32} />,
    title: "Décrivez votre besoin",
    description: "Via notre formulaire ou par téléphone"
  },
  {
    icon: <UserCheck className="text-red-600" size={32} />,
    title: "Intervention rapide",
    description: "Un professionnel qualifié se déplace"
  },
  {
    icon: <CreditCard className="text-red-600" size={32} />,
    title: "Paiement sécurisé",
    description: "Une fois le service réalisé à votre satisfaction"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 text-red-600 font-bold">{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}