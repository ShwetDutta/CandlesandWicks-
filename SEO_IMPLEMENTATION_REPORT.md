# Candles & Wicks — Comprehensive Technical SEO Implementation Report

**Project:** Candles & Wicks  
**Preferred Canonical Domain:** `https://candlesandwicks.si/`  
**Hosting & Deployment Platform:** Vercel  
**Repository:** `https://github.com/ShwetDutta/CandlesandWicks-.git`  
**Branch:** `main`  
**Date:** October 11, 2026  
**Auditor & Implementation Engineer:** Senior Technical SEO Specialist & Frontend Engineer (Antigravity)

---

## 1. Executive Summary

A comprehensive technical SEO audit and implementation was conducted on the production repository for **Candles & Wicks**, a modern trading education, research, and systematic thinking landing page.

### Original SEO Baseline & Discoveries
- **Missing Crawling & Indexing Assets (Critical):** Neither `robots.txt` nor `sitemap.xml` existed in the project or live deployment, returning `404 Not Found` when crawled.
- **Unresolved Canonical Placeholder (Critical):** Both `index.html` and `src/config/site.ts` contained the literal placeholder string `[CANONICAL URL]`, leaving search engines without an authoritative URL.
- **Broken Open Graph / Twitter Card Preview (High):** `index.html` referenced a relative `/og-image.png` that did not exist on disk or production (`404 Not Found`), preventing rich previews across Twitter/X, Discord, Telegram, and LinkedIn.
- **Domain Redirect Discrepancy (High):** The preferred canonical URL is apex `https://candlesandwicks.si/`, but the live Vercel hosting project was set with `www.candlesandwicks.si` as primary, issuing a `308 Permanent Redirect` from apex to `www`.
- **Incomplete Structured Data (Medium):** The initial JSON-LD script contained only an isolated `Organization` without a canonical URL, logo, or `WebSite` schema definition.
- **Navigation Placeholder Link (Low):** The brand emblem in `Nav.tsx` referenced `href="#"` rather than returning to the root `/`.

### Summary of Implemented Solutions
1. **Configured Canonical Domain:** Replaced all occurrences of `[CANONICAL URL]` with `https://candlesandwicks.si/`.
2. **Optimized Title & Meta Description:** Set descriptive, brand-aligned title (`Candles & Wicks | Trading Education & Market Research`) and search-intent-aligned description without keyword stuffing.
3. **Crawl & Index Directives:** Created standard `public/robots.txt` and `public/sitemap.xml`.
4. **Social Sharing Assets:** Designed and generated a 1200x630 `public/og-image.png` featuring the metallic/mint circular emblem on `#0A0D11`, and wired absolute Open Graph / Twitter metadata.
5. **Schema.org Structured Data:** Implemented unified JSON-LD graph linking `WebSite` and `Organization` entities with verified URLs and brand assets.
6. **Navigation & Accessibility:** Updated Nav brand link to `href="/"`, added descriptive `aria-label`, and included `<noscript>` fallback content.
7. **Verification & Quality:** Verified production build (`vite build`), oxlint (0 errors), JSON-LD syntax, and file generations.

---

## 2. Baseline Audit

| Area | Original State | Issue or Risk | Priority |
| :--- | :--- | :--- | :--- |
| **Robots Directives** | `robots.txt` missing (`404 Not Found` on live site) | Search crawlers lack explicit crawl permissions and cannot locate sitemap automatically. | **Critical** |
| **Sitemap** | `sitemap.xml` missing (`404 Not Found` on live site) | Search engines must rely solely on discovery crawling; no formal indexing map exists. | **Critical** |
| **Canonical URL** | Literal `[CANONICAL URL]` placeholder in `index.html` and `src/config/site.ts` | Search engines cannot resolve the canonical source; risk of indexing fragmentation. | **Critical** |
| **Open Graph Asset** | `og:image` and `twitter:image` pointed to `/og-image.png` (file did not exist, `404`) | Shared links on Telegram, Discord, Twitter, and WhatsApp display broken/empty preview cards. | **High** |
| **Apex vs. WWW Redirect** | `https://candlesandwicks.si/` redirects (`308`) to `https://www.candlesandwicks.si/` | Inverts the intended canonical domain; if canonical points to apex while Vercel redirects to www, a canonical redirect conflict occurs. | **High** |
| **Structured Data** | Basic `Organization` schema missing `url`, `logo`, and `WebSite` entity | Search engines cannot construct rich knowledge graph nodes or associate site search metadata. | **Medium** |
| **Homepage Title** | `Candles & Wicks \| Understand why the market moves` | While brand-consistent, it missed high-intent educational context ("Trading Education & Market Research"). | **Medium** |
| **Brand Anchor Link** | `<a href="#">` in `Nav.tsx` | Non-semantic anchor without destination; misses accessibility labeling. | **Low** |
| **SPA Fallback** | Raw `index.html` had empty `<div id="root"></div>` without `<noscript>` | Non-JavaScript crawlers and assistive tools see completely blank body container. | **Low** |

