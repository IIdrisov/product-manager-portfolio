import Link from "next/link";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { Button } from "@/components/ui/Button";

export default function CaseStudyNotFound() {
  return (
    <>
      <ProjectNavigation />
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 pb-28 text-center">
        <h1 className="font-inter-tight text-5xl font-medium">Case not found</h1>
        <p className="max-w-md text-secondary">
          This project page doesn&apos;t exist. Go back to the homepage and pick a
          case from My work.
        </p>
        <Link href="/#work">
          <Button variant="primary">Back to work</Button>
        </Link>
      </main>
    </>
  );
}
