import Image from "next/image";
import Link from "next/link";

export function CaseStudyCard({
  slug,
  title,
  company,
  year,
  tags,
  summary,
  coverImage
}: {
  slug: string;
  title: string;
  company: string;
  year: string;
  tags: string[];
  summary: string;
  coverImage: string;
}) {
  return (
    <Link
      href={`/case/${slug}`}
      className="case-card card group overflow-hidden"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-black/20">
        <Image
          src={coverImage}
          alt={`${title} cover`}
          fill
          className="object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
        />
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

