import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookSection {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  content: React.ReactNode;
}

interface BookPageLayoutProps {
  title: string;
  subtitle?: string;
  sections: BookSection[];
  defaultSection?: string;
  layout?: 'tabs' | 'expandable' | 'paginated';
}

export const BookPageLayout: React.FC<BookPageLayoutProps> = ({
  title,
  subtitle,
  sections,
  defaultSection,
  layout = 'tabs'
}) => {
  const [activeSection, setActiveSection] = useState(defaultSection || sections[0]?.id);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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

  const renderTabLayout = () => (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <motion.div 
        variants={itemVariants}
        className="text-center mb-6 md:mb-8 px-4"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-2">{title}</h1>
        {subtitle && <p className="text-amber-200 text-sm sm:text-base md:text-lg">{subtitle}</p>}
      </motion.div>

      {/* Tab Navigation */}
      <motion.div 
        variants={itemVariants}
        className="flex justify-center mb-6 md:mb-8 px-4"
      >
        <div className="glass-book rounded-full p-1 sm:p-2 flex flex-wrap justify-center gap-1 sm:gap-2 max-w-full">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black'
                  : 'text-amber-200 hover:text-white hover:bg-amber-200/10'
              }`}
            >
              {section.icon && <span className="mr-1 sm:mr-2">{section.icon}</span>}
              <span className="hidden sm:inline">{section.title}</span>
              <span className="sm:hidden">{section.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden px-2 sm:px-4">
        <AnimatePresence mode="wait">
          {sections.map((section) => (
            activeSection === section.id && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full overflow-y-auto custom-scrollbar"
              >
                <div className="pb-4 sm:pb-8">
                  {section.content}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Page Corner */}
      <div className="page-corner" />
    </div>
  );

  const renderExpandableLayout = () => (
    <div className="h-full overflow-y-auto custom-scrollbar">
      {/* Page Header */}
      <motion.div 
        variants={itemVariants}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-black gradient-text mb-2">{title}</h1>
        {subtitle && <p className="text-amber-200 text-lg">{subtitle}</p>}
      </motion.div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            variants={itemVariants}
            className="glass-book rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-6 text-left hover:bg-amber-200/5 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {section.icon && (
                    <span className="text-2xl">{section.icon}</span>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    {section.subtitle && (
                      <p className="text-amber-200 text-sm">{section.subtitle}</p>
                    )}
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedSections.has(section.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-amber-400"
                >
                  ▼
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence>
              {expandedSections.has(section.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-amber-200/10">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Page Corner */}
      <div className="page-corner" />
    </div>
  );

  const renderPaginatedLayout = () => (
    <div className="h-full flex flex-col">
      {/* Page Header */}
      <motion.div 
        variants={itemVariants}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-black gradient-text mb-2">{title}</h1>
        {subtitle && <p className="text-amber-200 text-lg">{subtitle}</p>}
      </motion.div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {sections[currentPage]?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <motion.div 
        variants={itemVariants}
        className="flex justify-center items-center space-x-4 mt-6"
      >
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="glass-book px-4 py-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-200/10 transition-colors"
        >
          ← Previous
        </button>
        
        <div className="flex space-x-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage 
                  ? 'bg-amber-400' 
                  : 'bg-amber-200/30 hover:bg-amber-200/50'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setCurrentPage(Math.min(sections.length - 1, currentPage + 1))}
          disabled={currentPage === sections.length - 1}
          className="glass-book px-4 py-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-200/10 transition-colors"
        >
          Next →
        </button>
      </motion.div>

      {/* Page Corner */}
      <div className="page-corner" />
    </div>
  );

  return (
    <div className="h-full flex items-center justify-center overflow-hidden paper-texture">
      <motion.div 
        className="w-full h-full px-8 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {layout === 'tabs' && renderTabLayout()}
        {layout === 'expandable' && renderExpandableLayout()}
        {layout === 'paginated' && renderPaginatedLayout()}
      </motion.div>
    </div>
  );
};
