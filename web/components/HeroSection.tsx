'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            VOTRE <span className="text-red-500">MISSION</span>, NOTRE EXPERTISE
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Plomberie, électricité, dépannage urgent - nous intervenons en moins de 24h !
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Demander un devis
          </button>
        </motion.div>
      </div>
    </section>
  );
}