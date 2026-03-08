import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktop = !window.matchMedia('(pointer: coarse)').matches;
    setIsDesktop(desktop);
    if (!desktop) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    // Hide default cursor on interactive elements too
    const style = document.createElement('style');
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      document.head.removeChild(style);
    };
  }, []);

  if (!isDesktop || !visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] w-4 h-4 rounded-full border-2 border-primary"
        style={{ left: pos.x - 8, top: pos.y - 8 }}
      />
      <div
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full bg-primary/10"
        style={{
          left: pos.x - 16,
          top: pos.y - 16,
          transition: 'left 0.12s ease-out, top 0.12s ease-out',
        }}
      />
    </>
  );
}
