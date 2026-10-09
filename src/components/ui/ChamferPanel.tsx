import React from 'react';

interface ChamferPanelProps {
  children: React.ReactNode;
  cut?: number;
  mobileCut?: number;
  fill?: string;
  borderColor?: string;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  'aria-label'?: string;
  role?: string;
}

export const ChamferPanel: React.FC<ChamferPanelProps> = ({
  children,
  cut = 24,
  fill = 'var(--surface-2)',
  borderColor = 'var(--line-strong)',
  className = '',
  as: Component = 'div',
  style = {},
  'aria-label': ariaLabel,
  role,
}) => {
  // Chamfer polygon cutting top-right and bottom-left opposite corners:
  // outer cut polygon: polygon(0 0, calc(100% - cut px) 0, 100% cut px, 100% 100%, cut px 100%, 0 calc(100% - cut px))
  // inner cut polygon (reduced cut by 0.41px for 1px inset): cut - 0.41
  const innerCut = Math.max(0, cut - 0.41);

  const outerClipPath = `polygon(0 0, calc(100% - ${cut}px) 0, 100% ${cut}px, 100% 100%, ${cut}px 100%, 0 calc(100% - ${cut}px))`;
  const innerClipPath = `polygon(0 0, calc(100% - ${innerCut}px) 0, 100% ${innerCut}px, 100% 100%, ${innerCut}px 100%, 0 calc(100% - ${innerCut}px))`;

  return (
    <Component
      className={`relative p-[1px] ${className}`}
      style={{
        backgroundColor: borderColor,
        clipPath: outerClipPath,
        WebkitClipPath: outerClipPath,
        ...style,
      }}
      aria-label={ariaLabel}
      role={role}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundColor: fill,
          clipPath: innerClipPath,
          WebkitClipPath: innerClipPath,
        }}
      >
        {children}
      </div>
    </Component>
  );
};
