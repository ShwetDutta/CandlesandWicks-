# Candles & Wicks — Placeholders & Content Confirmation Guide

This document lists every active placeholder and draft copy requiring confirmation in the project, along with instructions on where to replace each value.

---

## 1. Config Placeholders (`src/config/site.ts`)

| Placeholder | Description | Location to Replace |
| :--- | :--- | :--- |
| `[COMMUNITY_URL]` | The invite URL for the free Discord or Telegram community. | `src/config/site.ts` (`communityUrl`) |
| `[Platform: Discord / Telegram]` | The name of the community platform (e.g. "Discord" or "Telegram"). | `src/config/site.ts` (`communityPlatform`) |
| `[Founder name]` | Real names of the two founders. | `src/config/site.ts` (`founderNames`) |
| `[VIDEO]` / `src` | URL to the hosted founder introduction video (e.g., `/video.mp4` or CDN link). | `src/config/site.ts` (`video.src` or `video.embedUrl`) |
| `[MM:SS]` | Real video duration (e.g. "04:15"). | `src/config/site.ts` (`video.duration`) |
| `[CANONICAL URL]` | Production canonical domain URL (e.g., `https://candlesandwicks.com`). | `src/config/site.ts` (`canonicalUrl`) and `index.html` |
| `[LEGAL REVIEW]` | Legal review tag/note in the footer disclaimer. | `src/config/site.ts` (`legalReviewTag`) |
| `[INSTAGRAM URL]` | Official Instagram profile link. | `src/config/site.ts` (`socials[0].url`) |
| `[YOUTUBE URL]` | Official YouTube channel link. | `src/config/site.ts` (`socials[1].url`) |
| `[OTHER URL]` | Other social network profile link (e.g. X/Twitter, TikTok). | `src/config/site.ts` (`socials[2].url`) |

---

## 2. Copy to Confirm (`[CONFIRM]`)

The following sections contain draft copy requiring approval from the founders before launch:

### A. Approach Section (`src/components/sections/Approach.tsx`)
- **Item 4 ("Technology as a tool"):**
  > "Alongside education and research, we build algorithmic trading technology. This page isn't about that. It is about how we think."

### B. Founders Section (`src/components/sections/Founders.tsx`)
- **Headline:**
  > "Seven years of watching why things moved."
- **Body:**
  > "The founders of Candles & Wicks have each spent around seven years trading. Long enough to learn how much of a move is visible on the chart, and how much isn't."

### C. Community Section (`src/components/sections/Community.tsx`)
- **Headline:**
  > "A place to think about markets properly."
- **4 Feature Titles:**
  1. "Market context, explained"
  2. "Founder-led breakdowns of how events moved price"
  3. "Questions answered by traders at a similar level"
  4. "Education that builds on the basics"

### D. The Path (`src/components/sections/Path.tsx`)
- **Node 2 ("Active member") copy:**
  > "Members who show up and take part become part of what comes next."
- **Node 3 ("Paid community") copy:**
  > "[Paid community details to be confirmed by founders]"

---

## 3. Brand & Image Asset Replacements

| File Path | Description | Recommended Dimensions |
| :--- | :--- | :--- |
| `public/logo.png` | **Currently active brand logo image.** | Min 512x512 PNG (Circle badge) |
| `public/og-image.png` | Social sharing image for Twitter/OpenGraph previews. Dark background (`#0A0D11`), badge logo on left (360px), H1 headline on right. | 1200 x 630 PNG |
| Favicon exports | Sized favicon PNG exports to replace standard logo reference. | 32x32px, 192x192px, 180x180px |

---

*Keep this file updated whenever placeholders are replaced with finalized production assets.*
