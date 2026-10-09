import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`mx-auto w-full max-w-[1360px] px-[clamp(20px,4.5vw,72px)] ${className}`}
    >
      {children}
    </Component>
  );
};
