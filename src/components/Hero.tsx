"use client";

import { companies, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="z-10 flex w-full flex-col p-0 lg:h-screen lg:p-3">
      <div className="relative flex flex-1">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-b-4xl border-4 border-white/15 lg:rounded-4xl" />

        <header
          id="hero"
          className="hero-gradient relative flex items-center justify-center overflow-hidden rounded-b-4xl px-5 py-24 sm:px-6 sm:py-28 lg:flex-1 lg:rounded-4xl lg:p-24 xl:p-32 2xl:p-40"
        >
          <div className="hero-gradient-blobs" aria-hidden>
            <span className="hero-blob-1" />
            <span className="hero-blob-2" />
            <span className="hero-blob-3" />
          </div>
          <h1 className="relative z-20 max-w-[1080px] font-inter-tight text-3xl font-medium leading-[1.2] tracking-[-0.01em] text-white sm:text-4xl md:text-5xl lg:-mt-6 lg:text-5xl lg:leading-[1.2] xl:text-7xl xl:leading-[1.1]">
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-2 align-middle">
              <span>An</span>
              <Button
                variant="status"
                className="inline-flex shrink-0"
                type="button"
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute h-2 w-2 rounded-full opacity-75 status-ping ${siteConfig.available ? "bg-[#03F172]" : "bg-red-500"}`}
                  />
                  <span
                    className={`relative h-2 w-2 rounded-full ${siteConfig.available ? "bg-[#03F172]" : "bg-red-500"}`}
                  />
                </span>
                {siteConfig.available ? "Available for work" : "Not available"}
              </Button>
            </span>{" "}
            experienced Senior Product Manager with a bias for shipping, growth
            and measurable business impact.{" "}
            <span className="block pt-2 sm:inline sm:pt-0">
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex align-middle"
              >
                <Button variant="white" className="px-4" showLetsTalkIcon>
                  Let&apos;s talk
                </Button>
              </a>{" "}
              about your product.
            </span>
          </h1>
        </header>
      </div>

      <section className="flex h-auto flex-col items-center justify-center gap-4 px-6 py-8 text-sm text-secondary sm:gap-6 lg:h-28 lg:flex-row">
        <span className="text-center lg:text-left">I worked with the teams at:</span>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {companies.map((name) => (
            <span
              key={name}
              className="font-inter-tight text-base font-medium text-primary/70 sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
