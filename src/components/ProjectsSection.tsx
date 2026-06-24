import { useRef, useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  index: number;
  totalCards: number;
  stickyTop: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index, totalCards, stickyTop }) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Measure card container scroll progress to drive the scale animation
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start'],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="relative h-[85vh] w-full flex justify-center items-start"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${stickyTop + index * 28}px)`,
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        {/* Top Row: Number, Category Label, Project Name, and Live Project Button */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-full gap-4 pb-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none flex-shrink-0"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm uppercase font-light tracking-widest text-[#D7E2EA] opacity-60">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium uppercase tracking-wider text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Project Description (Elaborated) */}
        <p className="text-[#D7E2EA]/75 font-light text-left text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Bottom Row: Two-column Image Grid */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width) - 2 Stacked Images */}
          <div className="w-full sm:w-[40%] flex flex-col gap-4 sm:gap-6">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] select-none"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] select-none"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>

          {/* Right Column (60% width) - 1 Tall Image */}
          <div className="w-full sm:w-[60%] flex">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] select-none h-[250px] sm:h-auto sm:min-h-full"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: FC = () => {
  const [stickyTop, setStickyTop] = useState(96); // default to top-24 (96px)

  useEffect(() => {
    const handleResize = () => {
      // top-24 (96px) on mobile, top-32 (128px) on md+
      setStickyTop(window.innerWidth >= 768 ? 128 : 96);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-darkBg text-textLight rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 pb-32 select-none z-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Project Heading (Singular) */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky-stacking Cards Wrapper */}
        <div className="flex flex-col w-full relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
              stickyTop={stickyTop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
