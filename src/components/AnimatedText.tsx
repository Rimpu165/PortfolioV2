import { useRef } from 'react';
import type { FC, CSSProperties } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Smoothly stagger the character fade-in by defining start/end bounds
  const start = (index / total) * 0.7; // Complete character transitions by 70% of scroll
  const end = Math.min(1, start + 0.3);  // Each character takes a 30% window of the scroll to transition

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for reserving space */}
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
        aria-hidden="true"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charIndexCounter = 0;
  const totalChars = text.length;

  return (
    <p
      ref={containerRef}
      className={className}
      style={style}
    >
      {words.map((word, wIdx) => {
        const wordChars = word.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const currentIdx = charIndexCounter++;
              return (
                <Character
                  key={currentIdx}
                  char={char}
                  index={currentIdx}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
            {/* Render trailing space if not the last word */}
            {wIdx < words.length - 1 && (
              <Character
                key={`space-${wIdx}`}
                char=" "
                index={charIndexCounter++}
                total={totalChars}
                progress={scrollYProgress}
              />
            )}
          </span>
        );
      })}
    </p>
  );
};
