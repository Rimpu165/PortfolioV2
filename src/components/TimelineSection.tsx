import { useRef } from 'react';
import type { FC, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const EXPERIENCE_DATA: TimelineItem[] = [
  {
    title: 'MERN Stack Developer',
    subtitle: 'Meander Software Pvt Ltd',
    period: 'July 2025 - Present',
    description: 'Working as a Full Stack Developer specializing in the MERN stack. Developing and maintaining web applications, collaborating with cross-functional teams, and ensuring high performance and responsiveness of applications.',
  },
  {
    title: 'MERN Stack Training',
    subtitle: 'Meander Software Pvt Ltd',
    period: 'Feb 2025 - June 2025',
    description: 'Intensive training in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built real-world projects and learned best practices for backend and frontend integration.',
  },
];

const EDUCATION_DATA: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'Himachal Pradesh University (HPU)',
    period: '2021 - 2024',
    description: 'Graduated with CGPA: 7.25. Specialized in frontend development with a strong focus on modern web technologies including React.js, JavaScript, and responsive design principles.',
  },
];

interface CardProps {
  item: TimelineItem;
  index: number;
}

const TimelineCard: FC<CardProps> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 45, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 45, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = e.clientX - rect.left - width / 2;
    const yVal = e.clientY - rect.top - height / 2;

    mouseX.set(xVal / width);
    mouseY.set(yVal / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl border border-white/[0.04] bg-white/[0.02] hover:border-white/10 p-6 md:p-8 flex flex-col gap-3 transition-colors duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(118,33,176,0.15)] select-none cursor-pointer group"
      >
        {/* Glow Hover Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B600A8]/5 via-[#7621B0]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

        {/* Period (Depth 15px) */}
        <div
          style={{ transform: 'translateZ(15px)' }}
          className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium"
        >
          {item.period}
        </div>

        {/* Title (Depth 30px) */}
        <h3
          style={{ transform: 'translateZ(30px)' }}
          className="text-lg sm:text-xl font-bold text-textLight group-hover:text-white transition-colors duration-200"
        >
          {item.title}
        </h3>

        {/* Subtitle (Depth 20px) */}
        <h4
          style={{ transform: 'translateZ(20px)' }}
          className="text-sm font-medium text-[#7621B0] tracking-wide"
        >
          {item.subtitle}
        </h4>

        {/* Description (Depth 25px) */}
        <p
          style={{ transform: 'translateZ(25px)' }}
          className="text-sm text-textLight/70 font-light leading-relaxed mt-2"
        >
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export const TimelineSection: FC = () => {
  return (
    <section
      id="journey"
      className="relative bg-transparent text-textLight px-5 sm:px-8 md:px-10 py-20 sm:py-28 select-none z-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            My Journey
          </h2>
        </FadeIn>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 w-full items-start">
          
          {/* Experience Column */}
          <div className="flex flex-col gap-8 w-full">
            <FadeIn delay={0.1} y={30} className="flex items-center gap-4 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B600A8] shadow-[0_0_10px_#B600A8]" />
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-textLight">
                Experience
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-6 w-full">
              {EXPERIENCE_DATA.map((item, index) => (
                <FadeIn key={item.title + index} delay={0.15 + index * 0.1} y={30}>
                  <TimelineCard item={item} index={index} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-8 w-full">
            <FadeIn delay={0.2} y={30} className="flex items-center gap-4 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7621B0] shadow-[0_0_10px_#7621B0]" />
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-textLight">
                Education
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-6 w-full">
              {EDUCATION_DATA.map((item, index) => (
                <FadeIn key={item.title + index} delay={0.25 + index * 0.1} y={30}>
                  <TimelineCard item={item} index={index} />
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
