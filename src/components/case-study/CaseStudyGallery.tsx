"use client";

import Image from "next/image";
import type { CaseStudyMedia } from "@/data/case-studies";
import { useVideoOnScroll } from "@/hooks/useVideoOnScroll";

function GalleryVideo({ src }: { src: string }) {
  const { containerRef, videoRef } = useVideoOnScroll(0.15);

  return (
    <div ref={containerRef} className="flex w-full items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
      />
    </div>
  );
}

function MediaPlaceholder({ type, index }: { type: "image" | "video"; index: number }) {
  return (
    <div className="flex aspect-[16/10] w-full max-w-2xl flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-black/10 bg-white/50">
      <span className="rounded-full border border-black/10 px-4 py-1 text-sm text-secondary">
        {type === "video" ? "Video" : "Image"} · {index + 1}
      </span>
      <p className="text-base text-muted-foreground">Media coming soon</p>
    </div>
  );
}

function GalleryItem({ media, index }: { media: CaseStudyMedia; index: number }) {
  return (
    <li className="flex items-center justify-center overflow-hidden rounded-[40px] border-none bg-surface p-8 lg:p-20">
      <div className="relative flex h-full w-full max-w-[90vw] items-center justify-center">
        {media.src ? (
          media.type === "video" ? (
            <GalleryVideo src={media.src} />
          ) : (
            <Image
              src={media.src}
              alt={media.alt ?? `Case study media ${index + 1}`}
              width={1880}
              height={2000}
              className="rounded-sm object-contain"
              style={{ objectFit: "contain" }}
            />
          )
        ) : (
          <MediaPlaceholder type={media.type} index={index} />
        )}
      </div>
    </li>
  );
}

export function CaseStudyGallery({ media }: { media: CaseStudyMedia[] }) {
  return (
    <section className="w-full max-w-[1800px] p-3">
      <ul className="flex flex-col gap-4">
        {media.map((item, index) => (
          <GalleryItem key={`${item.type}-${index}`} media={item} index={index} />
        ))}
      </ul>
    </section>
  );
}
