import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

export type CaseStudyFrontmatter = {
  title: string;
  company: string;
  year: string;
  tags: string[];
  summary: string;
  coverImage: string;
};

export type CaseStudy = CaseStudyFrontmatter & {
  slug: string;
  contentHtml: string;
};

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

const CASE_STUDY_ORDER = [
  "zodiac-check-in",
  "birthday-gift",
  "holiday-events",
  "meme-suggestions",
  "content-ecosystem",
  "tencent-animation"
];

export function getAllCaseStudyFrontmatter(): Array<CaseStudyFrontmatter & { slug: string }> {
  const slugs = getCaseStudySlugs();
  const all = slugs.map((slug) => {
    const file = fs.readFileSync(path.join(CASE_STUDIES_DIR, `${slug}.md`), "utf8");
    const parsed = matter(file);
    return { slug, ...(parsed.data as CaseStudyFrontmatter) };
  });

  return all.sort((a, b) => {
    const i = CASE_STUDY_ORDER.indexOf(a.slug);
    const j = CASE_STUDY_ORDER.indexOf(b.slug);
    return (i === -1 ? 999 : i) - (j === -1 ? 999 : j);
  });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const parsed = matter(file);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["heading-anchor"] }
    })
    .use(rehypeStringify)
    .process(parsed.content);

  return {
    slug,
    ...(parsed.data as CaseStudyFrontmatter),
    contentHtml: String(processed)
  };
}

