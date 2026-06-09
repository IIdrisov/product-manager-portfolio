import { ArrowRight } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="w-full border-t border-black/5">
      <section className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:gap-5 lg:py-24">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border-2 border-black/5 p-6 transition-colors hover:bg-muted/50 sm:p-8 lg:rounded-4xl"
          >
            <p className="text-sm text-secondary">{link.stat}</p>
            <h3 className="mt-2 font-inter-tight text-2xl font-medium">
              {link.name}
            </h3>
            <p className="mt-1 text-base text-secondary">{link.description}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-8 px-4 pb-24 sm:px-6 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <Avatar size="lg" />
          <p className="mt-4 text-base leading-relaxed text-secondary">
            Hi, I&apos;m {siteConfig.name}. 6+ years designing fintech, crypto and
            consumer products. I don&apos;t like overcomplicating, long shipping
            cycles, or weak UX. Biased toward speed, quality, and measurable
            impact.
          </p>
        </div>

        <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="group">
            Let&apos;s talk
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </section>

      <p className="border-t border-black/5 py-6 text-center text-sm text-secondary">
        Built with Next.js + Tailwind. Not Framer.
      </p>
    </footer>
  );
}
