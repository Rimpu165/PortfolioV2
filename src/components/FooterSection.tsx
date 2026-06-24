import type { FC } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const FooterSection: FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-darkBg text-textLight border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-16 sm:py-20 select-none z-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
        
        {/* Contact Info Header */}
        <FadeIn delay={0} y={30} className="w-full text-center sm:text-left">
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center sm:text-left"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Get In Touch
          </h2>
          <p className="text-textLight/60 font-light mt-4 max-w-lg text-center sm:text-left text-sm sm:text-base leading-relaxed">
            Have a project in mind, interested in hiring a developer, or just want to connect? Let&apos;s talk!
          </p>
        </FadeIn>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full pt-4 border-b border-[#D7E2EA]/10 pb-12">
          
          {/* Email */}
          <FadeIn delay={0.15} y={20} className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-textLight">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-textLight/40 font-medium mt-2">Email Me</span>
            <a
              href="mailto:rimpurajput165@gmail.com"
              className="text-sm sm:text-base md:text-lg font-medium text-textLight hover:text-white transition-colors duration-200"
            >
              rimpurajput165@gmail.com
            </a>
          </FadeIn>

          {/* Phone */}
          <FadeIn delay={0.25} y={20} className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-textLight">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-textLight/40 font-medium mt-2">Call Me</span>
            <a
              href="tel:+919805411680"
              className="text-sm sm:text-base md:text-lg font-medium text-textLight hover:text-white transition-colors duration-200"
            >
              +91 9805411680
            </a>
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.35} y={20} className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-textLight">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-textLight/40 font-medium mt-2">Location</span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-textLight">
              Mohali, Chandigarh, India
            </span>
          </FadeIn>

        </div>

        {/* Footer Bottom: Socials and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
          <FadeIn delay={0.4} y={15} className="flex items-center gap-4">
            <a
              href="https://github.com/rimpu165"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-textLight hover:text-white hover:border-[#D7E2EA]/50 flex items-center justify-center transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ripanshu-rana-4b67a3268"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-textLight hover:text-white hover:border-[#D7E2EA]/50 flex items-center justify-center transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </FadeIn>

          <FadeIn delay={0.45} y={15}>
            <p className="text-xs sm:text-sm text-textLight/40 font-light">
              &copy; {new Date().getFullYear()} Ripanshu Rana. All rights reserved.
            </p>
          </FadeIn>
        </div>

      </div>
    </footer>
  );
};
