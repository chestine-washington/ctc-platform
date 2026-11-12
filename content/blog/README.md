# Blog posts

Each article is one Markdown file in this folder. The filename becomes the address:
`what-is-a-halfway-house.md` is published at `/blog/what-is-a-halfway-house`.

```markdown
---
title: "What Is a Halfway House? A Complete Guide"   # required
date: 2026-09-30                                    # required, YYYY-MM-DD; newest posts list first
excerpt: "One or two sentences."                     # card text and the article's pull quote
category: Recovery                                  # one topic; creates /blog/category/recovery
image: /blog/halfway-house.jpg                      # put the file in public/blog/
imageAlt: People receiving support in a recovery program
seoTitle: What Is a Halfway House                   # optional, used as the full <title>
metaDescription: "About 150–160 characters."        # optional, otherwise the excerpt
updated: 2026-10-12                                 # optional
draft: true                                         # optional, hides the post
---

Article body in Markdown. Use `##` for section headings (the page title is the `#`).
```

- Links inside an article open in a new tab automatically.
- The topic header's colour and icon are chosen from the category name
  (recovery, mental health, housing, family, employment, wellness, special needs).
- Optional topic descriptions go in `categories.json`, keyed by category slug:
  `{ "recovery": "Guidance on addiction recovery and sober living." }`
- Article pages show no publish date or read time, at the SEO consultant's request.
