import { ArrowRight } from "lucide-react";
import { offers, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function OfferSection() {
  return (
    <section
      id="offer"
      className="w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24"
    >
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        {offers.map((offer) => (
          <li
            key={offer.title}
            className="flex flex-col rounded-3xl border-2 border-black/5 bg-[#050505] p-6 text-white sm:p-8 lg:rounded-4xl lg:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${offer.available ? "bg-[#03F172]" : "bg-red-500"}`}
              />
              <span className="text-sm text-white/60">
                {offer.available ? "Available" : "Not available"}
              </span>
            </div>

            <h2 className="font-inter-tight text-3xl font-medium sm:text-4xl">
              {offer.title}
            </h2>
            <p className="mt-3 text-base text-white/70">{offer.description}</p>

            <div className="my-8">
              <p className="font-inter-tight text-4xl font-medium sm:text-5xl">
                {offer.price}
              </p>
              <p className="mt-1 text-sm text-white/50">{offer.priceNote}</p>
            </div>

            <ul className="mb-8 space-y-2 text-base text-white/80">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button
                variant="white"
                className="group w-full justify-center sm:w-auto"
              >
                Let&apos;s talk
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
