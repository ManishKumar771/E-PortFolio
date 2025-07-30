import React, { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const ZoomControls = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show controls after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const applyZoom = (level: number) => {
    const newLevel = Math.max(50, Math.min(200, level)); // Limit zoom between 50% and 200%
    setZoomLevel(newLevel);
    
    // Apply zoom to the main content
    const mainContent = document.querySelector('body');
    if (mainContent) {
      mainContent.style.transform = `scale(${newLevel / 100})`;
      mainContent.style.transformOrigin = 'top left';
      mainContent.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  const zoomIn = () => applyZoom(zoomLevel + 25);
  const zoomOut = () => applyZoom(zoomLevel - 25);
  const resetZoom = () => applyZoom(100);

  const handleWheel = (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -10 : 10;
      applyZoom(zoomLevel + delta);
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [zoomLevel]);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-[#1a1a1a]/90 backdrop-blur-md border border-[#a68b5b]/30 rounded-lg p-3 shadow-lg">
        <div className="flex flex-col space-y-2">
          {/* Zoom Level Display */}
          <div className="text-center">
            <span className="text-xs text-[#a68b5b] font-medium">{zoomLevel}%</span>
          </div>
          
          {/* Zoom Controls */}
          <div className="flex flex-col space-y-1">
            <button
              onClick={zoomIn}
              className="p-2 bg-[#a68b5b]/20 hover:bg-[#a68b5b]/30 border border-[#a68b5b]/40 rounded-md text-[#a68b5b] hover:text-[#bfbfbf] transition-all duration-200 group"
              title="Zoom In (Ctrl + Scroll)"
            >
              <ZoomIn className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={zoomOut}
              className="p-2 bg-[#a68b5b]/20 hover:bg-[#a68b5b]/30 border border-[#a68b5b]/40 rounded-md text-[#a68b5b] hover:text-[#bfbfbf] transition-all duration-200 group"
              title="Zoom Out (Ctrl + Scroll)"
            >
              <ZoomOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={resetZoom}
              className="p-2 bg-[#832c2c]/20 hover:bg-[#832c2c]/30 border border-[#832c2c]/40 rounded-md text-[#832c2c] hover:text-[#bfbfbf] transition-all duration-200 group"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Zoom Instructions */}
      <div className="mt-2 text-center">
        <span className="text-xs text-[#918f8f] opacity-60">
          Ctrl + Scroll
        </span>
      </div>
    </div>
  );
};

export default ZoomControls; 