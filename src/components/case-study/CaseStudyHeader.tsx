import type { CaseStudy } from "@/data/case-studies";
import { CaseStudyMeta } from "./CaseStudyMeta";

export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <section className="flex flex-col gap-12 px-6 py-12 lg:px-12 lg:pb-20 lg:pt-32 xl:px-20 2xl:px-40">
      <div className="flex flex-col gap-2">
        <h2 className="font-inter-tight text-xl text-secondary">
          {study.category}
        </h2>
        <h1 className="text-5xl font-medium tracking-[-0.01em] text-primary md:text-7xl">
          {study.title}
        </h1>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row xl:gap-20">
        <CaseStudyMeta study={study} />

        <div className="flex flex-1 flex-col gap-8">
          <section className="flex flex-col gap-2">
            <h3 className="font-medium">Problem</h3>
            <p className="text-secondary">{study.problem}</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-medium">Solution</h3>
            <p className="text-secondary">{study.solution}</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-medium">Result</h3>
            <p className="text-secondary">{study.result}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
