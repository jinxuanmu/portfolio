import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/caseStudies";

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const isTencentAnimation = slug === "tencent-animation";

  return (
    <>
      <Navbar />

      <main className="pb-8">
        <section className="border-b border-border py-10">
          <div className="container-page">
            <div className="flex flex-col gap-6">
              <Link href="/#case-studies" className="text-sm text-muted hover:text-text">
                ← Back to case studies
              </Link>

              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">
                  {cs.company} · {cs.year}
                </span>
                {cs.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl">
                {cs.title}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-text/80">{cs.summary}</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container-page">
            {isTencentAnimation ? (
              <div className="mt-10 card overflow-hidden">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-medium text-text">Campaign video</div>
                  <div className="mt-1 text-sm text-muted">Embedded from Bilibili</div>
                </div>
                <div className="aspect-video w-full bg-black">
                  <iframe
                    title="Tencent Animation campaign video"
                    src="https://player.bilibili.com/player.html?bvid=BV1GW411J7t6&autoplay=0"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            ) : null}

            <article
              className="prose-warm mt-10"
              dangerouslySetInnerHTML={{ __html: cs.contentHtml }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

