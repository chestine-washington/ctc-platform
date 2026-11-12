<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Chance To Change — Next.js site

The public website for Chance To Change Supportive Services, LLC. It was restored from the
tag `nextjs-before-wordpress-redesign-2026-09-08` and then given every content, SEO and
design change made while the site ran as a WordPress theme. That theme is kept on the
`wordpress` branch.

## Scope

- **No database.** Nothing is stored. Intake uses the client's Cognito embed
  (`src/components/intake/intake-content.tsx`); the contact and employment forms are emailed
  through Resend by `src/lib/mailer.ts` (visitor gets a confirmation). Do not reintroduce Prisma, an admin dashboard,
  logins or job postings unless asked. A form that cannot send must report the failure;
  never fake a success state.
- Page copy and meta tags follow the client's SEO consultant, not the original site. Her
  wording is final: don't "restore" older headings or titles.
- Decorative step counters (`aria-hidden`, faint `text-sage/25`) fail axe colour contrast;
  the faint look was chosen over the score. Leave them.

## Structure

- `src/app/(root)/`: public pages. `layout.tsx` renders Header, GlobalCTA and Footer once;
  pages must not repeat them.
- `src/app/(root)/blog/`: index (`/blog`), topics (`/blog/category`),
  category and article pages, all generated from `content/blog/*.md` by `src/lib/blog.ts`.
  `content/blog/README.md` documents the frontmatter.
- `src/app/api/contact`, `src/app/api/employment-applications`: validate with zod, then email.
- `src/app/not-found.tsx` is the standalone site 404; `services/[slug]` and `blog/[slug]`
  have their own `not-found.tsx` with section-specific suggestions
  (`src/components/shared/not-found-view.tsx`). Unknown slugs must call `notFound()` so the
  response is a real 404.
- `src/app/sitemap.ts`, `robots.ts`, `llms.txt/route.ts`: built from page metadata, services
  and posts so they cannot drift.
- `next.config.ts`: 301s for the old WordPress slugs, the dated `/YYYY/MM/DD/slug` permalinks
  and the retired `/employment/apply`.
- `src/lib/site-data.ts`, `src/lib/services/`: content constants. `PHONE` drives every
  displayed number and tel link.
- `src/app/layout.tsx`: fonts, icons, Google Analytics and Search Console tags.
- `public/og/`: 1200x630 share cards (default plus one per service). Metadata declares
  1200x630, so a replacement must keep that size.
- `src/components/ui/`: shadcn primitives. Add new ones with `pnpm dlx shadcn@latest add`.
  Keep the transitive helpers in `src/hooks/`.

## Commands

- `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`.
- Configure mail in `.env` (see `.env.example`). Without RESEND_API_KEY the forms return an error.