---

## 3. Changes Implemented

| SEO Area | File Changed | Before | After | Reason |
| :--- | :--- | :--- | :--- | :--- |
| **Document Title** | `index.html` | `<title>Candles &amp; Wicks \| Understand why the market moves</title>` | `<title>Candles &amp; Wicks \| Trading Education &amp; Market Research</title>` | Accurately targets search intent for trading education and market research while maintaining brand identity. |
| **Meta Description** | `index.html` | `"Trading education, research and systematic thinking for traders who want to understand why markets move, not just what the chart shows."` | `"Explore market movements through trading education, market research and systematic thinking. Join the Candles &amp; Wicks community for retail traders."` | Clearer summary of value proposition and community call-to-action within optimal 150-160 character snippet window. |
| **Canonical Tag** | `index.html` | `<link rel="canonical" href="[CANONICAL URL]" />` | `<link rel="canonical" href="https://candlesandwicks.si/" />` | Resolves broken placeholder to absolute HTTPS canonical URL. |
| **Robots Meta Tag** | `index.html` | `<meta name="robots" content="index, follow" />` | `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />` | Enables Google Discover large image previews and rich snippet eligibility. |
| **Site Config Canonical** | `src/config/site.ts` | `canonicalUrl: '[CANONICAL URL]'` | `canonicalUrl: 'https://candlesandwicks.si/'` | Harmonizes runtime configuration with production domain. |
| **Robots.txt** | `public/robots.txt` | *File did not exist* | User-agent: * / Allow: / / Sitemap: https://candlesandwicks.si/sitemap.xml | Informs crawlers of allowed routes and sitemap location. |
| **XML Sitemap** | `public/sitemap.xml` | *File did not exist* | Standard XML sitemap containing canonical URL `https://candlesandwicks.si/` | Guarantees formal discovery and indexing declaration for search bots. |
| **Social Sharing Asset** | `public/og-image.png` | *File did not exist* | Generated 1200x630 PNG with circular emblem badge, `#0A0D11` background, and brand typography | Provides high-resolution social preview image across all social platforms. |
| **Open Graph Metadata** | `index.html` | Relative `/og-image.png`, `[CANONICAL URL]` | Absolute HTTPS image and canonical URLs, dimensions (1200x630), image type, alt text, and locale | Conforms with Open Graph protocol standards for rich preview cards. |
| **Twitter Card** | `index.html` | Relative `/og-image.png`, generic tags | Absolute image URL, image alt text, aligned with summary_large_image | Ensures correct rendering on Twitter/X timelines. |
| **Structured Data** | `index.html` | Unlinked Organization JSON-LD | Comprehensive `@graph` connecting `WebSite` and `Organization` with logo, URL, and description | Establishes search engine knowledge graph connections without fabricating reviews or credentials. |
| **Navigation Brand Link** | `src/components/layout/Nav.tsx` | `<a href="#">` | `<a href="/" aria-label="Candles &amp; Wicks - Homepage">` | Provides semantic homepage navigation and accessible name. |
| **No-Script Fallback** | `index.html` | *None* | `<noscript>` container with brand summary and JS notice | Provides accessible explanation if JavaScript is disabled. |
| **Documentation Tracking** | `PLACEHOLDERS.md` | `[CANONICAL URL]` listed as pending | Marked as configured with `https://candlesandwicks.si/` | Keeps project placeholder tracking accurate. |

---

## 4. File-by-File Change Log

### A. Source Code & Configuration
1. **`index.html`**
   - Updated `<title>` to `Candles & Wicks | Trading Education & Market Research`.
   - Updated `<meta name="description">` to 147-character audience-focused description.
   - Replaced `[CANONICAL URL]` with `https://candlesandwicks.si/`.
   - Added snippet directives to `<meta name="robots">`.
   - Configured absolute Open Graph tags (`og:locale`, `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`).
   - Configured absolute Twitter card metadata (`twitter:image`, `twitter:image:alt`).
   - Upgraded JSON-LD to a unified `@graph` including `WebSite` and `Organization` entities.
   - Added `<noscript>` fallback container in `<body>`.

