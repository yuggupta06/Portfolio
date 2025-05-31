"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

export const HoverEffect = ({
  items,
  className = "",
}: {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Track if component is in viewport
  const [inView, setInView] = useState(false);

  // Track if animation played once
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check screen size >= md (768px)
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    // Check media query for md+
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMdUp(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMdUp(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!isMdUp) return; // only on md+

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    const element = document.getElementById("hover-effect-container");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isMdUp]);

  return (
    <div
      id="hover-effect-container"
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}
    >
      {items.map((item, idx) => (
        <motion.a
          key={idx}
          className="relative group block p-2 h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, x: 50 }}
          animate={
            inView && isMdUp
              ? { opacity: 1, x: 0, transition: { delay: idx * 0.15, duration: 0.5 } }
              : { opacity: isMdUp ? 0 : 1, x: isMdUp ? 50 : 0 }
          }

          exit={{ opacity: 0, x: 50 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="text-6xl mb-4 text-indigo-600">{item.icon}</div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </motion.a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full md:p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
