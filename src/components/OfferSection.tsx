import { offers, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn, letsTalkCtaClassName } from "@/lib/utils";

function OfferStatus({
  available,
  theme,
}: {
  available: boolean;
  theme: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex h-6 w-fit items-center gap-2 rounded-full px-3 py-0.5 text-sm xl:h-8 xl:text-base",
        theme === "light"
          ? "border border-primary/10 bg-white text-primary"
          : "border border-white bg-transparent text-white",
      )}
    >
      <span className="relative flex h-2 w-2">
        {available && (
          <span
            className={cn(
              "absolute h-2 w-2 rounded-full opacity-75 animate-ping",
              available ? "bg-[#03F172]" : "bg-red-500",
            )}
          />
        )}
        <span
          className={cn(
            "relative h-2 w-2 rounded-full",
            available ? "bg-[#03F172]" : "bg-red-500",
          )}
        />
      </span>
      {available ? "Available" : "Not available"}
    </div>
  );
}

export function OfferSection() {
  return (
    <section
      id="offer"
      className="grid w-full max-w-[2000px] grid-cols-1 gap-6 p-0 px-3 py-12 xl:px-3 xl:py-40"
    >
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {offers.map((offer) => {
          const isLight = offer.theme === "light";

          return (
            <li
              key={offer.title}
              className={cn(
                "flex flex-col gap-8 rounded-[44px] border-4 px-6 py-12 font-inter-tight text-base xl:gap-10 xl:p-16 xl:text-xl",
                isLight
                  ? "border-primary/[1%] bg-[#F4F4F7] text-primary"
                  : "border-white/15 bg-[#050505] text-white",
              )}
            >
              <div className="flex flex-col gap-4">
                <OfferStatus available={offer.available} theme={offer.theme} />
                <div className="flex flex-col gap-3">
                  <h2 className="font-inter-tight text-4xl font-medium tracking-[-0.02em] xl:text-5xl">
                    {offer.title}
                  </h2>
                  <p>{offer.description}</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end lg:gap-2">
                <h3 className="font-inter-tight text-6xl font-medium xl:text-7xl">
                  {offer.price}
                </h3>
                <span
                  className={cn(
                    "mt-2 text-base",
                    isLight ? "text-secondary" : "text-white/60",
                  )}
                >
                  {offer.priceNote}
                </span>
              </div>

              <ul
                className={cn(
                  "flex flex-col gap-3 lg:gap-4",
                  isLight ? "text-secondary" : "text-white/60",
                )}
              >
                {offer.features.map((feature, index) => (
                  <li key={feature} className="list-none p-0">
                    {index > 0 && (
                      <div
                        className={cn(
                          "mb-3 h-px w-full lg:mb-4",
                          isLight ? "bg-secondary/40" : "bg-white/20",
                        )}
                      />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-fit"
              >
                <Button
                  variant={isLight ? "primary" : "whiteCta"}
                  showLetsTalkIcon
                  className={letsTalkCtaClassName}
                >
                  Let&apos;s talk
                </Button>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
