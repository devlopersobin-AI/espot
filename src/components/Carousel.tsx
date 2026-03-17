import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { motion } from 'motion/react';

interface CarouselProps {
  title: string;
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

export default function Carousel({ title: _title, items, renderItem }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.55;
      const next = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: next, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="mb-3 hidden sm:flex items-center justify-end gap-2">
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all"
        >
          <ArrowLeft className="w-4 h-4 mx-auto" strokeWidth={1.75} />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all"
        >
          <ArrowRight className="w-4 h-4 mx-auto" strokeWidth={1.75} />
        </button>
      </div>

      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-4 sm:pb-5 px-1 w-full snap-x snap-mandatory"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 snap-start"
            >
              {renderItem(item, index)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
