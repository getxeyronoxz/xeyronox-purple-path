import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ManifestoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-6xl sm:text-7xl mb-6 text-xr-purple font-syne font-extrabold select-none">"</div>
        <blockquote className="font-syne text-xl sm:text-2xl font-bold text-foreground leading-relaxed mb-8">
          I learned to break things so I could understand how to build them unbreakable.
        </blockquote>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The black hat years weren't wasted — they were the education. Every system broken was a system understood. Xeyronox exists in the purple space now: applying offensive knowledge to defensive purpose, crediting the community that built the tools, pushing the discipline forward without claiming what isn't theirs.
        </p>
      </div>
    </section>
  );
}
