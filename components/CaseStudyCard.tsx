import Link from "next/link";
import { CaseStudyThumbnail } from "@/components/CaseStudyThumbnail";

export function CaseStudyCard({
  slug,
  title,
  company,
  year,
  tags,
  summary,
  thumbnailId
}: {
  slug: string;
  title: string;
  company: string;
  year: string;
  tags: string[];
  summary: string;
  thumbnailId: string;
}) {
  return (
    <Link
      href={`/case/${slug}`}
      className="case-card card group overflow-hidden"
    >
      <div className="w-full overflow-hidden border-b border-border">
        <CaseStudyThumbnail id={thumbnailId} />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag">
            {company} · {year}
          </span>
          {tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text/80">{summary}</p>

        <div className="mt-5 text-sm font-medium text-accent">
          Read case study →
        </div>
      </div>
    </Link>
  );
}

