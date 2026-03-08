import { useScrollReveal } from '@/hooks/useScrollReveal';

const lines = [
  { prompt: true, text: 'cat identity.yml' },
  { text: '' },
  { text: 'codename: xeyronox | origin: black hat | current: purple hat', color: 'text-foreground' },
  { text: '' },
  { text: 'GitHub:    github.com/getxeyronoxz', color: 'text-xr-cyan' },
  { text: 'GitLab:    gitlab.com/xeyronoxz', color: 'text-xr-cyan' },
  { text: 'Instagram: instagram.com/xeyronox', color: 'text-xr-cyan' },
  { text: 'Telegram:  t.me/hackwithxeyronox', color: 'text-xr-green', badge: 'NEW - learning channel' },
  { text: '' },
  { text: 'tools_studied:', color: 'text-xr-yellow' },
  { text: '  - pwntools, nmap, sqlmap, ghidra, metasploit' },
  { text: '  - gitleaks, scapy, frida, amass' },
  { text: '' },
  { text: 'own_project:', color: 'text-xr-yellow' },
  { text: '  - llm-finetune-selector/', color: 'text-xr-orange', badge: 'PRIVATE' },
  { text: '' },
  { text: '# "These tools aren\'t mine. I study them.', color: 'text-xr-dim' },
  { text: '#  All credit to their original builders."', color: 'text-xr-dim' },
];

export default function TerminalSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="terminal" className="py-20 px-4" ref={ref}>
      <div className={`max-w-3xl mx-auto xr-terminal transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* macOS dots */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
          <span className="w-3 h-3 rounded-full bg-xr-red/80" />
          <span className="w-3 h-3 rounded-full bg-xr-yellow/80" />
          <span className="w-3 h-3 rounded-full bg-xr-green/80" />
          <span className="ml-4 text-xs text-muted-foreground">xeyronox — zsh — 80×24</span>
        </div>

        <div className="p-4 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto">
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              {line.prompt && (
                <span className="text-xr-green select-none">❯</span>
              )}
              <span className={line.color || 'text-muted-foreground'}>{line.text}</span>
              {line.badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${line.badge?.startsWith('NEW') ? 'bg-xr-green/10 text-xr-green border border-xr-green/30' : 'bg-xr-orange/10 text-xr-orange border border-xr-orange/30'}`}>
                  {line.badge}
                </span>
              )}
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xr-green select-none">❯</span>
            <span className="xr-cursor-blink text-xr-purple">▊</span>
          </div>
        </div>
      </div>
    </section>
  );
}
