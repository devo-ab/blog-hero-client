import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CustomScrollbar.css';

const CustomScrollbar = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${scrollPercentage}%` });
    }
  }, [controls, inView, scrollPercentage]);

  return (
    <div className="custom-scrollbar">
      <motion.div
        ref={ref}
        className="custom-scrollbar-thumb"
        animate={controls}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default CustomScrollbar;
