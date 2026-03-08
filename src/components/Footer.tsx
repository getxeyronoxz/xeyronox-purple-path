import { Send, Github } from 'lucide-react';
import logo from '@/assets/logo-xeyronox.png';

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

const links = [
  { label: 'Telegram', href: 'https://t.me/hackwithxeyronox', icon: Send },
  { label: 'GitHub', href: 'https://github.com/getxeyronoxz', icon: Github },
  { label: 'GitLab', href: 'https://gitlab.com/xeyronoxz', icon: GitLabIcon },
  { label: 'Instagram', href: 'https://instagram.com/xeyronox', icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-xr-purple/20 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-syne font-extrabold text-lg tracking-wider mb-1 flex items-center gap-2">
            <img src={logo} alt="Xeyronox" className="w-7 h-7" />
            <span><span className="text-primary">XEYRO</span><span className="text-foreground">NOX</span></span>
          </div>
          <p className="text-xs text-muted-foreground max-w-sm">Purple Hat — Knowledge for defense, always. All tool credits to their original authors.</p>
        </div>
        <div className="flex items-center gap-4">
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-md border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-xr-purple hover:border-xr-purple/30 transition-colors"
              aria-label={l.label}>
              <l.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
