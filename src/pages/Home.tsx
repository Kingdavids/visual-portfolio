import { motion } from 'framer-motion';

export const Home = () => (
  <div className="pt-24 px-6 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-bold mb-4"
    >
      Hi, I’m Olumuyiwa David Ogunniyi
    </motion.h1>
    <p className="text-lg mb-8">A videographer & Storyteller shaping emotion through words and visuals.</p>
    <div className="flex justify-center">
      <iframe
        className="w-full md:w-3/4 h-64 md:h-96"
        src="https://www.youtube.com/embed/Mdb5xMMgRCs"
        title="Demo Reel"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
);
