import { footerAboutParagraphs, siteConfig, socialLinks } from "@/data/site";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/Button";
import { letsTalkCtaClassName } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full">
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

      <section className="relative flex w-full justify-center px-6 py-16 lg:py-20">
        <section className="z-40 flex w-5/6 max-w-[560px] rotate-[7deg] flex-col gap-6 rounded-[44px] border-4 border-white/15 bg-[#050505] p-6 xl:p-12">
          <Avatar size="lg" />
          <div className="text-base text-white xl:text-xl">
            {footerAboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 font-inter-tight leading-[1.4em] last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <Button
              variant="whiteCta"
              showLetsTalkIcon
              className={letsTalkCtaClassName}
            >
              Let&apos;s talk
            </Button>
          </a>
        </section>
      </section>
    </footer>
  );
}
