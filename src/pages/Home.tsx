import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="h-full flex items-center justify-center overflow-hidden paper-texture">
      {/* Book Page Content */}
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center relative px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating story elements */}
        <div className="absolute inset-0 pointer-events-none">
          {['📖', '🎬', '✨', '🎭', '📹'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-10"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + i * 18}%`,
                top: `${10 + i * 15}%`,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-5xl">
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight md:mt-80"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="gradient-text">David Ogunniyi</span>
            </motion.h1>
            <motion.div 
              className="typewriter text-sm sm:text-base md:text-lg lg:text-xl text-amber-200 mt-3 sm:mt-4"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1, duration: 2 }}
            >
              Videographer & Visual Storyteller
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed chapter-marker">
              Crafting cinematic experiences that capture emotion, tell compelling stories, 
              and transform visions into powerful visual narratives that resonate with audiences.
            </p>
          </motion.div>

          {/* Demo Reel - Centered and Featured */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-book rounded-xl p-6 cinematic-glow">
              <h2 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Featured Story Reel</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden group max-w-3xl mx-auto">
                <iframe
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src="https://www.youtube.com/embed/yJfZfweLxdk?rel=0&modestbranding=1"
                  title="Demo Reel - David Ogunniyi"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons - Enhanced spacing to avoid navigation overlap */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-20">
            <Link 
              to="/videography" 
              className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold text-white hover:scale-105 transition-all duration-300 text-center min-w-max"
            >
              📖 View Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="glass-book px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold text-white hover:bg-amber-200/10 transition-all duration-300 text-center min-w-max"
            >
              ✨ Begin Your Story
            </Link>
          </motion.div>
        </div>

        {/* Page Corner Indicator */}
        <div className="page-corner" />
      </motion.div>
    </div>
  );
};
