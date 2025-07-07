// components/TeamMember.tsx
import { motion } from 'framer-motion';
import { Phone, Mail, Wrench, Star } from 'lucide-react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  image: string;
  rating?: number;
  services?: string[];
}

export default function TeamMember({
  name,
  role,
  expertise,
  image,
  rating = 5,
  services = []
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
    >
      {/* Photo + overlay d'identité */}
      <div className="relative aspect-[4/4] w-full">
        <Image
          src={"/images/membre.jpg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        
        {/* Badge d'identité style Mission Impossible */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-red-400 font-medium">{role}</p>
        </div>
        
        {/* Note */}
        {rating && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center text-sm">
            <Star className="mr-1" size={14} fill="white" />
            {rating.toFixed(1)}
          </div>
        )}
      </div>

      {/* Détails */}
      <div className="p-6">
        {/* Expertise */}
        <div className="flex items-start mb-4">
          <Wrench className="text-red-600 mr-3 mt-1 flex-shrink-0" size={18} />
          <p className="text-gray-600">{expertise}</p>
        </div>

        {/* Services */}
        {services.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">SPÉCIALITÉS :</h4>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span 
                  key={index} 
                  className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex justify-between">
            <a 
              href={`tel:+216${Math.floor(10000000 + Math.random() * 90000000)}`} 
              className="text-gray-500 hover:text-red-600 transition-colors flex items-center"
              aria-label="Contact téléphone"
            >
              <Phone size={18} className="mr-2" />
            </a>
            <a 
              href={`mailto:${name.split(' ')[0].toLowerCase()}@missionpossible.tn`} 
              className="text-gray-500 hover:text-red-600 transition-colors flex items-center"
              aria-label="Contact email"
            >
              <Mail size={18} className="mr-2" />
            </a>
            <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
              Voir missions
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}