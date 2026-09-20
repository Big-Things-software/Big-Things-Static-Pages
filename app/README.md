# App Directory Structure

Next.js App Router layout for the Big Things website. Data sources are noted per route — swap the TODO stubs for real clients when ready.

## Root

| File | Purpose |
|---|---|
| `layout.tsx` | Root layout — wraps every route (nav, footer, global providers). |
| `page.tsx` | Home page (`/`). |
| `globals.css` | Global styles. |

## `about/` — static, multi-page

| File | Route | Purpose |
|---|---|---|
| `layout.tsx` | — | Shared layout for all `/about/*` routes; renders the subnav (Overview / Team / History). |
| `page.tsx` | `/about` | Mission overview. |
| `team/page.tsx` | `/about/team` | Team/officer bios. Currently static — wire to CMS if bios move there. |
| `history/page.tsx` | `/about/history` | Org history/timeline. |

## `events/` — CMS-driven

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/events` | Lists events. `getEvents()` is a stub — replace with a real CMS query (e.g. Sanity). |
| `[slug]/page.tsx` | `/events/[slug]` | Single event detail, fetched by slug. |

## `donate/`, `contact/` — static, single page

| File | Route | Purpose |
|---|---|---|
| `donate/page.tsx` | `/donate` | Donation info/CTA. Add payment provider integration here (Stripe, etc.). |
| `contact/page.tsx` | `/contact` | Contact form. Currently a plain `<form>` — needs an action/API route to actually submit. |

## `projects/` — API-driven, search-engine style

The most advanced section. Structured so filtered/searched results are linkable.

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/projects` | Search/browse index. Reads `?q=` from `searchParams` and calls `searchProjects()` — replace with the Big Things API client once it exists. |
| `[slug]/page.tsx` | `/projects/[slug]` | Single project detail (funding status, repo links, etc.). |
| `category/[category]/page.tsx` | `/projects/category/[category]` | Filtered view by category, e.g. `/projects/category/embedded`. Kept as its own route (rather than just a query param) so filtered results are shareable/bookmarkable. |

## `partners/` — CMS-driven

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/partners` | Lists partner orgs/sponsors from the CMS. No detail subpage yet — add `partners/[slug]/page.tsx` if partners need one later. |

## `blog/` — CMS-driven

| File | Route | Purpose |
|---|---|---|
| `page.tsx` | `/blog` | Post index from the CMS. |
| `[slug]/page.tsx` | `/blog/[slug]` | Single post, fetched by slug. |

## Conventions used throughout

- Every CMS/API-backed page has a stub fetch function at the top (e.g. `getEvents()`, `searchProjects()`) with a commented-out real query. Replace the stub body, not the component.
- Dynamic routes use `[slug]` for CMS content and `[category]` for the projects filter — keep this naming if you add more dynamic segments, so it's obvious at a glance what a folder expects.
- No `loading.tsx` / `error.tsx` files yet — add them per-route once real data fetching is wired up and you know what states need handling.
