import { Variants } from 'framer-motion';

// Rheole Motion System
// Characteristics: Organic, Spatial, Calm, Purposeful, Continuous, Physics-driven.

export const transitionSpring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const transitionSmooth = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1], // Apple-like smooth ease out
  duration: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitionSmooth
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { ...transitionSmooth, duration: 0.4 }
  }
};

export const spatialReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: transitionSmooth 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, filter: 'blur(20px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    filter: 'blur(10px)',
    transition: { duration: 0.6 } 
  }
};
