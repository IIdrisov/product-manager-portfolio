import Image from "next/image";
import { Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function LetsTalkIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-5 w-5 shrink-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <span className="absolute inset-0 flex translate-y-0 items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
        <Calendar className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-0">
        <span className="relative h-5 w-5 overflow-hidden rounded-full">
          <Image
            src={siteConfig.avatar}
            alt=""
            fill
            className="object-cover"
            sizes="20px"
          />
        </span>
      </span>
    </span>
  );
}
