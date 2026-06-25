import { useRef } from 'react';
import type { FC, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface Project {
  num: string;
  category: string;
  name: string;
  description: string;
  link: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS_DATA: Project[] = [
  {
    num: '01',
    category: 'Personal Project',
    name: 'E-Commerce Website (React)',
    description: 'A responsive, mobile-first e-commerce site featuring dynamic product layouts. It integrates third-party product APIs with reusable React components, providing an active shopping cart context, category-based filtering, search controls, and structured customer auth pages.',
    link: 'https://hellstorm.vercel.app/',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Personal Project',
    name: 'Restaurant Website (React)',
    description: 'A modern, premium online landing and menu interface for dining businesses. Built with interactive categories, animated product listings, instant keyword search, and smooth page scrolls. Optimized with React state for rapid responsiveness and high-performance page-load speeds.',
    link: 'https://abj-restaurant-online.vercel.app/',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'MERN Stack Project',
    name: 'E-Commerce Website',
    description: 'A robust, full-stack shopping application built from scratch using MongoDB, Express, React, and Node.js. It features JWT authentication, administrative dashboards for CRUD operations on inventory, session-saved shopping carts, and production-tested API route testing.',
    link: 'https://github.com/rimpu165',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    num: '04',
    category: 'MERN Stack Project',
    name: 'Dating Website',
    description: 'An interactive full-stack networking platform featuring real-time messaging capabilities enabled by Socket.io web sockets. It provides automated matching logic based on profiles, custom image uploading, token validations, and database schemes for message history persistence.',
    link: 'https://github.com/rimpu165',
    col1Image1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coords for 3D card tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 60, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 60, damping: 25 });

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
    <div style={{ perspective: 1200 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full rounded-[40px] border border-white/10 hover:border-white/20 bg-[#0C0C0C]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(118,33,176,0.12)] transition-all duration-300 group"
      >
        {/* Top: 3D Pop Image frame with thumbnails */}
        <div 
          style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
          className="relative w-full h-[200px] sm:h-[230px] md:h-[250px] overflow-hidden rounded-[24px] mb-6 bg-darkBg border border-white/5"
        >
          <img
            src={project.col2Image}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 to-transparent pointer-events-none" />

          {/* Miniature secondary previews overlapping in the bottom corner */}
          <div className="absolute bottom-3 right-3 flex -space-x-3 pointer-events-none z-10">
            <div 
              style={{ transform: 'translateZ(40px)' }}
              className="w-10 h-10 rounded-lg overflow-hidden border border-[#0C0C0C] shadow-lg transition-transform duration-300 group-hover:translate-x-[-8px] group-hover:rotate-[-6deg]"
            >
              <img src={project.col1Image1} alt="Preview thumbnail 1" className="w-full h-full object-cover" />
            </div>
            <div 
              style={{ transform: 'translateZ(50px)' }}
              className="w-10 h-10 rounded-lg overflow-hidden border border-[#0C0C0C] shadow-lg transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:rotate-[6deg]"
            >
              <img src={project.col1Image2} alt="Preview thumbnail 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Category & Index Label */}
        <div 
          style={{ transform: 'translateZ(20px)' }}
          className="flex justify-between items-center w-full mb-3"
        >
          <span className="text-[10px] sm:text-xs uppercase font-medium tracking-widest text-[#D7E2EA] opacity-60">
            {project.category}
          </span>
          <span className="font-black text-[#D7E2EA]/15 group-hover:text-[#B600A8]/20 transition-colors duration-300 text-3xl leading-none">
            {project.num}
          </span>
        </div>

        {/* Project Name */}
        <h3 
          style={{ transform: 'translateZ(25px)' }}
          className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-[#D7E2EA] mb-3 text-left group-hover:text-white transition-colors duration-300"
        >
          {project.name}
        </h3>

        {/* Description (Height-stabilized) */}
        <p 
          style={{ transform: 'translateZ(20px)' }}
          className="text-[#D7E2EA]/70 font-light text-left text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 h-[4.5rem] overflow-hidden"
        >
          {project.description}
        </p>

        {/* Button footer */}
        <div 
          style={{ transform: 'translateZ(35px)' }}
          className="flex justify-start w-full mt-auto"
        >
          <LiveProjectButton href={project.link} />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-transparent text-textLight rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 pb-32 select-none z-20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        {/* Project Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full items-stretch">
          {PROJECTS_DATA.map((project, index) => (
            <FadeIn 
              key={project.num}
              delay={index * 0.1}
              y={30}
              className="h-full"
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
