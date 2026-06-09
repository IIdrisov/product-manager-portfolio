import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "h-10 w-10",
  md: "h-12 w-12 sm:h-16 sm:w-16",
  lg: "h-20 w-20",
};

export function Avatar({ size = "md" }: { size?: keyof typeof sizeMap }) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full border-2 border-white/10",
        sizeMap[size],
      )}
    >
      <Image
        src={siteConfig.avatar}
        alt={siteConfig.name}
        fill
        className="object-cover"
        sizes="80px"
        priority
      />
    </span>
  );
}
