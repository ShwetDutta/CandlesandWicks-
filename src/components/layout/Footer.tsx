import React from 'react';
import { Badge } from '../brand/Badge';
import { Wordmark } from '../brand/Wordmark';
import { Container } from './Container';
import { siteConfig } from '../../config/site';
import { InstagramIcon, LinkedInIcon, XIcon } from '../ui/Icons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const getSocialIcon = (icon?: string) => {
    switch (icon) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />;
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />;
      case 'x':
        return <XIcon className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[var(--footer)] text-[var(--text)] border-t border-[var(--line)] py-16">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Top Row: Brand & Social Links */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Badge size={48} alt="" loading="lazy" />
              <Wordmark size="large" />
            </div>

            {/* Socials */}
            <nav className="flex items-center gap-6 flex-wrap" aria-label="Social Media Links">
              {siteConfig.socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-hanken font-medium text-[15px] text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  {getSocialIcon(item.icon)}
                  <span>{item.label}</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[var(--line)]" />

          {/* Bottom Row: Disclaimer & Copyright */}
          <div className="flex flex-col gap-6">
            <p className="font-hanken text-[13px] leading-[1.65] text-[var(--muted)] max-w-[64ch]">
              Trading and investing involve risk, including the possible loss of capital. Candles &amp; Wicks provides educational and informational content only. Nothing on this page is financial advice, a recommendation, or an offer to buy or sell any instrument, and nothing here is a guarantee of future results. Past performance does not indicate future results. Make your own decisions and consider speaking to a licensed professional. {siteConfig.legalReviewTag}
            </p>

            <p className="font-hanken text-[13px] text-[var(--muted)]/70">
              &copy; {CURRENT_YEAR} Candles &amp; Wicks. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
