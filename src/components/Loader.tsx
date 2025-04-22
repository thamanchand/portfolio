import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div 
        className="w-24 h-24 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.span 
          className="absolute w-full h-full border-4 border-primary/20 rounded-full"
          animate={{ 
            rotate: 360, 
            borderTopColor: "rgb(var(--primary))"
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </motion.div>
      
      <motion.h2 
        className="mt-8 text-2xl font-medium gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Loading Experience
      </motion.h2>
    </motion.div>
  );
};

export default Loader;