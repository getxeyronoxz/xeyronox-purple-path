import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo-xeyronox.png';

const navLinks = [
  { label: 'Channel', href: '#channel' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tools', href: '#tools' },
  { label: 'Collective', href: '#collective' },
];

const socialLinks = [
  { label: 'Telegram', href: 'https://t.me/hackwithxeyronox' },
  { label: 'GitHub', href: 'https://github.com/getxeyronoxz' },
  { label: 'GitLab', href: 'https://gitlab.com/xeyronoxz' },
  { label: 'Instagram', href: 'https://instagram.com/xeyronox' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-xr-purple/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-syne font-extrabold text-xl tracking-wider text-primary">
            <img src={logo} alt="Xeyronox" className="w-8 h-8" />
            XEYRO<span className="text-foreground">NOX</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
            ))}
            <span className="w-px h-4 bg-border" />
            {socialLinks.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                {l.label}<ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>

          <button onClick={() => setOpen(true)} className="lg:hidden text-foreground p-2" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-fade-in">
          <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-foreground p-2" aria-label="Close menu">
            <X className="w-8 h-8" />
          </button>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="font-syne text-3xl font-bold text-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
          <div className="w-16 h-px bg-border" />
          {socialLinks.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="text-lg text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              {l.label}<ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
