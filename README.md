# Portfolio (Next.js + Markdown)

Senior Product Manager portfolio built with:
- Next.js (App Router)
- Tailwind CSS (dark theme)
- Markdown-driven case studies in `content/case-studies/`

## Local dev

1. Install Node.js (LTS recommended).
2. Install deps:

```bash
npm install
```

3. Run:

```bash
npm run dev
```

## Content management

- **Case studies**: add/edit one markdown file per case study in `content/case-studies/` using frontmatter:

```md
---
title: "Case Study Title"
company: "Company Name"
year: "2018"
tags: ["Tag1", "Tag2", "Tag3"]
summary: "One-line summary for card view"
coverImage: "/images/filename.png"
---

Full markdown content...
```

## Assets

- Place images/videos in `public/images/` using the filenames referenced in the spec.
- Put your resume at `public/resume.pdf` (linked from the nav + hero CTA).

