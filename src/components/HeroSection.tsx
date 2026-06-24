import type { FC } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between bg-darkBg text-textLight overflow-hidden select-none">
      
      {/* 1. Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        <button
          onClick={() => handleScrollTo('about')}
          className="text-textLight font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] opacity-100 hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
        >
          About
        </button>
        <button
          onClick={() => handleScrollTo('services')}
          className="text-textLight font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] opacity-100 hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
        >
          Skills
        </button>
        <button
          onClick={() => handleScrollTo('projects')}
          className="text-textLight font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] opacity-100 hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
        >
          Projects
        </button>
        <button
          onClick={() => handleScrollTo('contact')}
          className="text-textLight font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] opacity-100 hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
        >
          Contact
        </button>
      </FadeIn>

      {/* 2. Hero Heading (centered vertically relative to top layout, but placed with standard margin) */}
      <div className="w-full overflow-hidden z-20 flex justify-center items-center flex-grow -mt-20 sm:-mt-10">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] text-center"
        >
          Hi, i&apos;m ripanshu
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Centered Absolutely with Floating 3D Orb Effect) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-12 pointer-events-auto"
        >
          <Magnet
            padding={150}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-full p-[3px] bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] shadow-[0_0_40px_rgba(118,33,176,0.3)] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]"
            >
              <div className="rounded-full overflow-hidden w-full h-full border border-white/10 bg-darkBg">
                <img
                  src="/profile.jpg"
                  alt="Ripanshu Rana"
                  className="w-full h-full object-cover select-none scale-105 animate-pulse-slow"
                  draggable="false"
                />
              </div>
            </motion.div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 mt-auto">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-textLight font-light uppercase tracking-wide leading-snug text-left select-none max-w-[180px] sm:max-w-[260px] md:max-w-[320px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a full stack developer driven by crafting responsive and visually appealing web interfaces
        </FadeIn>

        <FadeIn
          as="div"
          delay={0.5}
          y={20}
        >
          <ContactButton onClick={() => handleScrollTo('contact')} />
        </FadeIn>
      </div>

    </section>
  );
};
