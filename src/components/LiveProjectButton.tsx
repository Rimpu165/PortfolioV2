import type { FC } from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
}

export const LiveProjectButton: FC<LiveProjectButtonProps> = ({ onClick, href }) => {
  const content = (
    <span className="inline-block">Live Project</span>
  );

  const classes = "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 active:scale-95 whitespace-nowrap cursor-pointer";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
