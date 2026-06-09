import { useEffect, useRef } from "react";

function prepareMobileVideo(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
}

function playWhenReady(video: HTMLVideoElement) {
  prepareMobileVideo(video);

  const attemptPlay = () => {
    void video.play().catch(() => {});
  };

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    attemptPlay();
    return;
  }

  const onCanPlay = () => {
    video.removeEventListener("canplay", onCanPlay);
    attemptPlay();
  };

  video.addEventListener("canplay", onCanPlay);
  video.load();
}

export function useVideoOnScroll(threshold = 0.1) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    prepareMobileVideo(video);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playWhenReady(video);
        } else {
          video.pause();
        }
      },
      {
        threshold: [0, threshold, 0.25],
        rootMargin: "0px",
      },
    );

    observer.observe(container);

    const unlockOnInteraction = () => {
      const rect = container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        playWhenReady(video);
      }
    };

    document.addEventListener("touchstart", unlockOnInteraction, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("touchstart", unlockOnInteraction);
      video.pause();
    };
  }, [threshold]);

  return { containerRef, videoRef };
}
