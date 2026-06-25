import { useRef } from 'react';
import type { FC, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: '01',
    name: 'Frontend Development',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience using React.js, Tailwind, and Bootstrap.',
  },
  {
    num: '02',
    name: 'Backend Integration',
    desc: 'Developing scalable servers and RESTful APIs using Node.js and Express.js, with secure user authentication and database management.',
  },
  {
    num: '03',
    name: 'Database Architecture',
    desc: 'Designing and maintaining efficient database systems with MongoDB for data persistence, speed, and reliability in full-stack applications.',
  },
  {
    num: '04',
    name: 'MERN Stack Solutions',
    desc: 'Building complete, end-to-end full-stack applications with seamless integration between React frontend and Node/Express backend.',
  },
  {
    num: '05',
    name: 'Responsive Web Design',
    desc: 'Creating mobile-first, highly responsive web interfaces that adapt beautifully across all breakpoints and devices.',
  },
];

interface CardProps {
  item: ServiceItem;
  index: number;
}

const ServiceCard: FC<CardProps> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 45, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 45, damping: 20 });

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
    <div style={{ perspective: 1000 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full relative rounded-3xl border border-white/[0.04] bg-white/[0.02] hover:border-white/10 p-6 sm:p-8 flex flex-col gap-4 justify-between transition-colors duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(182,0,168,0.1)] select-none cursor-pointer group"
      >
        {/* Glow Hover Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B600A8]/4 via-[#7621B0]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

        {/* Large Decorative Number (Depth 15px) */}
        <div
          style={{ transform: 'translateZ(15px)' }}
          className="absolute top-4 right-6 font-black text-[#D7E2EA]/5 leading-none transition-transform duration-300 text-6xl sm:text-7xl pointer-events-none select-none"
        >
          {item.num}
        </div>

        {/* Title (Depth 30px) */}
        <h3
          style={{ transform: 'translateZ(30px)' }}
          className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-textLight group-hover:text-white transition-colors duration-200 tracking-wide mt-8 text-left"
        >
          {item.name}
        </h3>

        {/* Description (Depth 25px) */}
        <p
          style={{ transform: 'translateZ(25px)' }}
          className="text-sm text-textLight/70 font-light leading-relaxed mt-2 text-left"
        >
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
};

export const ServicesSection: FC = () => {
  return (
    <section
      id="services"
      className="relative bg-transparent text-textLight px-5 sm:px-8 md:px-10 py-20 sm:py-28 select-none z-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Services Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.num}
              delay={index * 0.1}
              y={30}
              className="h-full"
            >
              <ServiceCard item={item} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
