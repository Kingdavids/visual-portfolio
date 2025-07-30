import React, { useState } from 'react';
import { BookPageLayout } from '../components/BookPageLayout';
import { motion, AnimatePresence } from 'framer-motion';

export const Videography = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = {
    corporate: [
      {
        id: 1,
        title: "Tech Startup Story",
        embedUrl: "https://www.youtube.com/embed/yJfZfweLxdk",
        description: "A compelling brand narrative that highlight their mission, key features and real-world imapct.",
        client: "Cloud Ethusiast Canada.",
        year: "2024"
      },
      {
        id: 7,
        title: "Peace is Possible",
        embedUrl: "https://youtube.com/embed/4cgolgEKat8?si=kgzKncx_qI24fqF6",
        description: "A documentary on Dadin Kowa, a neighborhood that has managed to stay secure in spite of Jos' religiously motivated crises.",
        client: "Search for Common Ground and funded by German Government",
        year: "2020",
      }
    ],
    commercial: [
      {
        id: 3,
        title: "School Admission Video",
        embedUrl: "https://rumble.com/embed/v199kr1/?pub=4",
        description: "Subtle and comly commercial content that drives engagement and enrollment.",
        client: "Christian Faith Institute",
        year: "2022"
      },
      {
        id: 5,
        title: "Comedy Club Advert",
        embedUrl: "https://www.youtube.com/embed/1uiIftO9Bug",
        description: "Stylized commercial work that elevates brand identity through visual poetry.",
        client: "Jos Unwind Comedy Club",
        year: "2021"
      }
    ],
    storytelling: [
      {
        id: 2,
        title: "Wedding Cinematic Reel",
        embedUrl: "https://www.youtube.com/embed/rL0hseVUsHE",
        description: "An intimate celebration of love captured through cinematic storytelling techniques.",
        client: "Faith & Bata",
        year: "2022"
      },
      {
        id: 4,
        title: "Our Corporate Affair",
        embedUrl: "https://www.youtube.com/embed/EkVgh6wUfj8",
        description: "Sensitizing the general public to exercise their civic rights through authentic storytelling.",
        client: "Lord's Nta10ment",
        year: "2019"
      },
      {
        id: 6,
        title: "Music Video Production",
        embedUrl: "https://www.youtube.com/embed/UDdYxzeZFkg",
        description: "Creative music video that blends narrative storytelling with artistic expression.",
        client: "D'Cross",
        year: "2022"
      }
    ],
    events: [
      {
        id: 8,
        title: "Pitch Perfect Naija Season 1",
        embedUrl: "https://www.youtube.com/embed/bAm9nyTg12w",
        description: "Capturing the energy and emotion of live events with cinematic flair.",
        client: "Pitch Perfect",
        year: "2021"
      }
    ]
  };

  const VideoModal = ({ video, onClose }) => {
    if (!video) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">{video.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="aspect-video mb-6">
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
              <p className="text-gray-300 mb-4">{video.description}</p>
            </div>
            <div>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-400">Client: </span>
                  <span className="text-white">{video.client}</span>
                </div>
                <div>
                  <span className="text-gray-400">Year: </span>
                  <span className="text-white">{video.year}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const createVideoGrid = (videoList) => (
    <div className="book-content">
      <div className="grid md:grid-cols-2 gap-6">
        {videoList.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-book rounded-xl overflow-hidden cursor-pointer group cinematic-glow"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-amber-900/20 to-amber-600/10">
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 group-hover:from-black/40 group-hover:to-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-400/90 rounded-full flex items-center justify-center text-black text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  ▶
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-amber-400/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {video.year}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {video.title}
              </h3>
              <p className="text-amber-200/80 text-sm mb-3 line-clamp-2">{video.description}</p>
              <div className="text-xs text-amber-200/60">
                <span className="font-semibold">{video.client}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const videoSections = [
    {
      id: 'corporate',
      title: 'Corporate Stories',
      icon: '🏢',
      content: createVideoGrid(videos.corporate)
    },
    {
      id: 'commercial',
      title: 'Commercial Works',
      icon: '📺',
      content: createVideoGrid(videos.commercial)
    },
    {
      id: 'storytelling',
      title: 'Personal Stories',
      icon: '💍',
      content: createVideoGrid(videos.storytelling)
    },
    {
      id: 'events',
      title: 'Event Coverage',
      icon: '🎉',
      content: createVideoGrid(videos.events)
    }
  ];

  return (
    <>
      <BookPageLayout
        title="Chapter III: Visual Gallery"
        subtitle="A curated collection of stories told through the lens of cinematography"
        sections={videoSections}
        layout="tabs"
        defaultSection="corporate"
      />

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};
