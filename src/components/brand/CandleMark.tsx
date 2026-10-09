import React from 'react';

interface CandleMarkProps {
  className?: string;
  width?: number;
  height?: number;
  filled?: boolean | 'half';
  mintOutline?: boolean;
}

export const CandleMark: React.FC<CandleMarkProps> = ({
  className = '',
  width = 28,
  height = 88,
  filled = true,
  mintOutline = true,
}) => {
  const wickColor = mintOutline ? 'var(--mint)' : 'var(--steel)';
  const outlineColor = mintOutline ? 'var(--mint)' : 'var(--steel)';

  return (
    <svg
      width={width}
      height={height + 40}
      viewBox={`0 0 ${width} ${height + 40}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Top Wick */}
      <line
        x1={width / 2}
        y1="0"
        x2={width / 2}
        y2="20"
        stroke={wickColor}
        strokeWidth="1.5"
      />

      {/* Body */}
      {filled === true && (
        <rect
          x="0.5"
          y="20.5"
          width={width - 1}
          height={height - 1}
          fill="var(--mint-deep)"
          stroke={outlineColor}
          strokeWidth="1"
        />
      )}

      {filled === 'half' && (
        <g>
          {/* Outer outline */}
          <rect
            x="0.5"
            y="20.5"
            width={width - 1}
            height={height - 1}
            fill="none"
            stroke={outlineColor}
            strokeWidth="1"
          />
          {/* Bottom half filled */}
          <rect
            x="1"
            y={20 + height / 2}
            width={width - 2}
            height={height / 2 - 1}
            fill="var(--mint-deep)"
          />
        </g>
      )}

      {filled === false && (
        <rect
          x="0.5"
          y="20.5"
          width={width - 1}
          height={height - 1}
          fill="none"
          stroke={outlineColor}
          strokeWidth="1"
        />
      )}

      {/* Bottom Wick */}
      <line
        x1={width / 2}
        y1={20 + height}
        x2={width / 2}
        y2={height + 40}
        stroke={wickColor}
        strokeWidth="1.5"
      />
    </svg>
  );
};
