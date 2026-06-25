import type { FC } from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
}

export const LiveProjectButton: FC<LiveProjectButtonProps> = ({ onClick, href }) => {
  const content = (
    <span className="inline-block">Live Project</span>
  );

  const classes = "rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2 text-xs hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer";

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
