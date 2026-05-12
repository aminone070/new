import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'leaf' | 'molecule' | 'ring' | 'dot';
}

function generateParticles(): Particle[] {
  const particles: Particle[] = [];
  const types: Particle['type'][] = ['leaf', 'molecule', 'ring', 'dot'];

  for (let i = 0; i < 18; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 6 + Math.random() * 16,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      opacity: 0.04 + Math.random() * 0.08,
      type: types[Math.floor(Math.random() * types.length)],
    });
  }
  return particles;
}

function ParticleSVG({ type, size }: { type: Particle['type']; size: number }) {
  switch (type) {
    case 'leaf':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case 'molecule':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="8" r="2" />
          <circle cx="19" cy="16" r="2" />
          <line x1="9.5" y1="10.5" x2="6.5" y2="8.5" />
          <line x1="14.5" y1="13.5" x2="17.5" y2="15.5" />
        </svg>
      );
    case 'ring':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case 'dot':
      return <div className="w-full h-full rounded-full bg-current" />;
  }
}

export default function FloatingElements() {
  const particles = useRef(generateParticles()).current;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(22,101,52,0.08) 0%, transparent 70%)',
          top: '5%',
          left: '10%',
        }}
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -30, 20, -10, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)',
          bottom: '10%',
          right: '5%',
        }}
        animate={{
          x: [0, -30, 20, -40, 0],
          y: [0, 20, -30, 10, 0],
          scale: [1, 0.95, 1.1, 0.98, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          top: '40%',
          right: '30%',
        }}
        animate={{
          x: [0, 25, -15, 35, 0],
          y: [0, -20, 30, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-forest-700"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -25, -10, -20, 0],
            x: [0, 8, -5, 12, 0],
            rotate: [0, 15, -10, 20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ParticleSVG type={p.type} size={p.size} />
        </motion.div>
      ))}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,101,52,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,101,52,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
