import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <li className="flex flex-col gap-2 border-none p-0 sm:flex-row">
        <div className="w-full shrink-0 sm:w-32">
          <h4 className="text-secondary">{label}</h4>
        </div>
        <div className="w-full">{children}</div>
      </li>
      <div className="h-px w-full shrink-0 bg-border last:hidden" />
    </>
  );
}

export function CaseStudyMeta({ study }: { study: CaseStudy }) {
  return (
    <section className="h-fit rounded-[40px] bg-surface px-6 pb-8 pt-8 text-base xl:px-10 xl:py-10">
      <ul className="flex flex-col gap-4">
        <MetaRow label="Role">
          <ul>
            {study.role.map((item) => (
              <li key={item} className="border-none p-0">
                {item}
              </li>
            ))}
          </ul>
        </MetaRow>

        <MetaRow label="Team">
          <p>{study.team}</p>
        </MetaRow>

        <MetaRow label="Scope">
          <ul className="flex w-full flex-col gap-2 pr-0 md:grid md:grid-cols-2 md:gap-x-8 md:pr-12">
            {study.scope.map((item) => (
              <li key={item} className="border-none p-0">
                {item}
              </li>
            ))}
          </ul>
        </MetaRow>

        <MetaRow label="Link">
          {study.link ? (
            <Link
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
            >
              Go to company
              <ExternalLink className="h-4 w-4" />
            </Link>
          ) : (
            <span className="text-muted-foreground">No link available</span>
          )}
        </MetaRow>
      </ul>
    </section>
  );
}
