import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '1', label: 'Private Project' },
  { value: '9', label: 'Tools Studied' },
  { value: '2', label: 'Platforms (GH / GL)' },
  { value: '∞', label: 'Still Learning' },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="border-y border-xr-purple/20 bg-card/50 py-8">
      <div className={`max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-primary mb-1">{s.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