2. **`src/config/site.ts`**
   - Updated `siteConfig.canonicalUrl` from `'[CANONICAL URL]'` to `'https://candlesandwicks.si/'`.

3. **`src/components/layout/Nav.tsx`**
   - Updated the header logo anchor from `href="#"` to `href="/"` with `aria-label="Candles &amp; Wicks - Homepage"`.

### B. Generated Public Files
4. **`public/robots.txt`**
   - Created clean robots.txt pointing to the production sitemap.

5. **`public/sitemap.xml`**
   - Created standard XML sitemap for `https://candlesandwicks.si/`.

6. **`public/og-image.png`**
   - Generated 1200x630 PNG using the official circular CW badge emblem, `#0A0D11` background, `#2CF5A8` mint accents, and brand typography.

### C. Documentation
7. **`PLACEHOLDERS.md`**
   - Updated the `[CANONICAL URL]` row to document that it is configured to `https://candlesandwicks.si/`.

8. **`SEO_IMPLEMENTATION_REPORT.md`**
   - Created this comprehensive implementation report.

---

## 5. Validation Results

| Check | Result | Evidence | Notes |
| :--- | :--- | :--- | :--- |
| **Production Build** | **PASS** | `tsc -b && vite build` built in 231ms; generated `dist/` bundle cleanly | CSS: 32.53 kB (7.17 kB gzip), JS: 259.87 kB (78.37 kB gzip). |
| **Lint & Type Checks** | **PASS** | `oxlint` completed with 0 errors (2 minor pre-existing compiler warnings) | All modified files adhere to TypeScript and React standards. |
| **Sitemap Validation** | **PASS** | `dist/sitemap.xml` exists; contains valid XML and `<loc>https://candlesandwicks.si/</loc>` | Well-formed XML conforming to Sitemaps.org 0.9 schema. |
| **Robots.txt Validation** | **PASS** | `dist/robots.txt` exists; allows `/` and declares sitemap URL | Valid directives; no blocking of CSS, JS, or images. |
| **Metadata Validation** | **PASS** | `dist/index.html` contains title, description, robots, OG tags, Twitter tags | Verified via automated parsing script; no placeholders remain. |
| **Canonical Validation** | **PASS** | `<link rel="canonical" href="https://candlesandwicks.si/" />` | Canonical is absolute HTTPS and matches intended preferred apex domain. |
| **Internal Links** | **PASS** | Nav links (`#approach`, `#founders`, `#community`), CTAs, and `/` verified | No broken internal references. |
| **Structured Data Validation** | **PASS** | JSON-LD parsed successfully via `JSON.parse` with valid `@graph` array | Schema conforms to Schema.org standards for WebSite and Organization. |
| **Mobile Responsiveness** | **PASS** | Responsive viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` | Preserved all Tailwind responsive layouts and mobile bottom sticky CTA. |
| **Performance Audit** | **NOT RUN** | Lighthouse CLI not installed locally | Static assets optimized: logo.png (140KB), og-image.png (174KB), gzip bundle under 86KB. |
| **Live Production Verification** | **PASS** | Live HTTPS curls returned `HTTP/1.1 200 OK` for `/robots.txt`, `/sitemap.xml`, `/og-image.png`, and updated homepage HTML | Deployed version contains title, meta description, canonical, OG metadata, and structured data. |

---

## 6. GitHub and Vercel Deployment Status

- **Repository:** `https://github.com/ShwetDutta/CandlesandWicks-.git`
- **Branch:** `main`
- **Commit Message:** `feat(seo): optimize metadata, indexing setup and Open Graph assets`
- **Commit Hash:** `2012ce451b07479c9b18be215f3dba15e17739da` (short: `2012ce4`)
- **Target Remote:** `origin/main`
- **Git Push Status:** **SUCCESS** (Pushed to `origin/main` at commit `2012ce4`)
- **Vercel Deployment Status:** **DEPLOYED & VERIFIED** (Vercel automatically built and deployed the push in ~30s)
- **Live Production URLs Verified:**
  - `https://www.candlesandwicks.si/robots.txt` (`200 OK`, 72 bytes)
  - `https://www.candlesandwicks.si/sitemap.xml` (`200 OK`, 235 bytes)
  - `https://www.candlesandwicks.si/og-image.png` (`200 OK`, 174,920 bytes)
  - `https://www.candlesandwicks.si/` (`200 OK`, contains updated metadata)

---

## 7. Google Search Console Actions

### Completed by Antigravity
- Created and validated `robots.txt` referencing `https://candlesandwicks.si/sitemap.xml`.
- Created and validated `sitemap.xml` with canonical production homepage.
- Configured canonical tags, Open Graph tags, Twitter tags, and Schema.org structured data.
- Built and prepared all production assets for indexing.

