"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";
import { useVideoOnScroll } from "@/hooks/useVideoOnScroll";
import { cn } from "@/lib/utils";

function ProjectVideo({ src }: { src: string }) {
  const { containerRef, videoRef } = useVideoOnScroll(0.1);

  return (
    <div ref={containerRef} className="h-full w-full">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none h-full w-full object-cover"
      />
    </div>
  );
}

export function WorkSection() {
  return (
    <section
      id="work"
      className="w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24"
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {projects.map((project, index) => (
          <li key={project.title}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative block overflow-hidden rounded-3xl border-2 border-black/5 bg-muted transition-transform duration-300 hover:scale-[1.01] lg:rounded-4xl"
            >
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]",
                  !project.video && !project.image && cn("bg-gradient-to-br", project.gradient),
                )}
              >
                {project.video ? (
                  <ProjectVideo src={project.video} />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div
                    className={cn("h-full w-full bg-gradient-to-br", project.gradient)}
                  />
                )}
              </div>

              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-end p-6 sm:p-8",
                  project.imageOverlay === "light"
                    ? "bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                    : "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                )}
              >
                <h2 className="font-inter-tight text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-base text-white/70">{project.subtitle}</p>
              </div>

              <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
