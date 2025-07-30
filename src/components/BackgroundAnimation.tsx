import React, { useEffect, useRef, useCallback } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    opacity: number;
  }>>([]);

  const createParticle = useCallback((canvas: HTMLCanvasElement) => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8, // Increased velocity for more dynamic movement
      vy: (Math.random() - 0.5) * 0.8,
      life: Math.random() * 600 + 400, // Much longer life for continuous flow
      maxLife: Math.random() * 600 + 400,
      size: Math.random() * 1.2 + 0.3, // Smaller, more subtle particles
      opacity: Math.random() * 0.4 + 0.05 // Lower base opacity for subtlety
    };
  }, []);

  const resizeCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initial setup
    resizeCanvas(canvas);
    
    // Initialize particles with optimized count
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle(canvas));

    // Smooth resize handler with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas(canvas);
        // Recreate particles for new canvas size
        particlesRef.current = Array.from({ length: particleCount }, () => createParticle(canvas));
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Optimized animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const particles = particlesRef.current;
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;

      // Update and draw particles with optimized rendering
      particles.forEach((particle, index) => {
        // Smooth movement with easing
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Smooth boundary handling with continuous flow
        if (particle.x < -20) particle.x = canvasWidth + 20;
        if (particle.x > canvasWidth + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvasHeight + 20;
        if (particle.y > canvasHeight + 20) particle.y = -20;

        // Reset particle if life is depleted
        if (particle.life <= 0) {
          particles[index] = createParticle(canvas);
          return;
        }

        // Draw particle with optimized rendering
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio * 0.8;
        
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = '#a68b5b';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Optimized connection lines with reduced calculations
      const connectionDistance = 150;
      const maxConnections = 2; // Reduced connections for smoother performance
      
      particles.forEach((particle, i) => {
        let connectionCount = 0;
        
        for (let j = i + 1; j < particles.length && connectionCount < maxConnections; j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.03;
            const lifeRatio1 = particle.life / particle.maxLife;
            const lifeRatio2 = otherParticle.life / otherParticle.maxLife;
            const finalOpacity = opacity * Math.min(lifeRatio1, lifeRatio2);
            
            ctx.save();
            ctx.globalAlpha = finalOpacity;
            ctx.strokeStyle = '#a68b5b';
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
            
            connectionCount++;
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [createParticle, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 0.25,
        willChange: 'transform',
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    />
  );
};

export default BackgroundAnimation;