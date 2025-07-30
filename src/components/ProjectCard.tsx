import React from 'react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  mediaUrl: string;
  category?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, mediaUrl, category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="video-card glass rounded-2xl p-6 mb-8 group"
    >
      {category && (
        <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4">
          {category}
        </span>
      )}
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">{title}</h3>
      <p className="mb-6 text-gray-300 leading-relaxed">{description}</p>
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <iframe
          src={mediaUrl + (mediaUrl.includes('?') ? '&' : '?') + "rel=0&modestbranding=1"}
          title={title}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
};
