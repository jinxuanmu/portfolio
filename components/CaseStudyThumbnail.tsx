"use client";

const GOLD = "#c9a84c";
const GOLD_RGBA = (a: number) => `rgba(201,168,76,${a})`;

type ThumbnailConfig = {
  bg: string;
  visual:
    | "big-number"
    | "dual-metric"
    | "progress-bars"
    | "line-chart"
    | "dual-line-chart"
    | "bar-chart";
};

const thumbnailConfig: Record<string, ThumbnailConfig> = {
  zodiac: {
    bg: "radial-gradient(ellipse at 65% 35%, #1e3a5f 0%, #080e1a 65%)",
    visual: "big-number",
  },
  birthday: {
    bg: "radial-gradient(ellipse at 30% 70%, #3b2010 0%, #0e0905 65%)",
    visual: "dual-metric",
  },
  holiday: {
    bg: "radial-gradient(ellipse at 60% 40%, #0d3030 0%, #060e0e 65%)",
    visual: "progress-bars",
  },
  meme: {
    bg: "radial-gradient(ellipse at 40% 60%, #251535 0%, #0a060e 65%)",
    visual: "line-chart",
  },
  "content-ecosystem": {
    bg: "radial-gradient(ellipse at 70% 30%, #0f2a18 0%, #060e08 65%)",
    visual: "dual-line-chart",
  },
  "tencent-animation": {
    bg: "radial-gradient(ellipse at 50% 50%, #2e1f08 0%, #0e0a04 65%)",
    visual: "bar-chart",
  },
};

function FallbackThumbnail({ id }: { id: string }) {
  return (
    <div
      className="flex w-full aspect-[16/10] items-center justify-center bg-neutral-900"
      style={{ aspectRatio: "16/10" }}
    >
      <span className="font-mono text-sm text-neutral-600">{id}</span>
    </div>
  );
}

function NoiseOverlay({ id }: { id: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      style={{ mixBlendMode: "overlay" }}
      aria-hidden
    >
      <defs>
        <filter id={`noise-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves={4}
            stitchTiles="stitch"
          />
        </filter>
      </defs>
      <rect
        width="100%"
        height="100%"
        filter={`url(#noise-${id})`}
        style={{ opacity: 0.05 }}
      />
    </svg>
  );
}

function VignetteOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
      }}
      aria-hidden
    />
  );
}

function VisualZodiac() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "140px",
          fontWeight: 800,
          color: GOLD_RGBA(0.04),
          lineHeight: 1,
        }}
      >
        200K
      </span>
      <div className="relative flex flex-col items-center gap-1">
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "72px",
            fontWeight: 800,
            color: GOLD,
            opacity: 0.92,
            lineHeight: 1,
          }}
        >
          200<span style={{ fontSize: "0.6em" }}>K</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "9px",
            color: GOLD_RGBA(0.7),
            letterSpacing: "0.18em",
          }}
        >
          MONTHLY ACTIVE POSTERS
        </span>
      </div>
    </div>
  );
}

function VisualBirthday() {
  return (
    <div
      className="flex items-center justify-center gap-0"
      style={{ width: "80%", maxWidth: "100%" }}
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "42px",
            fontWeight: 800,
            color: GOLD,
            lineHeight: 1,
          }}
        >
          85<span style={{ fontSize: "24px" }}>%</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "9px",
            color: GOLD_RGBA(0.7),
            marginTop: 4,
          }}
        >
          PUSH CTR
        </span>
      </div>
      <div
        style={{
          width: 1,
          height: 36,
          backgroundColor: GOLD_RGBA(0.15),
          flexShrink: 0,
        }}
      />
      <div className="flex flex-1 flex-col items-center justify-center">
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "42px",
            fontWeight: 800,
            color: GOLD,
            lineHeight: 1,
          }}
        >
          50<span style={{ fontSize: "24px" }}>%</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "9px",
            color: GOLD_RGBA(0.7),
            marginTop: 4,
          }}
        >
          SEND RATE
        </span>
      </div>
    </div>
  );
}

