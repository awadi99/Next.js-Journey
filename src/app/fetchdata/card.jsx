"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

export default function TiltCard({ children }) {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  
  const rotateXRaw = useTransform(y, [-100, 100], [8, -8]);
  const rotateYRaw = useTransform(x, [-100, 100], [-8, 8]);

  
  const rotateX = useSpring(rotateXRaw, {
    stiffness: 80,   
    damping: 20,     
    mass: 0.8,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX);
    y.set(posY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="inline-block will-change-transform"
    >
      {children}
    </motion.div>
  );
}
