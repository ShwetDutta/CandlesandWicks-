/**
 * Candles & Wicks Site Configuration
 * All content constants and placeholder declarations live here.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon?: 'instagram' | 'linkedin' | 'x' | string;
}

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
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  communityUrl: '[COMMUNITY_URL]',
  communityPlatform: '[Platform: Discord / Telegram]',
  canonicalUrl: 'https://candlesandwicks.si/',
  legalReviewTag: '[LEGAL REVIEW]',

  video: {
    src: '/video.mp4', // Web-optimized video in public/
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
      url: 'https://www.instagram.com/_candlesandwicks_?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==',
      icon: 'instagram',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/candles-and-wicks/?viewAsMember=true',
      icon: 'linkedin',
    },
    {
      label: 'X',
      url: 'https://x.com/_candlesandwick',
      icon: 'x',
    },
  ],
};
