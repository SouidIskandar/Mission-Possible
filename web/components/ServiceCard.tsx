'use client';
import { motion } from 'framer-motion';

export default function ServiceCard({
  title,
  icon,
  description,
  features
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="bg-red-100 text-red-600 p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
          Réserver ce service
        </button>
      </div>
    </motion.div>
  );
}