import { useEffect, useRef } from 'react';

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
}

export default function CredlyBadge({ badgeId, width = 150, height = 270 }: CredlyBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the badge div
    const badgeDiv = document.createElement('div');
    badgeDiv.setAttribute('data-iframe-width', String(width));
    badgeDiv.setAttribute('data-iframe-height', String(height));
    badgeDiv.setAttribute('data-share-badge-id', badgeId);
    badgeDiv.setAttribute('data-share-badge-host', 'https://www.credly.com');

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(badgeDiv);
    }

    // Load Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [badgeId, width, height]);

  return <div ref={containerRef} className="flex justify-center" />;
}
