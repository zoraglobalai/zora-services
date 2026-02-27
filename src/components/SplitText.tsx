import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type SplitType = "chars" | "words" | "lines";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: Record<string, string | number>;
  to?: Record<string, string | number>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
}

const easeMap: Record<string, [number, number, number, number]> = {
  "power3.out": [0.22, 1, 0.36, 1],
};

const splitContent = (text: string, splitType: SplitType): string[] => {
  if (splitType === "lines") return text.split("\n");
  if (splitType === "words") return text.split(" ");
  return text.split("");
};

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "left",
  onLetterAnimationComplete,
  showCallback = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  const chunks = useMemo(() => splitContent(text, splitType), [text, splitType]);
  const total = chunks.filter((chunk) => chunk !== "\n").length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (doneCount === total && total > 0 && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  }, [doneCount, total, onLetterAnimationComplete]);

  const resolvedEase = easeMap[ease] ?? [0.22, 1, 0.36, 1];

  return (
    <div ref={ref} className={className} style={{ textAlign }}>
      {chunks.map((chunk, index) => {
        if (chunk === "\n") {
          return <br key={`br-${index}`} />;
        }
        const content = chunk === " " ? "\u00A0" : chunk;
        const needsBreak = splitType === "lines" && index < chunks.length - 1;
        return (
          <React.Fragment key={`${chunk}-${index}`}>
            <motion.span
              initial={from}
              animate={inView ? to : from}
              transition={{ duration, delay: (delay / 1000) * index, ease: resolvedEase }}
              className="inline-block"
              onAnimationComplete={() => {
                if (inView) setDoneCount((v) => v + 1);
              }}
            >
              {content}
            </motion.span>
            {needsBreak ? <br /> : null}
          </React.Fragment>
        );
      })}
      {showCallback && doneCount === total ? null : null}
    </div>
  );
};

export default SplitText;