function VisualHoliday() {
  const rows: { key: string; fillPct: number; value: string; muted?: boolean }[] = [
    { key: "Timeline", fillPct: 11, value: "2d" },
    { key: "Reach", fillPct: 76, value: "7M" },
    { key: "Team", fillPct: 18, value: "—", muted: true },
  ];
  return (
    <div
      className="flex flex-col justify-center gap-3"
      style={{ width: "76%", margin: "0 auto" }}
    >
      {rows.map((r) => (
        <div key={r.key} className="flex items-center gap-2">
          <span
            style={{
              width: 52,
              flexShrink: 0,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "9px",
              color: GOLD_RGBA(0.7),
            }}
          >
            {r.key}
          </span>
          <div
            style={{
              flex: 1,
              height: 5,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${r.fillPct}%`,
                height: "100%",
                borderRadius: 2,
                background: r.muted
                  ? GOLD_RGBA(0.18)
                  : `linear-gradient(90deg, ${GOLD_RGBA(0.5)}, ${GOLD_RGBA(0.85)})`,
              }}
            />
          </div>
          <span
            style={{
              width: 28,
              flexShrink: 0,
              textAlign: "right",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "9px",
              color: r.muted ? GOLD_RGBA(0.25) : GOLD,
            }}
          >
            {r.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function VisualMeme() {
  const pathD =
    "M 0 70 C 50 69 100 55 240 12";
  const areaD =
    "M 0 70 C 50 69 100 55 240 12 L 240 80 L 0 80 Z";
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <svg
        viewBox="0 0 240 80"
        className="h-16 w-full max-w-[220px]"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="meme-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={GOLD} stopOpacity={0.25} />
            <stop offset="100%" stopColor={GOLD} stopOpacity={0} />
          </linearGradient>
        </defs>
        <line
          x1={0}
          y1={70}
          x2={240}
          y2={70}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={1}
        />
        <line
          x1={0}
          y1={40}
          x2={240}
          y2={40}
          stroke="rgba(255,255,255,0.03)"
          strokeWidth={0.5}
          strokeDasharray="4 2"
        />
        <path d={areaD} fill="url(#meme-grad)" />
        <path
          d={pathD}
          fill="none"
          stroke={GOLD}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.85 }}
        />
        <circle cx={240} cy={12} r={7} fill={GOLD_RGBA(0.15)} />
        <circle cx={240} cy={12} r={3} fill={GOLD} />
      </svg>
      <div className="flex w-full max-w-[220px] justify-between px-1">
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "9px",
            color: GOLD_RGBA(0.7),
          }}
        >
          BEFORE
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "9px",
            color: GOLD_RGBA(0.7),
          }}
        >
          2M+
        </span>
      </div>
    </div>
  );
}

function VisualContentEcosystem() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ width: "80%", margin: "0 auto" }}
    >
      <div
        className="flex items-center"
        style={{
          width: "fit-content",
          margin: "0 auto",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            color: GOLD_RGBA(0.3),
            lineHeight: 1,
          }}
        >
          27<span style={{ fontSize: "18px" }}>%</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "16px",
            color: GOLD_RGBA(0.2),
          }}
        >
          →
        </span>
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            color: GOLD,
            opacity: 0.92,
            lineHeight: 1,
          }}
        >
          43<span style={{ fontSize: "18px" }}>%</span>
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: "9px",
          color: GOLD_RGBA(0.7),
          letterSpacing: "0.12em",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        MAU · 1YR · 0 NEW WRITERS
      </span>
    </div>
  );
}

function VisualTencentAnimation() {
  const heights = [17, 25, 33, 42, 51, 61, 71, 78];
  const opacities = [0.18, 0.24, 0.3, 0.38, 0.48, 0.6, 0.75, 1];
  const barWidth = 18;
  const gap = 10;
  const totalWidth = 8 * barWidth + 7 * gap;
  const startX = (220 - totalWidth) / 2;
  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 220 80" className="h-14 w-full max-w-[200px]">
        <line
          x1={0}
          y1={80}
          x2={220}
          y2={80}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={1}
        />
        <defs>
          <linearGradient id="ta-last-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={GOLD} stopOpacity={0.4} />
            <stop offset="100%" stopColor={GOLD} stopOpacity={0.9} />
          </linearGradient>
        </defs>
        {heights.map((h, i) => {
          const x = startX + i * (barWidth + gap);
          const isLast = i === 7;
          return (
            <g key={i}>
              <rect
                x={x}
                y={80 - h}
                width={barWidth}
                height={h}
                rx={1.5}
                fill={
                  isLast
                    ? "url(#ta-last-bar)"
                    : GOLD_RGBA(opacities[i]!)
                }
              />
              {isLast && (
                <text
                  x={x + barWidth / 2}
                  y={80 - h - 6}
                  textAnchor="middle"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "9px",
                    fill: GOLD_RGBA(0.7),
                  }}
                >
                  7.6M
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function CaseStudyThumbnail({ id }: { id: string }) {
  const config = thumbnailConfig[id];
  if (!config) return <FallbackThumbnail id={id} />;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: config.bg, aspectRatio: "16/10" }}
    >
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {config.visual === "big-number" && <VisualZodiac />}
        {config.visual === "dual-metric" && <VisualBirthday />}
        {config.visual === "progress-bars" && <VisualHoliday />}
        {config.visual === "line-chart" && <VisualMeme />}
        {config.visual === "dual-line-chart" && <VisualContentEcosystem />}
        {config.visual === "bar-chart" && <VisualTencentAnimation />}
      </div>
      <NoiseOverlay id={id} />
      <VignetteOverlay />
    </div>
  );
}
