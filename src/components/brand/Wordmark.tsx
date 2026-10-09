import React from 'react';

interface WordmarkProps {
  className?: string;
  size?: 'normal' | 'large';
}

export const Wordmark: React.FC<WordmarkProps> = ({ className = '', size = 'normal' }) => {
  const sizeClasses = size === 'large' ? 'text-[24px]' : 'text-[20px]';

  return (
    <span
      className={`font-bricolage font-semibold ${sizeClasses} tracking-[-0.02em] text-[var(--text)] leading-none select-none ${className}`}
    >
      Candles <span className="text-[var(--mint)]">&amp;</span> Wicks
    </span>
  );
};
