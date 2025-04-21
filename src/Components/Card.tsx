import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: IconType;
  tags?: string[];
  link?: string;
  linkText?: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  icon: Icon,
  tags = [],
  link,
  linkText = 'Learn More',
  color = "from-purple-500 to-pink-500"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -5 }}
      className="card-component w-full bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/20 overflow-hidden cursor-pointer"
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
          />
          {Icon && (
            <div className={`absolute top-2 right-2 p-2 rounded-lg bg-gradient-to-r ${color} text-white`}>
              <Icon size={24} />
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Icon or Title */}
        <div className="flex items-center mb-3">
          {Icon && (
            <div className="mr-3 text-yellow-500 text-xl">
              <Icon size={20} />
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-medium text-white/90">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link Button */}
        {link && (
          <motion.a
            href={link}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            {linkText}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;