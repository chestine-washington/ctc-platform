# Chance To Change website

Next.js site for Chance To Change Supportive Services, LLC. There is no database: intake
uses the Cognito embed, the contact and employment forms are emailed, and blog posts are
Markdown files in `content/blog/`.

## Run locally

```bash
pnpm install
cp .env.example .env   # add RESEND_API_KEY
pnpm dev               # http://localhost:3000
```

## Deploy

Any Node.js host (Vercel, a VPS, or cPanel's "Setup Node.js App"):

```bash
pnpm install
pnpm build
pnpm start             # serves on $PORT, default 3000
```

Set the variables from `.env.example` on the host. Until RESEND_API_KEY is set, the contact and
employment forms show an error instead of sending.

## Publish a blog post

Add a Markdown file to `content/blog/` (see `content/blog/README.md`), put its image in
`public/blog/`, then rebuild and redeploy.

The WordPress version of this site is kept on the `wordpress` branch.
