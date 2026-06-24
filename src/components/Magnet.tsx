import { useState, useEffect, useRef } from 'react';
import type { FC, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const mx = e.clientX;
      const my = e.clientY;

      // Check if cursor is within padding distance of the element edge
      const isNear =
        mx >= rect.left - padding &&
        mx <= rect.right + padding &&
        my >= rect.top - padding &&
        my <= rect.bottom + padding;

      if (isNear) {
        setIsActive(true);
        const tx = (mx - cx) / strength;
        const ty = (my - cy) / strength;
        setTransform({ x: tx, y: ty });
      } else {
        setIsActive(false);
        setTransform({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0px)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
