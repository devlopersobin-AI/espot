import React from "react";

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [current, setCurrent] = React.useState(0);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setCurrent((c) => (c + 1) % videos.length);
  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length);

  React.useEffect(() => {
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

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full aspect-video max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        {videos.map((src, idx) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[idx] = el)}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            autoPlay={idx === current}
            loop
            muted
            playsInline
            poster="/assets/main_page_espot_club.jpg"
          />
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 shadow flex items-center justify-center font-bold text-xl"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 shadow flex items-center justify-center font-bold text-xl"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        {videos.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-blue-600" : "bg-slate-300"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