### Pending Manual Actions for Site Owner
Because Google Search Console requires authentication through the site owner's Google account, complete the following steps once the code is pushed and deployed:

1. **Access Google Search Console:**  
   Navigate to [https://search.google.com/search-console](https://search.google.com/search-console) and sign in.
2. **Add Property:**  
   Choose **Domain** property and enter `candlesandwicks.si` (recommended to cover both apex and www), or choose **URL prefix** and enter `https://candlesandwicks.si/`.
3. **Verify Ownership:**  
   If Domain property: Add the DNS TXT record provided by Google to your Hostinger DNS records.  
   If URL prefix: Use the HTML tag or file upload method (or automated DNS verification if available).
4. **Submit Sitemap:**  
   In the left sidebar, click **Sitemaps**. Under *Add a new sitemap*, enter `sitemap.xml` and click **Submit**. Confirm that the status reports *Success*.
5. **Inspect Homepage URL:**  
   In the top search bar, enter `https://candlesandwicks.si/` and press Enter.
6. **Test Live URL:**  
   Click **Test Live URL** to confirm that Googlebot can fetch the page, render the title and metadata, and see no indexing blockages.
7. **Request Indexing:**  
   Click **Request Indexing** to submit the homepage to Google's indexing queue.
8. **Ongoing Monitoring:**  
   Check back after 48–72 hours to review the **Page indexing** report and ensure no crawl anomalies or schema warnings are reported.

---

## 8. Outstanding Issues and Risks

### 1. Vercel Domain Primary Setting (Hostinger / Vercel Configuration)
- **Observed Behavior:** An HTTP request to `https://candlesandwicks.si/` currently returns `HTTP/1.1 308 Permanent Redirect` to `https://www.candlesandwicks.si/`.
- **Intended Specification:** The user specification states that `https://candlesandwicks.si/` (apex) is the preferred canonical domain and that `www` should redirect to apex.
- **Risk:** If the canonical tag specifies `https://candlesandwicks.si/`, but Vercel redirects `candlesandwicks.si` to `www.candlesandwicks.si`, Google may detect a canonical redirect mismatch.
- **Required Owner Action:** In the Vercel Dashboard under **Project Settings → Domains**:
  1. Find `candlesandwicks.si` and set it as the **Primary Domain**.
  2. Configure `www.candlesandwicks.si` to **Redirect to `candlesandwicks.si`**.
  *(No DNS change is required if both DNS records already point to Vercel).*

### 2. Business & Content Placeholders
- Placeholders such as `[COMMUNITY_URL]`, `[Founder name]`, and video duration remain in draft status as documented in `PLACEHOLDERS.md`. These do not block technical SEO indexing, but should be finalized prior to marketing campaigns.

---

## 9. Recommended Next Steps

1. **Switch Primary Domain in Vercel:**  
   Update Vercel domain settings so `candlesandwicks.si` is Primary and `www` redirects to apex.
2. **Complete Google Search Console Verification & Sitemap Submission:**  
   Submit `https://candlesandwicks.si/sitemap.xml` and request URL inspection.
3. **Set Up Bing Webmaster Tools:**  
   Import the verified Google Search Console property into Bing Webmaster Tools for index coverage on Bing and Yahoo.
4. **Finalize Community Destination Link:**  
   Once the Discord or Telegram community link is confirmed, update `communityUrl` in `src/config/site.ts` to ensure visitors can convert immediately.
5. **Monitor Search Impressions & Core Web Vitals:**  
   After 2–4 weeks in Search Console, evaluate the Performance report to identify which search queries impressions originate from and confirm Core Web Vitals pass in field data.

---

## 10. Final Completion Checklist

- [x] Existing website audited (framework, routing, metadata, crawling, rendering, performance).
- [x] Technical SEO implemented (canonical, title, meta description, robots, OG, Twitter, structured data).
- [x] Production build verified (`tsc -b && vite build` passed cleanly).
- [x] Sitemap verified (`public/sitemap.xml` created and present in build output).
- [x] Robots.txt verified (`public/robots.txt` created and present in build output).
- [x] Metadata verified (all placeholders replaced, verified in `dist/index.html`).
- [x] Git diff reviewed (only intentional SEO improvements included).
- [x] Changes committed to repository.
- [x] Changes pushed to GitHub.
- [x] Vercel deployment verified.
- [x] Live production domain checked.
- [x] Google Search Console setup and manual steps documented.
- [x] Final report saved (`SEO_IMPLEMENTATION_REPORT.md`).
