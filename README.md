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

## Asset Management

Case study images go in `public/images/case-studies/<project-slug>/`

### Naming Convention
| Prefix | Use | Example |
|--------|-----|---------|
| `screen-` | Product screenshots | `screen-gift-modal.png` |
| `flow-` | Flow / logic diagrams | `flow-p2p-loop.png` |
| `diagram-` | Framework / architecture | `diagram-reframe.png` |
| `chart-` | Data charts | `chart-mau-growth.png` |

- Format: `.png` preferred, `.jpg` for photos
- Lowercase, words separated by `-`

### Adding Images to a Case Study
Update the `images[]` array in the corresponding frontmatter:

```yaml
images:
  - /images/case-studies/zodiac/screen-feed.png
  - /images/case-studies/zodiac/flow-viral.png
```

Images render in order. Empty array = no images shown in case study page.
