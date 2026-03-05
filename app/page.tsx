import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { StatCounter } from "@/components/StatCounter";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Footer } from "@/components/Footer";
import { getAllCaseStudyFrontmatter } from "@/lib/caseStudies";

export default function HomePage() {
  const caseStudies = getAllCaseStudyFrontmatter();

  return (
    <>
      <Navbar />

      <main id="home">
        <section className="border-b border-border py-16 sm:py-24">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="tag">Senior Product Manager</div>
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
                Consumer PM with 10+ years of experience, focused on social platforms, UGC, and
                content ecosystems.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-text/80 sm:text-lg">
                Built consumer products across China and the U.S. — from large-scale social
                platforms to AI-assisted content experiences.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#case-studies" className="btn btn-primary">
                  View Case Studies
                </a>
                <a href="/resume.pdf" className="btn btn-secondary" download>
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCounter metric="2×" label="Posting frequency · Tencent QQ Space" />
              <StatCounter metric="25%" label="Were previously silent users · Tencent" />
              <StatCounter metric="7M" label="Participants in 2-day launch · Tencent" />
              <StatCounter metric="27→43%" label="Content MAU · iHealth" />
            </div>
          </div>
        </section>

        <section id="case-studies" className="py-16 sm:py-24">
          <div className="container-page">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="tag">Case Studies</div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Selected work
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text/80 sm:text-base">
                  Deep dives into strategy, trade-offs, execution, and outcomes — across social
                  platforms, content ecosystems, and AI-assisted experiences.
                </p>
              </div>
              <Link
                className="hidden text-sm font-medium text-accent hover:brightness-110 sm:inline"
                href="/case/zodiac-check-in"
              >
                Start here →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <CaseStudyCard
                  key={cs.slug}
                  slug={cs.slug}
                  title={cs.title}
                  company={cs.company}
                  year={cs.year}
                  tags={cs.tags}
                  summary={cs.summary}
                  coverImage={cs.coverImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="side-projects" className="border-t border-border py-16 sm:py-24">
          <div className="container-page">
            <div className="tag">Side Projects</div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Built on curiosity</h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="card p-6">
                <div className="tag">AI Daily Calendar</div>
                <p className="mt-4 text-sm leading-relaxed text-text/85">
                  A personal project born from a simple question: what if, in the middle of a busy
                  day, you had one quiet moment?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text/85">
                  Every morning, subscribers received a single card in their inbox — one actionable
                  tip, one quote, one date. Built with ChatGPT and Canva. Launched and ran as a
                  self-sustaining daily newsletter. The format later inspired a similar AI-assisted
                  content initiative at iHealth.
                </p>
                <div className="mt-5 text-sm text-muted">Published on Substack</div>
              </div>

              <div className="card p-6">
                <div className="tag">Jin Next — Weekly Tech Podcast</div>
                <p className="mt-4 text-sm leading-relaxed text-text/85">
                  A weekly podcast covering 10 essential stories in tech, product, and startup
                  culture — delivered in under 10 minutes. Ran for 10 episodes across Spotify,
                  Apple Podcasts, and YouTube.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text/85">
                  Built an end-to-end AI production pipeline: ChatGPT for research and scriptwriting,
                  ElevenLabs for voice synthesis, and CapCut for audio editing and music. Zero
                  production team. Consistent weekly output.
                </p>
                <div className="mt-5 text-sm text-muted">10 episodes · Spotify · Apple Podcasts · YouTube</div>
              </div>

              <div className="card p-6">
                <div className="tag">This Portfolio</div>
                <p className="mt-4 text-sm leading-relaxed text-text/85">
                  Built this site using Claude for content strategy and copywriting, and Cursor for
                  development. An experiment in using AI as a thought partner — not just a writing
                  assistant — to structure, prioritize, and articulate 10 years of product work.
                </p>
                <div className="mt-5 text-sm text-muted">Next.js · Vercel · Markdown-driven content</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border py-16 sm:py-24">
          <div className="container-page">
            <div className="tag">About</div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">How I work</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="prose-warm">
                  <p>
                    I&apos;m a Product Manager with 10+ years of experience building consumer products
                    across China and the U.S. — from large-scale social platforms at Tencent to
                    AI-assisted content experiences at iHealth.
                  </p>
                  <p>
                    My approach to product work is strategy first, execution focused. I care about
                    building things that have long-term value — not just hitting short-term metrics.
                    The best product decisions I&apos;ve made weren&apos;t the most obvious ones. They came
                    from asking whether we were solving the right problem in the first place.
                  </p>
                  <p>
                    I moved to the U.S. to grow — professionally and personally. Coming from
                    China&apos;s mobile-first internet culture, I&apos;ve developed a unique perspective on
                    how different markets approach technology, user behavior, and product design.
                    That cross-cultural lens has shaped how I think about consumers and what they
                    actually need.
                  </p>
                  <p>
                    Outside of work, I write. This blog is how I stay connected to ideas and keep a
                    connection with the world. I also build things on the side — an AI-powered daily
                    calendar, a weekly tech podcast — not because they&apos;re on my resume, but because
                    I&apos;m genuinely curious about how AI is changing the way people create and
                    consume content.
                  </p>
                  <p>
                    When I&apos;m not at a screen, I&apos;m probably planning my next trip. I once drove
                    across South Africa for 13 days — solo itinerary, unfamiliar roads, no fixed
                    plan. That&apos;s how I like to explore.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="card p-6">
                  <div className="text-sm font-medium text-text">Focus areas</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Consumer Social",
                      "UGC Ecosystems",
                      "Engagement Loops",
                      "Viral Growth",
                      "Content Strategy",
                      "AI-assisted UX"
                    ].map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 text-sm text-muted">
                    Want the full story? Start with{" "}
                    <Link href="/case/zodiac-check-in" className="text-accent hover:underline">
                      Zodiac Check-In
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="writing" className="border-t border-border py-16 sm:py-24">
          <div className="container-page">
            <div className="tag">Writing</div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Notes & essays</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text/85 sm:text-base">
              I write about product thinking, technology, and life at the intersection of two
              internet cultures.
            </p>
            <div className="mt-7">
              <a
                className="btn btn-secondary"
                href="https://jinxuanmu.github.io"
                target="_blank"
                rel="noreferrer"
              >
                Read on GitHub →
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border py-16 sm:py-24">
          <div className="container-page">
            <div className="tag">Contact</div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Let&apos;s talk</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <a
                className="card p-6 transition hover:-translate-y-1 hover:shadow-soft"
                href="https://linkedin.com/in/jinxuanmu"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-sm font-medium text-text">LinkedIn</div>
                <div className="mt-2 text-sm text-muted">linkedin.com/in/jinxuanmu</div>
              </a>
              <div className="card p-6">
                <div className="text-sm font-medium text-text">Email</div>
                <div className="mt-2 text-sm text-muted">[your email]</div>
              </div>
              <a className="card p-6 transition hover:-translate-y-1 hover:shadow-soft" href="/resume.pdf" download>
                <div className="text-sm font-medium text-text">Resume</div>
                <div className="mt-2 text-sm text-muted">PDF download link</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

