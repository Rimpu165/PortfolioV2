import type { FC } from 'react';

interface ContactButtonProps {
  onClick?: () => void;
}

export const ContactButton: FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full font-medium uppercase tracking-widest text-white transition-transform duration-200 active:scale-95 px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base cursor-pointer whitespace-nowrap"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  );
};
