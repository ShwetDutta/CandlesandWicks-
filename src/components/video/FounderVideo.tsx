import React, { useState, useRef } from 'react';
import { ChamferPanel } from '../ui/ChamferPanel';
import { PlayIcon } from '../ui/PlayIcon';
import { TextLink } from '../ui/TextLink';
import { siteConfig } from '../../config/site';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const FounderVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationText, setDurationText] = useState(siteConfig.video.duration);
  const videoRef = useRef<HTMLVideoElement | HTMLIFrameElement | null>(null);
  const { ref, inView } = useInView(0.25);
  const prefersReduced = useReducedMotion();

  const hasVideoSource = Boolean(siteConfig.video.src || siteConfig.video.embedUrl);
  const isPortrait = siteConfig.video.orientation === 'portrait';

  const handlePlay = () => {
    if (!hasVideoSource) return;
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.focus();
      }
    }, 100);
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.duration && !isNaN(video.duration)) {
      const mins = Math.floor(video.duration / 60);
      const secs = Math.floor(video.duration % 60);
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      setDurationText(formatted);
    }
  };

  return (
    <div ref={ref} className="w-full flex flex-col gap-4 max-w-[960px] mx-auto">
      {/* Video Outer Container */}
      <div
        className={`w-full mx-auto transition-all duration-800 ease-[var(--ease-inout)] ${
          isPortrait ? 'max-w-[420px] aspect-[9/16] max-h-[75vh]' : 'aspect-video max-h-[64vh]'
        }`}
        style={{
          opacity: inView || prefersReduced ? 1 : 0,
          transform: inView || prefersReduced ? 'translateY(0px)' : 'translateY(16px)',
        }}
      >
        <ChamferPanel
          cut={24}
          mobileCut={0}
          fill="var(--surface)"
          borderColor="var(--line-strong)"
          className="w-full h-full"
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Active Video Player State */}
            {isPlaying && hasVideoSource ? (
              siteConfig.video.embedUrl ? (
                <iframe
                  ref={videoRef as React.RefObject<HTMLIFrameElement>}
                  src={siteConfig.video.embedUrl}
                  title="Founder introduction video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  ref={videoRef as React.RefObject<HTMLVideoElement>}
                  src={siteConfig.video.src}
                  controls
                  autoPlay
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                >
                  <track kind="captions" src="" label="English" />
                  Your browser does not support video playback.
                </video>
              )
            ) : (
              /* Poster State */
              <div
                onClick={handlePlay}
                className={`relative w-full h-full bg-[var(--surface)] flex flex-col justify-between p-8 max-sm:p-6 select-none ${
                  hasVideoSource ? 'cursor-pointer' : ''
                }`}
              >
                {/* Background Video Preview Frame / Poster Image / Ghost Monolith */}
                {siteConfig.video.poster ? (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={siteConfig.video.poster}
                      alt=""
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-[var(--bg)]/30" />
                  </div>
                ) : siteConfig.video.src ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                      src={`${siteConfig.video.src}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      onLoadedMetadata={handleLoadedMetadata}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-[var(--bg)]/30" />
                  </div>
                ) : (
                  /* Ghost Monolith (Outline only, 8% opacity, right side) */
                  <div
                    className="absolute right-[-10%] top-[-20%] bottom-[-20%] w-[40%] border border-[var(--mint)] opacity-8 pointer-events-none z-0"
                    aria-hidden="true"
                  >
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[var(--mint)]" />
                  </div>
                )}

                {/* Top-Left Overlay */}
                <div className="relative z-10">
                  <span className="font-hanken font-medium text-[15px] text-[var(--text)]/80 drop-shadow-sm">
                    A word from the founders
                  </span>
                </div>

                {/* Bottom Row: Bottom-Left Headline & Bottom-Right Play Button */}
                <div className="relative z-10 flex items-end justify-between gap-6 flex-wrap">
                  {/* Headline */}
                  <h3 className="font-bricolage font-medium text-[clamp(52px,7vw,112px)] leading-[0.95] tracking-[-0.045em] text-[var(--text)] drop-shadow-md">
                    Start <span className="text-[var(--mint)]">here.</span>
                  </h3>

                  {/* Play Control */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end text-right max-sm:hidden">
                      <span className="font-hanken font-medium text-[14px] text-[var(--text)] drop-shadow-sm">
                        {hasVideoSource ? 'Play the introduction' : '[Video coming soon]'}
                      </span>
                      <span className="font-mono-plex text-[12px] text-[var(--muted)]">
                        {durationText}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlay();
                      }}
                      disabled={!hasVideoSource}
                      aria-label="Play founder introduction video"
                      className={`
                        group relative w-[92px] h-[92px] max-sm:w-[72px] max-sm:h-[72px]
                        rounded-full bg-[var(--mint)] text-[var(--on-mint)]
                        flex items-center justify-center shrink-0
                        transition-transform duration-350 ease-[var(--ease-out)]
                        ${hasVideoSource ? 'hover:scale-[1.06] cursor-pointer' : 'opacity-60 cursor-not-allowed'}
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-4
                      `}
                    >
                      {/* Ring expansion with Glow budget #2 */}
                      <span
                        className="absolute inset-0 rounded-full border border-[var(--mint)]/40 opacity-0 group-hover:opacity-100 group-hover:scale-[1.28] transition-all duration-450 ease-[var(--ease-out)] pointer-events-none"
                        style={{
                          filter: 'drop-shadow(0 0 24px rgba(44, 245, 168, 0.25))',
                        }}
                        aria-hidden="true"
                      />

                      <PlayIcon size={20} color="var(--on-mint)" className="translate-x-[2px]" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ChamferPanel>
      </div>

      {/* Caption Row Beneath Video */}
      <div className="flex items-center justify-between gap-4 flex-wrap pt-2 px-1">
        <div className="flex items-center gap-3">
          <span className="font-hanken text-[13px] text-[var(--muted)]">Founder introduction</span>
          <span className="text-[var(--line-strong)]">•</span>
          <span className="font-mono-plex text-[12px] text-[var(--muted)]">
            {durationText}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {siteConfig.video.transcriptUrl && (
            <TextLink href={siteConfig.video.transcriptUrl} variant="muted">
              Read the transcript
            </TextLink>
          )}
          <TextLink href={siteConfig.communityUrl} icon="arrow" variant="mint">
            Join the free community
          </TextLink>
        </div>
      </div>
    </div>
  );
};
