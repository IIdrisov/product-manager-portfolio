"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { experiences, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24"
    >
      <ul className="flex flex-col gap-3">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={exp.company}
              className="overflow-hidden rounded-3xl border-2 border-black/5 bg-white lg:rounded-4xl"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <div>
                  <h2 className="font-inter-tight text-2xl font-medium sm:text-3xl lg:text-4xl">
                    {exp.company}
                  </h2>
                  <p className="mt-1 text-base text-secondary">{exp.period}</p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 border-t border-black/5 px-6 pb-8 pt-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
                    <div>
                      <h4 className="mb-3 text-sm font-medium text-secondary">
                        Role
                      </h4>
                      <ul className="space-y-1 text-base">
                        <li>{exp.role}</li>
                        <li className="text-secondary">{exp.employment}</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-medium text-secondary">
                        Team
                      </h4>
                      <p className="text-base">{exp.team}</p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-medium text-secondary">
                        Key Projects
                      </h4>
                      <ul className="space-y-3">
                        {exp.projects.map((project) => (
                          <li key={project.name}>
                            <p className="font-medium">{project.name}</p>
                            <p className="text-base text-secondary">
                              {project.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-medium text-secondary">
                        Scope
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {exp.scope.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-black/10 px-3 py-1 text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      {exp.link !== "#" && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-base underline-offset-4 hover:underline"
                        >
                          Go to company
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 text-center text-base text-secondary">
        More details on my{" "}
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          LinkedIn profile
        </a>
        .
      </p>
    </section>
  );
}
