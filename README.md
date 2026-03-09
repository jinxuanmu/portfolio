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

- **Case studies**: add/edit one markdown file per case study in `content/case-studies/`. Each file has **YAML frontmatter** at the top, then **Markdown body** (headings, paragraphs, and images where you want them).

```md
---
title: "Case Study Title"
company: "Company Name"
year: "2018"
tags: ["Tag1", "Tag2", "Tag3"]
summary: "One-line summary for card view"
coverImage: "/images/filename.png"
thumbnailId: "zodiac"
---

## Overview
Your content here. Place images in the body with Markdown, e.g.:

![Screenshot](/images/case-studies/your-slug/screen-1.png)

More sections and images as needed...
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

### Adding and Placing Images in a Case Study

Images are **placed directly in the Markdown body** where you want them to appear. Use standard Markdown image syntax so you control the order of text and images (e.g. lead with key info, then add screenshots where they matter).

**Syntax (in the `.md` content, not in frontmatter):**

```md
## Overview
Your opening paragraph here...

![Short description for accessibility](/images/case-studies/your-slug/screen-feed.png)

More text after the image. You can insert as many images as you need, in any order.
```

- Paths are from the site root: `/images/case-studies/<project-slug>/filename.png`
- Put each image on its own line (optional blank line before/after) for clearer reading.
- Alt text (in `![alt text](url)`) is used for accessibility; keep it short and descriptive.

**Frontmatter:** The optional `images:` array in frontmatter is no longer used for layout. You can remove it or leave it; the case study page only shows images that appear in the Markdown body.
