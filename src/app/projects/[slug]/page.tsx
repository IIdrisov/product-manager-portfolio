import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyGallery } from "@/components/case-study/CaseStudyGallery";
import { CaseStudyCta } from "@/components/case-study/CaseStudyCta";
import { Footer } from "@/components/Footer";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/data/case-studies";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case not found" };
  }

  return {
    title: `${study.title} | ${siteConfig.name}`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <ProjectNavigation />
      <main
        id="main"
        className="flex w-full flex-col items-center pb-28 font-inter-tight lg:pb-0"
      >
        <section className="z-10 w-full max-w-[1600px] p-0 lg:p-3">
          <CaseStudyHeader study={study} />
        </section>
        <CaseStudyGallery media={study.media} />
        <CaseStudyCta />
        <Footer />
      </main>
    </>
  );
}
