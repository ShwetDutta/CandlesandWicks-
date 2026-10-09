/**
 * Candles & Wicks Site Configuration
 * All content constants and placeholder declarations live here.
 */

export interface SiteConfig {
  communityUrl: string;
  communityPlatform: string;
  canonicalUrl: string;
  legalReviewTag: string;
  video: {
    src: string;
    embedUrl: string;
    poster: string;
    orientation: 'landscape' | 'portrait';
    duration: string;
    transcriptUrl: string;
  };
  founderNames: [string, string];
  socials: Array<{
    label: string;
    url: string;
  }>;
}

export const siteConfig: SiteConfig = {
  communityUrl: '[COMMUNITY_URL]',
  communityPlatform: '[Platform: Discord / Telegram]',
  canonicalUrl: '[CANONICAL URL]',
  legalReviewTag: '[LEGAL REVIEW]',

  video: {
    src: '/landing page video.mp4', // Attached founder introduction video in public/
    embedUrl: '', // Optional embed iframe URL
    poster: '', // Optional poster image URL
    orientation: 'landscape',
    duration: '[MM:SS]',
    transcriptUrl: '', // Hidden if empty
  },

  founderNames: ['[Founder name]', '[Founder name]'],

  socials: [
    {
      label: 'Instagram',
      url: '[INSTAGRAM URL]',
    },
    {
      label: 'YouTube',
      url: '[YOUTUBE URL]',
    },
    {
      label: '[Other]',
      url: '[OTHER URL]',
    },
  ],
};
