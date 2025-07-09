'use client';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Clock, Home } from 'lucide-react';

const stats = [
  { value: "5000+", label: "Clients satisfaits", icon: <Users className="text-red-600" /> },
  { value: "98%", label: "Taux de réussite", icon: <CheckCircle className="text-red-600" /> },
  { value: "24/24", label: "Disponibilité", icon: <Clock className="text-red-600" /> },
  { value: "50+", label: "Professionnels", icon: <Home className="text-red-600" /> }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}