import React, { useEffect, useRef } from 'react';

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const timeoutRef = useRef<number>();

  useEffect(() => {
    // Automatically finish after 2.5 seconds
    timeoutRef.current = window.setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [onFinish]);

  // Optionally allow user to skip by clicking
  const handleClick = () => {
    clearTimeout(timeoutRef.current);
    onFinish();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] animate-gradient-shift cursor-pointer"
      onClick={handleClick}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      <div className="flex flex-col items-center">
        <div
          className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-[#a68b5b]/40 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center relative animate-preloader-glow"
        >
          {/* Radial gradient for blending */}
          <div className="absolute inset-0 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(166,139,91,0.18) 0%, rgba(13,13,13,0.0) 70%)'}} />
          <img
            src="/Live chatbot.gif"
            alt="Loading..."
            className="w-full h-full object-contain relative z-10"
            style={{ filter: 'drop-shadow(0 0 24px #3cf) drop-shadow(0 0 40px #a68b5b)' }}
          />
        </div>
        <div className="mt-8 text-2xl md:text-3xl font-bold text-[#a68b5b] animate-pulse">
          Initializing Digital Realm...
        </div>
        <div className="mt-2 text-[#bfbfbf] text-sm md:text-base opacity-80">
          (Click to skip)
        </div>
      </div>
    </div>
  );
};

export default Preloader;