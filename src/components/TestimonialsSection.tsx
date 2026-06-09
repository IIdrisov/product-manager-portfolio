import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24"
    >
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {testimonials.map((item) => (
          <li
            key={item.name}
            className="flex flex-col rounded-3xl border-2 border-black/5 bg-white p-6 sm:p-8 lg:rounded-4xl"
          >
            <blockquote className="flex-1 font-inter-tight text-xl font-medium leading-snug sm:text-2xl">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="mt-8 border-t border-black/5 pt-6">
              <p className="font-medium">{item.name}</p>
              <p className="text-base text-secondary">{item.role}</p>
              <p className="text-sm text-secondary">{item.note}</p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
