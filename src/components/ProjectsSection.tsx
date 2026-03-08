import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lock, Cpu } from 'lucide-react';

const tags = ['LLM', 'Fine-Tuning', 'Model Selection', 'AI / ML', 'Private'];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-foreground mb-2">Own Projects</h2>
        <p className="text-muted-foreground text-sm mb-10">Built, not borrowed. Currently in private development.</p>

        <div className="xr-card p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-xr-purple/10 border border-xr-purple/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-xr-purple" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-foreground">LLM Fine-Tune Selector</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Lock className="w-3 h-3 text-xr-orange" />
                  <span className="text-xs text-xr-orange">Private — In Development</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            A tool to evaluate and select the most suitable large language model for a given fine-tuning task. Given a task description, dataset characteristics, and compute constraints, it analyses available open-weight models and recommends which to fine-tune — and how — for the best results in that specific context.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs">
            <div className="p-3 rounded bg-muted/30 border border-border">
              <span className="text-xr-purple-light font-bold">Purpose</span>
              <p className="text-muted-foreground mt-1">Match the right LLM to a fine-tuning objective rather than defaulting to the largest available model.</p>
            </div>
            <div className="p-3 rounded bg-muted/30 border border-border">
              <span className="text-xr-purple-light font-bold">Scope</span>
              <p className="text-muted-foreground mt-1">Open-weight models · Task-aware ranking · Compute-budget awareness</p>
            </div>
            <div className="p-3 rounded bg-muted/30 border border-border">
              <span className="text-xr-purple-light font-bold">Status</span>
              <p className="text-muted-foreground mt-1">Private development — No public release date</p>
            </div>
            <div className="p-3 rounded bg-muted/30 border border-border">
              <span className="text-xr-purple-light font-bold">Repository</span>
              <p className="text-muted-foreground mt-1">Private — Not published</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs border border-xr-purple/20 bg-xr-purple/5 text-xr-purple">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
