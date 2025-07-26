import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface BookInterfaceProps {
  children: React.ReactNode;
}

export const BookInterface: React.FC<BookInterfaceProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const chapters = [
    { path: '/', title: 'Prologue', subtitle: 'The Beginning' },
    { path: '/about', title: 'Chapter I', subtitle: 'The Storyteller' },
    { path: '/storytelling', title: 'Chapter II', subtitle: 'The Art of Narrative' },
    { path: '/videography', title: 'Chapter III', subtitle: 'Visual Gallery' },
    { path: '/case-studies', title: 'Chapter IV', subtitle: 'Case Studies' },
    { path: '/contact', title: 'Epilogue', subtitle: 'Begin Your Story' }
  ];

  useEffect(() => {
    const pageIndex = chapters.findIndex(chapter => chapter.path === location.pathname);
    if (pageIndex !== -1) {
      setCurrentPage(pageIndex);
    }
  }, [location.pathname]);

  const goToPage = (pageIndex: number) => {
    if (pageIndex === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(chapters[pageIndex].path);
      setCurrentPage(pageIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextPage = () => {
    if (currentPage < chapters.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  const pageVariants = {
    initial: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    })
  };

  return (
    <div className="book-container h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 relative">
      {/* Book Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      {/* Book Spine Navigation */}
      <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-amber-800 to-amber-900 shadow-2xl z-50 flex flex-col">
        <div className="p-2 text-center">
          <motion.div 
            className="text-amber-200 text-xs font-bold writing-vertical transform rotate-180"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            DAVID OGUNNIYI
          </motion.div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.path}
              onClick={() => goToPage(index)}
              className={`w-12 h-12 mx-auto rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-amber-300 text-amber-900 shadow-lg' 
                  : 'bg-amber-700 text-amber-200 hover:bg-amber-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <span className="text-xs font-bold">{index === 0 ? 'P' : index === chapters.length - 1 ? 'E' : index}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Book Content */}
      <div className="ml-16 h-full relative perspective-1000">
        {/* Book Pages Container */}
        <div className="book-pages h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black relative shadow-2xl">
          
          {/* Page Header */}
          <motion.div 
            className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/50 to-transparent p-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between items-center text-amber-200">
              <div>
                <h1 className="text-2xl font-bold gradient-text">
                  {chapters[currentPage]?.title}
                </h1>
                <p className="text-sm opacity-75">
                  {chapters[currentPage]?.subtitle}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-75">
                  Page {currentPage + 1} of {chapters.length}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Page Content */}
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={location.pathname}
              custom={1}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full pt-20 relative z-30"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Page Navigation - Responsive positioning to avoid overlap */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 min-w-max">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="glass px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">← Previous</span>
                <span className="sm:hidden">←</span>
              </motion.button>
              
              <motion.button
                onClick={nextPage}
                disabled={currentPage === chapters.length - 1}
                className="glass px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">Next →</span>
                <span className="sm:hidden">→</span>
              </motion.button>
            </div>
          </div>

          {/* Page Corner Fold Effect */}
          <motion.div 
            className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-amber-200/20 to-transparent pointer-events-none"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="fixed bottom-4 right-4 text-amber-700 text-xs opacity-50">
        <p>Use ← → arrow keys to navigate</p>
      </div>
    </div>
  );
};

// Add keyboard navigation
export const useBookNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const chapters = [
    '/', '/about', '/storytelling', '/videography', '/case-studies', '/contact'
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = chapters.indexOf(location.pathname);
      
      if (event.key === 'ArrowRight' && currentIndex < chapters.length - 1) {
        navigate(chapters[currentIndex + 1]);
      } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        navigate(chapters[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname, navigate]);
};
