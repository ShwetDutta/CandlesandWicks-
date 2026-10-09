import React from 'react';

interface BadgeProps {
  size?: number; // width and height in px
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

export const Badge: React.FC<BadgeProps> = ({
  size = 40,
  className = '',
  alt = '',
  loading = 'eager',
}) => {
  return (
    <img
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      loading={loading}
      decoding="async"
      className={`rounded-full object-cover shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
