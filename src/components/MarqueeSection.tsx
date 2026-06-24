import { useState, useEffect, useRef } from 'react';
import type { FC, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface SkillCardProps {
  name: string;
  index: string;
}

const SkillCard: FC<SkillCardProps> = ({ name, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor offset from card center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform coordinates into 3D rotations (max 15 degrees tilt)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalizing cursor coords between -0.5 and 0.5
    const xVal = e.clientX - rect.left - width / 2;
    const yVal = e.clientY - rect.top - height / 2;

    mouseX.set(xVal / width);
    mouseY.set(yVal / height);
  };

  const handleMouseLeave = () => {
    // Reset to flat
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="flex-shrink-0"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-[200px] h-[120px] sm:w-[260px] sm:h-[150px] rounded-2xl border border-[#D7E2EA]/10 bg-[#121212] hover:border-[#D7E2EA]/30 p-5 flex flex-col justify-between relative transition-colors duration-300 cursor-pointer select-none group"
      >
        {/* Glow Gradient Layer (rounded-2xl matches card shape, no spillover) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B600A8]/10 via-[#7621B0]/5 to-[#BE4C00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

        {/* Index - Positioned top-right in absolute depth space */}
        <div
          style={{ transform: 'translateZ(15px)' }}
          className="absolute top-3 right-4 text-[#D7E2EA]/15 font-bold text-xl sm:text-2xl transition-transform duration-300 pointer-events-none"
        >
          {index}
        </div>

        {/* Skill Name - Centered vertically and horizontally with depth space */}
        <div className="flex-grow flex items-center justify-center w-full mt-4">
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="text-center font-black uppercase text-[#D7E2EA] group-hover:text-white transition-colors duration-300 text-base sm:text-lg tracking-widest px-2"
          >
            {name}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ROW1_SKILLS = [
  { name: 'MERN Stack', idx: '01' },
  { name: 'React.js', idx: '02' },
  { name: 'Next.js', idx: '03' },
  { name: 'Node.js', idx: '04' },
  { name: 'Express.js', idx: '05' },
  { name: 'MongoDB', idx: '06' },
];

const ROW2_SKILLS = [
  { name: 'JavaScript', idx: '07' },
  { name: 'HTML & CSS', idx: '08' },
  { name: 'Tailwind CSS', idx: '09' },
  { name: 'Bootstrap', idx: '10' },
  { name: 'Git', idx: '11' },
  { name: 'GitHub', idx: '12' },
  { name: 'DevTools', idx: '13' },
];

export const MarqueeSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (scrollY - sectionTop + innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple datasets for seamless looping width
  const tripledRow1 = [...ROW1_SKILLS, ...ROW1_SKILLS, ...ROW1_SKILLS];
  const tripledRow2 = [...ROW2_SKILLS, ...ROW2_SKILLS, ...ROW2_SKILLS];

  const transformRow1 = scrollOffset - 200;
  const transformRow2 = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      className="relative bg-darkBg overflow-hidden py-16 sm:py-24 select-none flex flex-col gap-6"
    >
      {/* Optional decorative backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#B600A8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#7621B0]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Row 1: Moves RIGHT on scroll */}
      <div
        className="flex gap-4 sm:gap-6"
        style={{
          transform: `translateX(${transformRow1}px) translateZ(0px)`,
          willChange: 'transform',
        }}
      >
        {tripledRow1.map((skill, i) => (
          <SkillCard
            key={`row1-${skill.name}-${i}`}
            name={skill.name}
            index={skill.idx}
          />
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div
        className="flex gap-4 sm:gap-6"
        style={{
          transform: `translateX(${transformRow2}px) translateZ(0px)`,
          willChange: 'transform',
        }}
      >
        {tripledRow2.map((skill, i) => (
          <SkillCard
            key={`row2-${skill.name}-${i}`}
            name={skill.name}
            index={skill.idx}
          />
        ))}
      </div>
    </section>
  );
};
