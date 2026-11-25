# App Directory Structure

Next.js App Router layout for the Big Things website. The sitemap (`sitemap.ts`) lists the canonical route set; dynamic routes (`/hub/[slug]`, `/hub/discover/[slug]`) use stub fetchers that should be wired to the real data sources when ready.

## Root

| File | Route | Purpose |
|---|---|---|
| `layout.tsx` | — | Root layout — wraps every route (nav, footer, global providers). |
| `page.tsx` | `/` | Home page. |
| `globals.css` | — | Global styles. |
| `sitemap.ts` | — | Generates the XML sitemap for the route set below. |

## `hub/` — Master Directory & Content Hub

The central software catalog.

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/hub` | Browse All Software — the master directory index. |
| `[slug]/page.tsx` | `/hub/[slug]` | Individual Software Store Page. |
| `bundles/page.tsx` | `/hub/bundles` | Curated Software Packs. |
| `categories/page.tsx` | `/hub/categories` | Browse by Topic. |
| `new/page.tsx` | `/hub/new` | New & Noteworthy. |
| `funded/page.tsx` | `/hub/funded` | Recently Funded. |
| `discover/page.tsx` | `/hub/discover` | Blog, Spotlights & Release Notes (Sanity). |
| `discover/[slug]/page.tsx` | `/hub/discover/[slug]` | Individual Article. |
| `discover/guides/page.tsx` | `/hub/discover/guides` | Guides & Playbooks. |
| `discover/newsletter/page.tsx` | `/hub/discover/newsletter` | Newsletter & Archive. |

## `about/` — static, multi-page

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/about` | Our Mission. |
| `team/page.tsx` | `/about/team` | Team. |
| `transparency/page.tsx` | `/about/transparency` | Transparency & Financials. |
| `partners/page.tsx` | `/about/partners` | Partners. |
| `press/page.tsx` | `/about/press` | Press Kit. |

## `support/` — static, multi-page

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/support` | Support index. |
| `faq/page.tsx` | `/support/faq` | FAQ. |
| `builders/page.tsx` | `/support/builders` | For Builders. |
| `communities/page.tsx` | `/support/communities` | For Communities. |
| `contact/page.tsx` | `/support/contact` | Contact. |

## `donate/` — static, single page

| File | Route | Purpose |
|---|---|---|
| `donate/page.tsx` | `/donate` | Support the Mission. Add payment provider integration here (Stripe, etc.). |

## `legal/` + `privacy/`, `terms/`, `security/` — static, single pages

| File | Route | Purpose |
|---|---|---|
| `legal/page.tsx` | `/legal` | Legal notices index linking to the pages below. |
| `privacy/page.tsx` | `/privacy` | Privacy Policy. |
| `terms/page.tsx` | `/terms` | Terms of Service. |
| `security/page.tsx` | `/security` | Security policies and practices. |

## Conventions used throughout

- Dynamic routes use `[slug]` and keep names like `getSoftwareSlugs()` / `getArticleSlugs()` — swap the stub bodies for real clients when the catalog ships.
- Static pages render minimal placeholder content; data-backed pages will follow the same layout conventions once wired to their sources.
