import { motion } from 'framer-motion';

interface SectionBgProps {
  variant?: 'green-left' | 'green-right' | 'gold-left' | 'gold-right' | 'green-top' | 'gold-top' | 'mixed' | 'center';
  className?: string;
}

const variants: Record<string, { orbs: { style: React.CSSProperties; animate: {}; transition: {} }[] }> = {
  'green-left': {
    orbs: [
      {
        style: { top: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(22,101,52,0.1) 0%, transparent 70%)' },
        animate: { y: [0, 20, -10, 15, 0], scale: [1, 1.05, 0.97, 1.03, 1] },
        transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
      },
      {
        style: { bottom: '-10%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)' },
        animate: { y: [0, -15, 10, -5, 0], x: [0, 10, -5, 8, 0] },
        transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  'green-right': {
    orbs: [
      {
        style: { top: '-5%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(22,101,52,0.1) 0%, transparent 70%)' },
        animate: { y: [0, 15, -20, 10, 0], scale: [1, 0.97, 1.05, 0.98, 1] },
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
      },
      {
        style: { bottom: '0%', right: '15%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' },
        animate: { y: [0, -10, 15, -8, 0] },
        transition: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  'gold-left': {
    orbs: [
      {
        style: { top: '10%', left: '-5%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)' },
        animate: { y: [0, 15, -10, 20, 0], x: [0, 8, -5, 12, 0] },
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  'gold-right': {
    orbs: [
      {
        style: { bottom: '-5%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)' },
        animate: { y: [0, -20, 10, -15, 0], scale: [1, 1.05, 0.95, 1.02, 1] },
        transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  'green-top': {
    orbs: [
      {
        style: { top: '-15%', left: '20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(22,101,52,0.08) 0%, transparent 70%)' },
        animate: { y: [0, 10, -5, 15, 0], x: [0, -10, 8, -5, 0] },
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  'gold-top': {
    orbs: [
      {
        style: { top: '-10%', right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)' },
        animate: { y: [0, 12, -8, 10, 0], scale: [1, 1.03, 0.97, 1.02, 1] },
        transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  mixed: {
    orbs: [
      {
        style: { top: '-5%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(22,101,52,0.1) 0%, transparent 70%)' },
        animate: { y: [0, 20, -10, 15, 0], scale: [1, 1.05, 0.97, 1.03, 1] },
        transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
      },
      {
        style: { bottom: '-5%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)' },
        animate: { y: [0, -15, 10, -5, 0], x: [0, 10, -5, 8, 0] },
        transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
      },
      {
        style: { top: '30%', right: '25%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' },
        animate: { y: [0, -10, 15, -8, 0], x: [0, 8, -12, 5, 0] },
        transition: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
  center: {
    orbs: [
      {
        style: { top: '20%', left: '30%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(22,101,52,0.08) 0%, transparent 70%)' },
        animate: { y: [0, 15, -10, 8, 0], scale: [1, 1.08, 0.95, 1.03, 1] },
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
      },
      {
        style: { bottom: '10%', right: '20%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)' },
        animate: { y: [0, -12, 8, -5, 0] },
        transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
      },
    ],
  },
};

export default function SectionBg({ variant = 'mixed', className = '' }: SectionBgProps) {
  const config = variants[variant] || variants.mixed;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {config.orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={orb.style}
          animate={orb.animate}
          transition={orb.transition}
        />
      ))}
    </div>
  );
}
