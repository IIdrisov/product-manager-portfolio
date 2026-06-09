import { faqItems, type FaqCategory } from "@/data/site";
import { cn } from "@/lib/utils";

const badgeStyles: Record<FaqCategory, string> = {
  Offer: "bg-[#036AEF]",
  Collaboration: "bg-[#6E55FF]",
  Contact: "bg-[#029F4B]",
};

function FaqBadge({ category }: { category: FaqCategory }) {
  return (
    <div
      className={cn(
        "inline-flex h-6 w-fit items-center rounded-full px-3 py-0.5 font-sans text-sm text-white xl:h-8 xl:text-base",
        badgeStyles[category],
      )}
    >
      {category}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="w-full max-w-[1800px] p-3">
      <section
        id="faq"
        className="relative z-0 flex justify-center overflow-hidden rounded-[44px] border-4 border-primary/[1%] bg-[#F4F4F7] px-6 py-12 xl:p-32 xl:py-40"
      >
        <ul className="max-w-[2000px] columns-1 gap-6 lg:columns-2">
          {faqItems.map((item) => (
            <li key={item.question} className="mb-6 break-inside-avoid border-none p-0">
              <div className="flex flex-col gap-4 rounded-[24px] border-2 border-primary/5 bg-white p-6 pb-8 xl:border-4 xl:p-12 xl:pb-14">
                <FaqBadge category={item.category} />
                <h3 className="font-inter-tight text-xl font-medium leading-[1.2em] text-primary xl:text-4xl">
                  {item.question}
                </h3>
                <p className="font-inter-tight text-base leading-[1.4em] text-secondary xl:text-xl">
                  {item.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
