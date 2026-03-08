import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, BookOpen, Shield, Users, Scale } from 'lucide-react';

const pillars = [
  { icon: BookOpen, title: 'Education First', desc: 'Every post is framed around understanding, not exploitation' },
  { icon: Shield, title: 'Defense Minded', desc: 'Offensive knowledge shared to make defenders stronger' },
  { icon: Users, title: 'Open to All', desc: 'No gatekeeping. Beginners and experienced researchers equally welcome' },
  { icon: Scale, title: 'Ethics Always', desc: 'Zero tolerance for unethical direction' },
];

export default function ChannelSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="channel" className="py-20 px-4" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="xr-card p-6 sm:p-10 border-xr-telegram/30" style={{ borderColor: 'hsl(200 82% 55% / 0.3)' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-xr-telegram/10 flex items-center justify-center">
              <Send className="w-6 h-6 text-xr-telegram" />
            </div>
            <div>
              <h2 className="font-syne font-bold text-2xl text-foreground">HackWithXeyronox</h2>
              <a href="https://t.me/hackwithxeyronox" target="_blank" rel="noopener noreferrer"
                className="text-sm text-xr-telegram hover:underline">t.me/hackwithxeyronox</a>
            </div>
          </div>

          <p className="text-lg font-syne font-bold text-foreground mb-4">🔐 Cybersecurity — simplified.</p>
          <div className="space-y-3 text-sm text-muted-foreground mb-10 max-w-2xl">
            <p>Tools, concepts & CTF walkthroughs for beginners. By Xeyronox | Purple Team path 🟣</p>
            <p>The same tools Xeyronox studies are taught here — broken down clearly, posted on the channel when ready. The channel exists because knowledge should not be gatekept.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-lg bg-muted/30 border border-border">
                <p.icon className="w-5 h-5 text-xr-telegram shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-syne font-bold text-sm text-foreground mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://t.me/hackwithxeyronox" target="_blank" rel="noopener noreferrer"
              className="xr-btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-md bg-xr-telegram text-primary-foreground font-syne font-bold text-sm hover:opacity-90 transition-opacity">
              <Send className="w-4 h-4" /> Join the Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
