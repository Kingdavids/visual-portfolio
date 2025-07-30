import React from 'react';
import { BookPageLayout } from '../components/BookPageLayout';
import { motion } from 'framer-motion';

export const CaseStudies = () => {
  const caseStudySections = [
    {
      id: 'nonprofit',
      title: 'Nonprofit Impact Story',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              House of Mara
            </motion.h2>
            <p className="text-slate-300 text-lg">
              Lending a voice to the voiceless
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                <p className="text-slate-300 leading-relaxed">
                  Created an inspiring short video that told the heartbreaking tales of young women who had been molested. 
                  The project's goal was to accurately portray the hardships and torments faced by young African 
                  women as well as the ways in which they are supported and cared for.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Client Details</h3>
                <div className="space-y-2 text-slate-300">
                  <p><span className="text-amber-400 font-semibold">Role:</span> Videographer & Storyteller</p>
                  <p><span className="text-amber-400 font-semibold">Clients:</span></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Mara House Nigeria</li>
                    <li>• Voice of Martyrs Canada</li>
                    <li>• 100 Huntley Canada</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Tools & Technology</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Sony A7S III', 'Premiere Pro', 'After Effects', 'Audition', 'Lightroom'].map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-800/50 rounded-lg p-3 text-center"
                    >
                      <span className="text-amber-400 font-semibold">{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Contribution</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-400 text-xl">📝</span>
                    <span>Developed the narrative concept and visual strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-400 text-xl">🎬</span>
                    <span>Directed and shot all footage on-site</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-400 text-xl">✂️</span>
                    <span>Edited, color-graded, and mixed final video for web and social platforms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Impact & Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="text-center p-6 bg-slate-800/30 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">40%</div>
                  <p className="text-slate-300">Increase in inquiries within two months</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-slate-800/30 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">1,000+</div>
                  <p className="text-slate-300">Shares across social media platforms</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-slate-800/30 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">4</div>
                  <p className="text-slate-300">Continents reached (Africa, Australia, America, Europe)</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'coming-soon',
      title: 'More Stories Coming',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              More Stories Coming Soon
            </motion.h2>
            <p className="text-slate-300 text-lg mb-8">
              I'm currently documenting more inspiring case studies that showcase the power of visual storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="glass rounded-xl p-8 text-center"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">Corporate Transformations</h3>
              <p className="text-slate-400">How visual storytelling helped businesses connect with their audiences on a deeper level.</p>
            </motion.div>
            
            <motion.div 
              className="glass rounded-xl p-8 text-center"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Journeys</h3>
              <p className="text-slate-400">Intimate stories of individuals who found their voice through powerful video narratives.</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-6">Want to be featured in my next case study?</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Let's Create Your Story
            </motion.a>
          </div>
        </div>
      )
    }
  ];

  return (
    <BookPageLayout
      title="Chapter IV: Stories That Matter"
      subtitle="Real projects, real impact, real results"
      sections={caseStudySections}
      layout="tabs"
      defaultSection="nonprofit"
    />
  );
};
