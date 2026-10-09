import React from 'react';
import { Kicker } from '../layout/Kicker';
import { CandleMark } from '../brand/CandleMark';
import { FadeRise } from '../ui/FadeRise';
import { DrawLine } from '../ui/DrawLine';

export const Path: React.FC = () => {
  const steps = [
    {
      candleFilled: true,
      mintOutline: true,
      title: 'Free community',
      text: 'Everyone begins here.',
    },
    {
      candleFilled: 'half' as const,
      mintOutline: true,
      title: 'Active member',
      text: 'Members who show up and take part become part of what comes next.',
    },
    {
      candleFilled: false,
      mintOutline: false,
      title: 'Paid community',
      text: '[Paid community details to be confirmed by founders]',
    },
  ];

  return (
    <div className="flex flex-col gap-12 pt-16 border-t border-[var(--line)]">
      <Kicker>Where it leads</Kicker>

      {/* Path Sequence Wrapper */}
      <div className="relative w-full">
        {/* Horizontal Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[64px] left-0 right-0 z-0">
          <DrawLine color="var(--line-strong)" duration={900} />
        </div>

        {/* Vertical Connecting Line (Mobile) */}
        <div className="block md:hidden absolute top-0 bottom-0 left-[34px] z-0">
          <DrawLine color="var(--line-strong)" duration={900} vertical />
        </div>

        {/* Three Path Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <FadeRise key={idx} delay={idx * 250} duration={600}>
              <div className="flex flex-col max-md:flex-row items-start max-md:items-center gap-6">
                {/* Candle Node */}
                <div className="bg-[var(--bg)] p-2">
                  <CandleMark
                    width={28}
                    height={88}
                    filled={step.candleFilled}
                    mintOutline={step.mintOutline}
                  />
                </div>

                {/* Node Details */}
                <div className="flex flex-col gap-2">
                  <h4 className="font-bricolage font-medium text-[22px] text-[var(--text)]">
                    {step.title}
                  </h4>
                  <p className="font-hanken text-[15px] text-[var(--muted)] max-w-[24em]">
                    {step.text}
                  </p>
                </div>
              </div>
            </FadeRise>
          ))}
        </div>
      </div>
    </div>
  );
};
