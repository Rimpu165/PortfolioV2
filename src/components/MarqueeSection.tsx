import { useRef } from 'react';
import type { FC, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ROW1_SKILLS, ROW2_SKILLS } from '../constants/skills';

interface SkillCardProps {
  name: string;
  index: string;
  color: string;
}

const getSkillIcon = (name: string) => {
  switch (name) {
    case 'React.js':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full" fill="none" stroke="#00D8FF" strokeWidth="1.2">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          <circle r="2" fill="#00D8FF"/>
        </svg>
      );
    case 'Next.js':
      return (
        <svg viewBox="0 0 180 180" className="w-full h-full" fill="none">
          <circle cx="90" cy="90" r="85" stroke="white" strokeWidth="6" strokeOpacity="0.2"/>
          <path d="M128 140L76 68H64V112H72V80L118 140H128Z" fill="white"/>
          <path d="M112 68H120V112H112V68Z" fill="white"/>
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#339933" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2z"/>
          <path d="M12 22V12"/>
          <path d="M12 12l8-5"/>
          <path d="M12 12L4 7"/>
        </svg>
      );
    case 'Express.js':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#FFFFFF" strokeWidth="4">
          <rect x="10" y="20" width="80" height="60" rx="12" strokeWidth="2" strokeOpacity="0.2" fill="white" fillOpacity="0.02"/>
          <text x="50" y="58" fontFamily="'Kanit', sans-serif" fontWeight="900" fontSize="24" fill="#FFFFFF" stroke="none" textAnchor="middle">EX</text>
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C12 2 6 8.5 6 12C6 15.5 12 22 12 22C12 22 18 15.5 18 12C18 8.5 12 2z"/>
          <path d="M12 2v20"/>
          <path d="M12 7c-2 2-3 4-3 5 0 2.5 3 5 3 5s3-2.5 3-5c0-1-1-3-3-5z" strokeOpacity="0.5" strokeWidth="1"/>
        </svg>
      );
    case 'MERN Stack':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#B600A8" strokeWidth="2.5">
          <circle cx="32" cy="50" r="14" stroke="#47A248" strokeWidth="2"/>
          <circle cx="50" cy="32" r="14" stroke="#FFFFFF" strokeWidth="2"/>
          <circle cx="68" cy="50" r="14" stroke="#00D8FF" strokeWidth="2"/>
          <circle cx="50" cy="68" r="14" stroke="#339933" strokeWidth="2"/>
          <path d="M32 50h36M50 32v36" strokeOpacity="0.2" strokeWidth="1.5"/>
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="#F7DF1E">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <text x="12" y="15.5" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="10" fill="#000000" textAnchor="middle">JS</text>
        </svg>
      );
    case 'HTML & CSS':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#E34F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z"/>
          <path d="M12 6H8v3h4v3H8v3h4" stroke="#E34F26" strokeWidth="1.8"/>
          <path d="M12 6h4v3h-4" stroke="#264DE4" strokeWidth="1.8"/>
          <path d="M12 12h4v3l-4 1" stroke="#264DE4" strokeWidth="1.8"/>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#38BDF8" strokeWidth="1.5">
          <path d="M12 3c-1.2 0-2.4.6-3.3 1.7C7 6.8 6.5 9.4 7.2 11.2c.5 1.2 1.5 2.1 2.8 2.5 1.2.4 2.5.1 3.5-.7 1.7-1.3 2.2-3.9 1.5-5.7-.5-1.2-1.5-2.1-2.8-2.5C11.6 4.5 11.8 4 12 3z" fill="#38BDF8" fillOpacity="0.1"/>
          <path d="M8 11c-1.2 0-2.4.6-3.3 1.7C3 14.8 2.5 17.4 3.2 19.2c.5 1.2 1.5 2.1 2.8 2.5 1.2.4 2.5.1 3.5-.7 1.7-1.3 2.2-3.9 1.5-5.7-.5-1.2-1.5-2.1-2.8-2.5C7.6 12.5 7.8 12 8 11z" fill="#38BDF8" fillOpacity="0.1"/>
        </svg>
      );
    case 'Bootstrap':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="#7952B3">
          <rect width="24" height="24" rx="4" fill="#7952B3"/>
          <text x="12" y="17" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="14" fill="#FFFFFF" text-anchor="middle">B</text>
        </svg>
      );
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" fill="#F05032" fillOpacity="0.1"/>
          <circle cx="6" cy="6" r="3" fill="#F05032" fillOpacity="0.1"/>
          <circle cx="6" cy="18" r="3" fill="#F05032" fillOpacity="0.1"/>
          <path d="M6 9v6M9 18h6M6 15a9 9 0 009-9"/>
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" fill="white" fillOpacity="0.05"/>
        </svg>
      );
    case 'DevTools':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#00FF66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
          <line x1="12" y1="2" x2="12" y2="22" strokeOpacity="0.4"/>
        </svg>
      );
    default:
      return null;
  }
};

