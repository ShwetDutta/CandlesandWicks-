import React from 'react';
import { Badge } from '../brand/Badge';
import { Wordmark } from '../brand/Wordmark';
import { Container } from './Container';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
            <nav className="flex items-center gap-6" aria-label="Social Media Links">
              {siteConfig.socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hanken font-medium text-[15px] text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  {item.label}
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
              &copy; {currentYear} Candles &amp; Wicks. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
