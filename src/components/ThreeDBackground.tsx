import { useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ThreeDBackgroundProps {
  children: ReactNode;
}

export const ThreeDBackground: FC<ThreeDBackgroundProps> = ({ children }) => {
  // Global motion values for normalized cursor positions (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to prevent jittery mouse tracking
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Map mouse positions to different layers (Depth Parallax Multipliers)
  const orb1X = useTransform(springX, (val) => val * 100);
  const orb1Y = useTransform(springY, (val) => val * 100);

  const orb2X = useTransform(springX, (val) => val * -80);
  const orb2Y = useTransform(springY, (val) => val * -80);

  const orb3X = useTransform(springX, (val) => val * 50);
  const orb3Y = useTransform(springY, (val) => val * -50);

  const gridX = useTransform(springX, (val) => val * -20);

  return (
    <div className="relative w-full min-h-screen bg-darkBg text-textLight overflow-hidden">
      
      {/* 3D Environment Layer Container */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Neon Backdrop Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#B600A8]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7621B0]/5 blur-[120px]" />

        {/* 3D Perspective Grid Plane */}
        <motion.div 
          style={{ x: gridX }}
          className="absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60vh] opacity-[0.06] select-none pointer-events-none"
          css-perspective="800px"
        >
          <div 
            className="w-full h-full grid-lines"
            style={{
              transform: 'perspective(800px) rotateX(65deg) translateZ(0px)',
              transformOrigin: 'bottom center',
              backgroundImage: `
                linear-gradient(to right, rgba(215, 226, 234, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(215, 226, 234, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* 3D Floating Geometries (Orbs) */}
        
        {/* Orb 1: Magenta (Foreground Parallax) */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-[#B600A8]/10 to-transparent blur-[40px] pointer-events-none"
        />

        {/* Orb 2: Purple (Midground Parallax) */}
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[25%] right-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-[#7621B0]/10 to-transparent blur-[50px] pointer-events-none"
        />

        {/* Orb 3: Orange (Background Parallax) */}
        <motion.div
          style={{ x: orb3X, y: orb3Y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[60%] left-[50%] w-48 h-48 rounded-full bg-gradient-to-r from-[#BE4C00]/5 to-transparent blur-[35px] pointer-events-none"
        />

      </div>

      {/* Main Content Wrapper (Z-index high to receive mouse clicks) */}
      <div className="relative z-10 w-full min-h-screen overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
