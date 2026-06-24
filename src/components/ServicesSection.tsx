import type { FC } from 'react';
import { FadeIn } from './FadeIn';

const SERVICES = [
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

export const ServicesSection: FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none z-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Services Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="font-black uppercase text-[#0C0C0C] tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.num}
              delay={index * 0.1}
              y={30}
              className={`w-full flex flex-row items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 ${
                index === 0 ? 'border-t border-[#0C0C0C]/15' : ''
              }`}
            >
              {/* Number on the left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 min-w-[70px] sm:min-w-[110px] md:min-w-[160px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.num}
              </div>

              {/* Title & description stacked vertically on the right */}
              <div className="flex flex-col gap-2 text-left">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl text-left"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
