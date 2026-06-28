import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { ALL_SKILLS } from '../constants/skills';

export const HeroSection: FC = () => {
  // Screen-space mouse positions for 3D orb tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for orb rotations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 45, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 45, damping: 20 });

  const [skillGroup, setSkillGroup] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillGroup((prev) => (prev === 0 ? 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const visibleSkills = skillGroup === 0 
    ? ALL_SKILLS.slice(0, 6) 
    : ALL_SKILLS.slice(6);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-between bg-transparent text-textLight overflow-hidden select-none">
      
      {/* 1. Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        {/* Name Logo on the Left */}
        <span className="text-textLight font-black uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-[1.4rem] whitespace-nowrap">
          Ripanshu Rana
        </span>

        {/* Navigation Links on the Right */}
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <button
            onClick={() => handleScrollTo('about')}
            className="text-textLight font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo('services')}
            className="text-textLight font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
          >
            Skills
          </button>
          <button
            onClick={() => handleScrollTo('projects')}
            className="text-textLight font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="text-textLight font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer bg-transparent border-none outline-none"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* 2. Hero Center Container (Stylized 3D Card Dashboard) */}
      <div className="w-full overflow-visible z-10 flex justify-center items-center flex-grow pointer-events-none">
        <FadeIn
          delay={0.3}
          y={30}
          className="pointer-events-auto w-[90%] max-w-[680px] mx-auto"
        >
          <Magnet
            padding={150}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center items-center"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full rounded-[45px] border border-white/[0.07] bg-[#0C0C0C]/50 backdrop-blur-2xl p-6 sm:p-14 flex flex-col items-center justify-center text-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] hover:border-white/[0.15] transition-all duration-300 group overflow-hidden"
            >
              {/* Cyber Grid Background Pattern */}
              <div 
                style={{ 
                  transform: 'translateZ(5px)',
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1.5px, transparent 1.5px)',
                  backgroundSize: '24px 24px'
                }} 
                className="absolute inset-0 rounded-[45px] pointer-events-none"
              />

              {/* Ambient Internal Glows */}
              <div 
                style={{ transform: 'translateZ(8px)' }}
                className="absolute -top-12 -left-12 w-48 h-48 bg-[#B600A8]/10 rounded-full blur-[60px] pointer-events-none" 
              />
              <div 
                style={{ transform: 'translateZ(8px)' }}
                className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#BE4C00]/10 rounded-full blur-[60px] pointer-events-none" 
              />

              {/* Cyberpunk Holographic Rings (Background) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-40px] rounded-full border border-dashed border-[#B600A8]/10 pointer-events-none z-0"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-80px] rounded-full border border-dotted border-[#7621B0]/8 pointer-events-none z-0"
              />

              {/* Cyber role pill with pulsing status indicator */}
              <div 
                style={{ transform: 'translateZ(35px)', transformStyle: 'preserve-3d' }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B600A8]/30 bg-[#B600A8]/5 shadow-[0_0_15px_rgba(182,0,168,0.15)] mb-8 z-10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-pulse shadow-[0_0_8px_#B600A8]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#D7E2EA]/95 uppercase">
                  Full Stack Developer
                </span>
              </div>

              {/* Centered Metallic Name */}
              <div style={{ transform: 'translateZ(65px)', transformStyle: 'preserve-3d' }} className="z-10 relative mb-8 w-full">
                <h1 
                  className="font-black uppercase text-center leading-none tracking-wider text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] select-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#7E8F9F]"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5)) drop-shadow(0 0 1px rgba(255,255,255,0.1))'
                  }}
                >
                  Ripanshu Rana
                </h1>
                {/* Laser Accent Underline */}
                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#7621B0] to-transparent mx-auto mt-4 opacity-50" />
              </div>

              {/* Tech Stack Floating Badges Grid */}
              <div 
                style={{ transform: 'translateZ(45px)', transformStyle: 'preserve-3d' }}
                className="flex flex-wrap justify-center gap-3 max-w-lg z-10 min-h-[92px] sm:min-h-[80px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={skillGroup}
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-wrap justify-center gap-3 w-full"
                  >
                    {visibleSkills.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-sm select-none hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                      >
                        <span 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ 
                            backgroundColor: tech.color,
                            boxShadow: `0 0 8px ${tech.color}`
                          }} 
                        />
                        <span className="text-[10px] sm:text-xs font-medium tracking-wide text-[#D7E2EA]/85">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 3. Bottom bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 mt-auto">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-textLight font-light uppercase tracking-wide leading-snug text-center sm:text-left select-none max-w-sm sm:max-w-[260px] md:max-w-[320px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a full stack developer driven by crafting responsive and visually appealing web interfaces
        </FadeIn>

        <FadeIn
          as="div"
          delay={0.5}
          y={20}
          className="w-full sm:w-auto flex justify-center"
        >
          <ContactButton onClick={() => handleScrollTo('contact')} />
        </FadeIn>
      </div>

    </section>
  );
};
