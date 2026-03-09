import { motion } from 'framer-motion';
import badgeImg from '@/assets/isc2-candidate-badge.png';

export default function CredlyBadge() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85 }}
    >
      <div
        className="relative w-[140px] h-[140px] select-none pointer-events-none"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      >
        <img
          src={badgeImg}
          alt="ISC2 Candidate Badge"
          className="w-full h-full object-contain select-none pointer-events-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
        />
        {/* Invisible overlay to prevent interaction */}
        <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()} />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">ISC2 Candidate</p>
        <p className="text-xs text-muted-foreground">Issued by ISC2 · 2026</p>
      </div>
    </motion.div>
  );
}
