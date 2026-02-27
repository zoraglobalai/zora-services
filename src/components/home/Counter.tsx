import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  startFrom?: number;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "", startFrom = 0 }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(startFrom);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();
    let animationId = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = startFrom + progress * (target - startFrom);
      setCount(value);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInView, startFrom, target]);

  return (
    <span ref={ref}>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

export default Counter;
