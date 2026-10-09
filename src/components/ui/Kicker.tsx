import React from 'react';

interface KickerProps {
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  className?: string;
}

export const Kicker: React.FC<KickerProps> = ({ children, theme = 'dark', className = '' }) => {
  const textColor = theme === 'dark' ? 'text-[#8E9A94]' : 'text-[#566059]';
  const dotColor = theme === 'dark' ? 'bg-[#E2C27B]' : 'bg-[#7A6126]';

  return (
    <div className={`flex items-center gap-[10px] ${className}`}>
      {/* 6px accent circle */}
      <span className={`block w-[6px] h-[6px] rounded-full ${dotColor} shrink-0`} aria-hidden="true" />
      <span className={`font-hanken font-medium text-[14px] leading-none tracking-[0.01em] ${textColor}`}>
        {children}
      </span>
    </div>
  );
};
