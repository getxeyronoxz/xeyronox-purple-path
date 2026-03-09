import { motion } from 'framer-motion';
import { Send, Github } from 'lucide-react';
import CredlyBadge from './CredlyBadge';

const GitLabIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.06 3.26a.42.42 0 0 0-.14-.18.38.38 0 0 0-.23-.07.39.39 0 0 0-.22.11.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socialLinks = [
  { label: 'Telegram Channel', href: 'https://t.me/hackwithxeyronox', icon: Send },
  { label: 'GitHub', href: 'https://github.com/getxeyronoxz', icon: Github },
  { label: 'GitLab', href: 'https://gitlab.com/xeyronoxz', icon: GitLabIcon },
  { label: 'Instagram', href: 'https://instagram.com/xeyronox', icon: InstagramIcon },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden xr-grid-bg xr-grid-animate">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 40%, hsl(357 96% 60% / 0.08), hsl(270 70% 55% / 0.05), transparent)'
      }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-xr-purple/30 bg-xr-purple/5 text-sm text-xr-purple mb-8">
            <span className="w-2 h-2 rounded-full bg-xr-green animate-pulse" />
            Purple Hat · Active
          </span>
        </motion.div>

        <motion.h1
          className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter mb-4 xr-title-3d xr-glitch cursor-pointer"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="xr-glitch-text relative inline-block" data-text="XEYRONOX">
            <span className="text-primary">XEYRO</span>
            <span className="text-foreground">NOX</span>
          </span>
        </motion.h1>

        <motion.p className="text-muted-foreground text-sm mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          @xeyronox
        </motion.p>

        <motion.div
          className="space-y-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-10 text-left sm:text-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-foreground font-medium">A codename. Not a person — a methodology.</p>
          <p>Started in the black: breaking systems because it was possible.</p>
          <p>Now operating in the purple: understanding both sides of every lock, using that knowledge to build things that last.</p>
          <p className="text-xr-dim text-xs italic">Everything shared here is for learning and defense only. No unethical use. No harm. Just knowledge — studied the right way.</p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="xr-btn-shine inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 bg-primary/5 text-sm text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all">
              <s.icon className="w-4 h-4 text-primary" />{s.label}
            </a>
          ))}
        </motion.div>

        {/* Credly Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
          <CredlyBadge badgeId="289c3a7e-2ca0-41d2-a236-c34a064a59f8" />
        </motion.div>

        {/* Timeline */}
        <motion.div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mt-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <span className="px-3 py-1 rounded bg-muted border border-border">Black Hat</span>
          <div className="flex items-center gap-1">
            <span className="w-8 h-px bg-border" />
            <span className="text-xr-purple">→</span>
            <span className="w-8 h-px bg-border" />
          </div>
          <span className="px-3 py-1 rounded bg-xr-purple/10 border border-xr-purple/30 text-xr-purple">Purple Hat</span>
        </motion.div>
      </div>
    </section>
  );
}
