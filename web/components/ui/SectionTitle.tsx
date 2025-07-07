'use client';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  color?: 'default' | 'inverted';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  color = 'default'
}: SectionTitleProps) {
  // Configuration des couleurs
  const colors = {
    default: {
      title: 'text-black',
      subtitle: 'text-gray-600',
      line: 'bg-red-600'
    },
    inverted: {
      title: 'text-white',
      subtitle: 'text-gray-200',
      line: 'bg-white'
    }
  };

  // Configuration de l'alignement
  const alignment = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignment[align]} mb-12`}
    >
      {/* Subtitle optionnel */}
      {subtitle && (
        <motion.p 
          className={`text-sm font-medium ${colors[color].subtitle} mb-2`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Titre principal */}
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold ${colors[color].title}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {word.includes('Mission') ? (
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-black">
                {word}{' '}
              </span>
            ) : (
              <span>
                {word}{' '}
              </span>
            )}
          </span>
        ))}
      </motion.h2>

      {/* Ligne décorative */}
      <motion.div
        className={`w-16 h-1 ${colors[color].line} mt-4`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ originX: align === 'right' ? 1 : align === 'center' ? 0.5 : 0 }}
      />
    </motion.div>
  );
}