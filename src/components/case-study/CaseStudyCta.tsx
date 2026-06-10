import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function CaseStudyCta() {
  return (
    <section className="flex w-full max-w-[1600px] flex-col items-center gap-8 px-6 py-24 text-center lg:py-32">
      {siteConfig.available && (
        <span className="flex items-center gap-2 text-base text-secondary">
          <span className="h-2 w-2 rounded-full bg-[#03F172]" />
          Available for work
        </span>
      )}
      <h2 className="max-w-3xl font-inter-tight text-4xl font-medium tracking-[-0.01em] md:text-6xl lg:text-7xl">
        Let&apos;s build the next one together
      </h2>
      <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
        <Button variant="primary" className="h-14 px-8 text-lg" showLetsTalkIcon>
          Let&apos;s talk
        </Button>
      </a>
    </section>
  );
}
