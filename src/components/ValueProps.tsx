import { valueProps } from "@/data/site";

export function ValueProps() {
  return (
    <section className="w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {valueProps.map((item) => (
          <li
            key={item.title}
            className="flex flex-col justify-between rounded-3xl border-2 border-black/5 bg-muted/50 p-6 sm:p-8 lg:rounded-4xl lg:min-h-[220px]"
          >
            <span className="mb-6 w-fit rounded-full border border-black/10 px-3 py-1 text-sm text-secondary">
              {item.category}
            </span>
            <h3 className="font-inter-tight text-xl font-medium leading-snug sm:text-2xl">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