const SkillCard: FC<SkillCardProps> = ({ name, index, color }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor offset from card center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform coordinates into 3D rotations (max 15 degrees tilt)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 60, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 60, damping: 22 });

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
        className="w-[170px] h-[120px] sm:w-[220px] sm:h-[140px] rounded-2xl border border-white/5 bg-[#0C0C0C]/80 backdrop-blur-md hover:border-white/15 p-4 sm:p-5 flex flex-col justify-between relative transition-all duration-300 cursor-pointer select-none group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Radial Glow Gradient targeting the brand color */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}12 0%, transparent 70%)`
          }}
        />

        {/* Top Row: Icon Frame and Index */}
        <div className="flex justify-between items-start w-full">
          {/* Logo Frame */}
          <div 
            style={{ transform: 'translateZ(25px)' }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/[0.02] p-2 flex items-center justify-center transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-white/20"
          >
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{
                filter: `drop-shadow(0 0 6px ${color}35)`
              }}
            >
              {getSkillIcon(name)}
            </div>
          </div>

          {/* Floating index */}
          <div
            style={{ transform: 'translateZ(15px)' }}
            className="text-[#D7E2EA]/10 font-bold font-mono text-xs sm:text-sm transition-colors duration-300 group-hover:text-[#D7E2EA]/20"
          >
            {index}
          </div>
        </div>

        {/* Bottom Row: Tech Name */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="w-full mt-auto"
        >
          <div className="text-left font-black uppercase text-[#D7E2EA] group-hover:text-white transition-colors duration-300 text-[10px] sm:text-xs tracking-widest">
            {name}
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export const MarqueeSection: FC = () => {
  // Double the dataset for seamless infinite looping
  const doubledRow1 = [...ROW1_SKILLS, ...ROW1_SKILLS];
  const doubledRow2 = [...ROW2_SKILLS, ...ROW2_SKILLS];

  return (
    <section
      className="relative bg-darkBg overflow-hidden py-20 sm:py-28 select-none flex flex-col gap-6 w-full"
    >
      {/* Decorative backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#B600A8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#7621B0]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Skills Section Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-6 sm:mb-10">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Row 1: Smooth Continuous Auto-scroll LEFT */}
      <div className="overflow-hidden w-full flex">
        <div
          className="flex gap-4 sm:gap-6 w-max animate-marquee-left hover:[animation-play-state:paused]"
        >
          {doubledRow1.map((skill, i) => (
            <SkillCard
              key={`row1-${skill.name}-${i}`}
              name={skill.name}
              index={skill.idx}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      {/* Row 2: Smooth Continuous Auto-scroll RIGHT */}
      <div className="overflow-hidden w-full flex">
        <div
          className="flex gap-4 sm:gap-6 w-max animate-marquee-right hover:[animation-play-state:paused]"
        >
          {doubledRow2.map((skill, i) => (
            <SkillCard
              key={`row2-${skill.name}-${i}`}
              name={skill.name}
              index={skill.idx}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
