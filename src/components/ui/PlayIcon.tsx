import React from 'react';

interface PlayIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const PlayIcon: React.FC<PlayIconProps> = ({ className = '', size = 16, color = 'currentColor' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5 3.5L13 8L5 12.5V3.5Z"
        fill={color}
      />
    </svg>
  );
};
