"use client"

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowWeWorkVideo() {
    const [playing, setPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const handlePlay = () => {
      setPlaying(true);
    };

    const thumbnailUrl = "/warcraft.jpg";
  
    return (
      <motion.div 
        className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden flex items-center justify-center bg-black/40 shadow-2xl p-1" 
        style={{ minHeight: 380 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Border Gradient */}
        <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none" style={{
          padding: 0,
          background: 'linear-gradient(135deg, #22c55e 0%, #bbf7d0 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          border: 'none',
        }} />
        
        {!playing ? (
          <>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[450px]"
            >
              <Image
                src={thumbnailUrl}
                fill
                alt="Video thumbnail"
                className="object-cover relative z-10 rounded-2xl border-4 border-green-500 shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl z-10" />
            </motion.div>
            <motion.button
              className="absolute cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl border-4 border-white/30 transition-all duration-300 z-20 ring-4 ring-green-300/40"
              aria-label="Play Video"
              onClick={handlePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="22" fill="currentColor" fillOpacity="0.2" />
                  <polygon points="18,14 34,22 18,30" fill="#22c55e" />
                </svg>
              </motion.div>
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 text-white text-center z-20"
            >
              <h3 className="text-2xl font-bold mb-2">Watch How We Work</h3>
              <p className="text-sm text-white/80">Click to play our introduction video</p>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-[450px]"
          >
            <iframe
              width="900"
              height="450"
              className="w-full h-full object-cover relative z-10 rounded-2xl border-4 border-green-500 shadow-xl"
              src="https://www.youtube.com/embed/eHhCwrbz3Gw?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </motion.div>
    );
}