import { Navbar } from "@/components/Navbar";
import { HashScrollTo } from "@/components/HashScrollTo";
import { StatCounter } from "@/components/StatCounter";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Footer } from "@/components/Footer";
import { getAllCaseStudyFrontmatter } from "@/lib/caseStudies";

export default function HomePage() {
  const caseStudies = getAllCaseStudyFrontmatter();

  return (
    <>
      <Navbar />
      <HashScrollTo />

      <main id="home" className="scroll-mt-24">
        <section>
          <div id="hero">
            <div>
              <div className="hero-label">PRODUCT MANAGER</div>
              <h1 className="hero-headline font-bold leading-tight tracking-tight text-text">
                Consumer PM focused on{" "}
                <span className="text-hero-gold">
                  social platforms, UGC, and content ecosystems
                </span>
                .
              </h1>
              <p className="mt-5 text-base leading-relaxed text-text/80 sm:text-lg">
                Built consumer products across China and the U.S. — from large-scale social
                platforms to AI-assisted content experiences.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#case-studies" className="btn-primary">
                  View Case Studies
                </a>
                <a href="/resume.pdf" className="btn-secondary" download>
                  Download Resume
                </a>
              </div>
            </div>

            <div className="stats-card">
              <div className="stat-item">
                <StatCounter metric="2×" label="Posting frequency · Tencent QQ Space" />
              </div>
              <div className="stat-item">
                <StatCounter metric="25%" label="Were previously silent users · Tencent QQ Space" />
              </div>
              <div className="stat-item">
                <StatCounter metric="7M" label="Participants in 2-day launch · Tencent Animation" />
              </div>
              <div className="stat-item">
                <StatCounter metric="27→43%" label="Content MAU · iHealth" />
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="scroll-mt-24 py-16 sm:py-24">
          <div className="container-page">
            <div>
              <div className="section-label">SELECTED WORK</div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Case Studies
              </h2>
            </div>

            <div className="case-grid mt-10">
              {caseStudies.map((cs) => (
                <CaseStudyCard
                  key={cs.slug}
                  slug={cs.slug}
                  title={cs.title}
                  company={cs.company}
                  year={cs.year}
                  tags={cs.tags}
                  summary={cs.summary}
                  thumbnailId={cs.thumbnailId}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="side-projects" className="scroll-mt-24 py-16 sm:py-24">
          <div className="container-page">
            <div className="section-label">BEYOND WORK</div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Side Projects</h2>

            <div className="projects-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="project-card">
                <div className="project-icon">📅</div>
                <div className="project-title">AI Daily Calendar</div>
                <div className="project-desc">
                  A personal project born from a simple question: what if, in the middle of a busy
                  day, you had one quiet moment? Every morning, subscribers received a single card
                  in their inbox — one actionable tip, one quote, one date. Built with ChatGPT and
                  Canva. Launched and ran as a self-sustaining daily newsletter. The format later
                  inspired a similar AI-assisted content initiative at iHealth.
                </div>
                <div className="project-meta">Published on Substack</div>
                <div className="project-links">
                  <a
                    className="project-link"
                    href="https://substack.com/@jinxuanmu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Substack →
                  </a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">🎙</div>
                <div className="project-title">Jin Next — Weekly Tech Podcast</div>
                <div className="project-desc">
                  A weekly podcast covering 10 essential stories in tech, product, and startup
                  culture — delivered in under 10 minutes. Ran for 10 episodes across Spotify,
                  Apple Podcasts, and YouTube. Built an end-to-end AI production pipeline:
                  ChatGPT for research and scriptwriting, ElevenLabs for voice synthesis, and
                  CapCut for audio editing and music. Zero production team. Consistent weekly output.
                </div>
                <div className="project-meta">10 episodes · Spotify · Apple Podcasts · YouTube</div>
                <div className="project-links">
                  <a
                    className="project-link"
                    href="https://podcasts.apple.com/us/podcast/jin-next/id1788849776"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Listen on Apple Podcasts →
                  </a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">⚡</div>
                <div className="project-title">This Portfolio</div>
                <div className="project-desc">
                  Built this site using Claude for content strategy and copywriting, and Cursor for
                  development. An experiment in using AI as a thought partner — not just a writing
                  assistant — to structure, prioritize, and articulate 10 years of product work.
                </div>
                <div className="project-meta">Next.js · Vercel · Markdown-driven content</div>
                <div className="project-links">
                  <a
                    className="project-link"
                    href="https://github.com/jinxuanmu/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16 sm:py-24">
          <div className="container-page">
            <div className="section-label">ABOUT</div>
            <div className="about-grid mt-8">
              <div className="about-left">
                <div className="about-avatar">JM</div>
                <div className="about-name">Jinxuan Mu</div>
                <div className="about-role">Product Manager</div>
                <a
                  className="about-link"
                  href="https://linkedin.com/in/jinxuanmu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="about-link-icon">in</span>
                  LinkedIn →
                </a>
                <a
                  className="about-link"
                  href="https://jinxuanmu.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="about-link-icon">↗</span>
                  Blog →
                </a>
                <div className="about-link" style={{ cursor: "default" }}>
                  <span className="about-link-icon">@</span>
                  jinxuanmu1028@gmail.com
                </div>
              </div>
              <div className="about-body">
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
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

