import { motion } from 'framer-motion';

const leaves = [
  { size: 18, x: '8%', y: '12%', delay: 0, duration: 7 },
  { size: 14, x: '85%', y: '8%', delay: 1.5, duration: 9 },
  { size: 22, x: '72%', y: '25%', delay: 3, duration: 8 },
  { size: 12, x: '20%', y: '65%', delay: 2, duration: 10 },
  { size: 16, x: '90%', y: '55%', delay: 4, duration: 7.5 },
  { size: 10, x: '45%', y: '80%', delay: 1, duration: 11 },
];

const molecules = [
  { size: 6, x: '15%', y: '30%', delay: 0.5, duration: 12 },
  { size: 8, x: '78%', y: '45%', delay: 2, duration: 10 },
  { size: 5, x: '55%', y: '15%', delay: 3.5, duration: 14 },
  { size: 7, x: '35%', y: '75%', delay: 1, duration: 11 },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute text-forest-700/10"
          style={{ left: leaf.x, top: leaf.y }}
          animate={{
            y: [0, -20, -8, -15, 0],
            rotate: [0, 8, -5, 12, 0],
            opacity: [0.08, 0.15, 0.08, 0.12, 0.08],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </motion.div>
      ))}

      {molecules.map((mol, i) => (
        <motion.div
          key={`mol-${i}`}
          className="absolute rounded-full bg-emerald-500/5"
          style={{
            left: mol.x,
            top: mol.y,
            width: mol.size,
            height: mol.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: mol.duration,
            delay: mol.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-glow-green opacity-60" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-glow-gold opacity-40" />
    </div>
  );
}
