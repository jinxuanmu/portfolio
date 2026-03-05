"use client";

import CountUp from "react-countup";
import { useEffect, useMemo, useRef, useState } from "react";

function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setInView(true);
      },
      { threshold: 0.35, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView } as const;
}

type ParsedMetric =
  | { kind: "static"; display: string }
  | { kind: "countup"; start: number; end: number; prefix?: string; suffix?: string };

function parseMetric(metric: string): ParsedMetric {
  const trimmed = metric.trim();

  // Examples:
  // "2×" -> end=2 suffix="×"
  // "25%" -> end=25 suffix="%"
  // "7M" -> end=7 suffix="M"
  // "27→43%" -> prefix="27→" end=43 suffix="%"
  const arrowMatch = trimmed.match(/^(\d+)\s*→\s*(\d+)\s*(%?)$/);
  if (arrowMatch) {
    return {
      kind: "countup",
      start: Number(arrowMatch[1]),
      end: Number(arrowMatch[2]),
      prefix: `${arrowMatch[1]}→`,
      suffix: arrowMatch[3] || undefined
    };
  }

  const match = trimmed.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { kind: "static", display: metric };

  const end = Number(match[1]);
  const suffix = match[2]?.trim() || undefined;
  if (Number.isFinite(end)) return { kind: "countup", start: 0, end, suffix };

  return { kind: "static", display: metric };
}

export function StatCounter({
  metric,
  label
}: {
  metric: string;
  label: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const parsed = useMemo(() => parseMetric(metric), [metric]);

  return (
    <div ref={ref} className="card p-5">
      <div className="text-3xl font-bold tracking-tight text-text">
        {parsed.kind === "countup" ? (
          <>
            {parsed.prefix ?? ""}
            {inView ? (
              <CountUp end={parsed.end} start={parsed.start} duration={1.2} />
            ) : (
              parsed.start
            )}
            {parsed.suffix ?? ""}
          </>
        ) : (
          parsed.display
        )}
      </div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

