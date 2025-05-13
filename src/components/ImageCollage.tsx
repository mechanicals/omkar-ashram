import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ImageCollage.scss';

const ImageCollage: React.FC = () => {
  // This array will be populated with your actual images
  const images = [
    '/images/Pasted Graphic.png',
    '/images/Pasted Graphic 1.png',
    '/images/Pasted Graphic 2.png',
    '/images/Pasted Graphic 3.png',
    '/images/Pasted Graphic 4.png',
    '/images/Pasted Graphic 5.png',
    '/images/Pasted Graphic 6.png',
    '/images/Pasted Graphic 7.png',
    '/images/Pasted Graphic 8.png',
    '/images/Pasted Graphic 9.png',
  ];

  return (
    <div className="image-collage">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`image-container image-${index + 1}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={image} alt={`Ashram Image ${index + 1}`} loading="lazy" />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCollage; 