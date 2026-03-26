import React, { useEffect, useRef, useState } from "react";

type AutoVideoCarouselProps = {
  videos: string[];
};

const AUTO_SCROLL_INTERVAL = 6000;

const AutoVideoCarousel: React.FC<AutoVideoCarouselProps> = ({ videos }) => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % videos.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videos.length]);

  useEffect(() => {
    videoRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (idx === current) {
          ref.play();
        } else {
          ref.pause();
          ref.currentTime = 0;
        }
      }
    });
  }, [current, videos.length]);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <div className="relative w-full min-h-screen overflow-hidden shadow-2xl">
      {videos.map((src, idx) => (
        <video
          key={src}
          ref={(el) => (videoRefs.current[idx] = el)}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ width: "100%", height: "100%" }}
          autoPlay={idx === current}
          loop
          muted
          playsInline
          poster="/assets/main_page_espot_club.jpg"
        />
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? "bg-blue-600 border-white" : "bg-white/60 border-white/40"} transition-all`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoVideoCarousel;
