"use client";

import { useEffect, useRef } from "react";
import { manifestoParagraphs } from "@/data/site";

const paragraphClassName =
  "mb-8 max-w-[1200px] font-inter-tight text-2xl leading-[1.25em] md:text-3xl lg:leading-[1.3em] xl:text-4xl";

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLElement>("[data-word]");

    const update = () => {
      const activationLine = window.innerHeight * 0.62;

      words.forEach((word) => {
        const { top, height } = word.getBoundingClientRect();
        const center = top + height / 2;
        word.classList.toggle("is-lit", center <= activationLine);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="manifesto" className="w-full max-w-[1800px] p-3" aria-label="Manifesto">
      <div className="relative h-full">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-4xl border-4 border-white/15" />
        <section className="relative flex justify-center overflow-hidden rounded-4xl bg-[#050505] p-6 py-12 text-white md:p-24 lg:p-32 xl:p-60">
          <div ref={containerRef} className="relative z-20 h-auto">
            {manifestoParagraphs.map((paragraph, index) => {
              const words = paragraph.split(" ");

              return (
                <p key={index} className={paragraphClassName}>
                  {words.map((word, wordIndex) => (
                    <span key={wordIndex} data-word className="manifesto-word">
                      {word}
                      {wordIndex < words.length - 1 ? " " : ""}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
