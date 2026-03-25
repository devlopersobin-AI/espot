import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

/**
 * Improved Framer-style carousel with dynamic drag bounds and optional dots.
 * Usage: <FramerCarousel>{children}</FramerCarousel>
 */
export default function FramerCarousel({ children }) {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (carouselRef.current && innerRef.current) {
      const outer = carouselRef.current;
      const inner = innerRef.current;
      setMaxDrag(Math.max(0, inner.scrollWidth - outer.offsetWidth));
    }
  }, [children]);

  return (
    <div ref={carouselRef} className="overflow-x-hidden w-full">
      <motion.div
        ref={innerRef}
        className="flex gap-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        style={{ x }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
