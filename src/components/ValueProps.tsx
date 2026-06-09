"use client";

import {
  ChartNoAxesColumnIncreasing,
  Code,
  Layers,
  Lightbulb,
  Palette,
  PencilRuler,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  valuePropCategoryColors,
  valueProps,
  type ValuePropIcon,
} from "@/data/site";
import { cn } from "@/lib/utils";

type CardState = {
  x: number;
  y: number;
  rotate: number;
  zIndex: number;
};

type Bounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

type Quadrant = "tl" | "tr" | "bl" | "br";

type DragState = {
  index: number;
  startX: number;
  startY: number;
  origX: number;
  origY: number;
  currentX: number;
  currentY: number;
  samples: Array<{ x: number; y: number; t: number }>;
};

type CardMetrics = {
  containerWidth: number;
  containerHeight: number;
  cardWidth: number;
  cardHeight: number;
  bounds: Bounds;
};

const ICONS: Record<ValuePropIcon, LucideIcon> = {
  zap: Zap,
  target: Target,
  chart: ChartNoAxesColumnIncreasing,
  layers: Layers,
  code: Code,
  "pencil-ruler": PencilRuler,
  lightbulb: Lightbulb,
  palette: Palette,
  users: Users,
};

const INITIAL_LAYOUTS = [
  { x: 0.02, y: 0.04, rotate: -5 },
  { x: 0.55, y: 0.03, rotate: 8 },
  { x: 0.38, y: 0.18, rotate: -7 },
  { x: 0.05, y: 0.32, rotate: 4 },
  { x: 0.48, y: 0.35, rotate: -4 },
  { x: 0.7, y: 0.48, rotate: 6 },
  { x: 0.1, y: 0.55, rotate: -3 },
  { x: 0.35, y: 0.58, rotate: 5 },
  { x: 0.62, y: 0.12, rotate: -6 },
] as const;

const BASE_ROTATIONS: Record<Quadrant, number> = {
  tl: -8,
  tr: 8,
  bl: -6,
  br: 7,
};

const QUADRANT_ROTATION_OFFSETS = [-5, 0, 5, -3, 3, -7, 7, -2, 2];
const QUADRANT_POSITION_STAGGER = [
  { x: 0, y: 0 },
  { x: 36, y: 44 },
  { x: 72, y: 20 },
  { x: 108, y: 56 },
  { x: 48, y: 88 },
];

const OVERFLOW_RATIO = 0.5;
const FRICTION = 0.9;
const MIN_VELOCITY = 0.35;
const VELOCITY_SCALE = 2.4;
const ROTATION_LERP = 0.14;
const BOUNDS_ANIMATION_STEP = 0.07;
const SETTLE_TRANSITION = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";

function getCardWidth(containerWidth: number) {
  if (containerWidth >= 1280) return 640;
  if (containerWidth >= 768) return 400;
  return 280;
}

function getEstimatedCardHeight(containerWidth: number) {
  if (containerWidth >= 1280) return 280;
  return 220;
}

function clampPosition(x: number, y: number, bounds: Bounds) {
  return {
    x: Math.min(bounds.maxX, Math.max(bounds.minX, x)),
    y: Math.min(bounds.maxY, Math.max(bounds.minY, y)),
  };
}

function getValidBounds(
  containerWidth: number,
  containerHeight: number,
  cardWidth: number,
  cardHeight: number,
): Bounds {
  const overflowX = cardWidth * OVERFLOW_RATIO;
  const overflowY = cardHeight * OVERFLOW_RATIO;

  return {
    minX: -overflowX,
    maxX: containerWidth - cardWidth + overflowX,
    minY: -overflowY,
    maxY: containerHeight - cardHeight + overflowY,
  };
}

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3;
}

function getQuadrant(
  x: number,
  y: number,
  cardWidth: number,
  cardHeight: number,
  containerWidth: number,
  containerHeight: number,
): Quadrant {
  const centerX = x + cardWidth / 2;
  const centerY = y + cardHeight / 2;
  const isLeft = centerX < containerWidth / 2;
  const isTop = centerY < containerHeight / 2;

  if (isTop && isLeft) return "tl";
  if (isTop) return "tr";
  if (isLeft) return "bl";
  return "br";
}

function lerpRotation(current: number, target: number, factor = ROTATION_LERP) {
  return current + (target - current) * factor;
}

function getSnapTarget(
  x: number,
  y: number,
  bounds: Bounds,
  cardWidth: number,
  cardHeight: number,
  containerWidth: number,
  containerHeight: number,
) {
  const clamped = clampPosition(x, y, bounds);
  const quadrant = getQuadrant(
    clamped.x,
    clamped.y,
    cardWidth,
    cardHeight,
    containerWidth,
    containerHeight,
  );
  const isLeft = quadrant === "tl" || quadrant === "bl";
  const isTop = quadrant === "tl" || quadrant === "tr";

  const anchorX = isLeft ? bounds.minX : bounds.maxX;
  const anchorY = isTop ? bounds.minY : bounds.maxY;
  const blend = 0.35;

  const targetX = clamped.x + (anchorX - clamped.x) * blend;
  const targetY = clamped.y + (anchorY - clamped.y) * blend;

  return clampPosition(targetX, targetY, bounds);
}

function boxesOverlap(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
  margin = 48,
) {
  return !(
    a.x + a.w - margin < b.x ||
    b.x + b.w - margin < a.x ||
    a.y + a.h - margin < b.y ||
    b.y + b.h - margin < a.y
  );
}

function getQuadrantStagger(quadrant: Quadrant, slot: number) {
  const pattern = QUADRANT_POSITION_STAGGER[slot % QUADRANT_POSITION_STAGGER.length];
  const towardCenterX = quadrant === "tl" || quadrant === "bl" ? 1 : -1;
  const towardCenterY = quadrant === "tl" || quadrant === "tr" ? 1 : -1;

  return {
    x: pattern.x * towardCenterX,
    y: pattern.y * towardCenterY,
  };
}

function resolveFinalLayout(
  index: number,
  x: number,
  y: number,
  allCards: CardState[],
  metrics: CardMetrics,
) {
  const { containerWidth, containerHeight, cardWidth, cardHeight, bounds } =
    metrics;
  const snapped = getSnapTarget(
    x,
    y,
    bounds,
    cardWidth,
    cardHeight,
    containerWidth,
    containerHeight,
  );
  const quadrant = getQuadrant(
    snapped.x,
    snapped.y,
    cardWidth,
    cardHeight,
    containerWidth,
    containerHeight,
  );

  const quadrantCards = allCards
    .map((card, cardIndex) => ({ ...card, cardIndex }))
    .filter((card) => {
      if (card.cardIndex === index) return true;
      const cardQuadrant = getQuadrant(
        card.x,
        card.y,
        cardWidth,
        cardHeight,
        containerWidth,
        containerHeight,
      );
      return cardQuadrant === quadrant;
    })
    .sort((a, b) => a.zIndex - b.zIndex);

  const slot = quadrantCards.findIndex((card) => card.cardIndex === index);
  const safeSlot = slot >= 0 ? slot : 0;
  const stagger = getQuadrantStagger(quadrant, safeSlot);
  const positioned = clampPosition(
    snapped.x + stagger.x,
    snapped.y + stagger.y,
    bounds,
  );

  let rotate =
    BASE_ROTATIONS[quadrant] +
    QUADRANT_ROTATION_OFFSETS[safeSlot % QUADRANT_ROTATION_OFFSETS.length];

  const selfBox = {
    x: positioned.x,
    y: positioned.y,
    w: cardWidth,
    h: cardHeight,
  };

  for (let otherIndex = 0; otherIndex < allCards.length; otherIndex++) {
    if (otherIndex === index) continue;
    const other = allCards[otherIndex];

    const otherQuadrant = getQuadrant(
      other.x,
      other.y,
      cardWidth,
      cardHeight,
      containerWidth,
      containerHeight,
    );
    if (otherQuadrant !== quadrant) continue;

    const otherBox = {
      x: other.x,
      y: other.y,
      w: cardWidth,
      h: cardHeight,
    };

    if (boxesOverlap(selfBox, otherBox)) {
      const extraOffset =
        QUADRANT_ROTATION_OFFSETS[
          (safeSlot + otherIndex + 1) % QUADRANT_ROTATION_OFFSETS.length
        ];
      rotate = BASE_ROTATIONS[quadrant] + extraOffset;

      const push = getQuadrantStagger(quadrant, safeSlot + otherIndex + 1);
      const pushed = clampPosition(
        positioned.x + push.x * 0.5,
        positioned.y + push.y * 0.5,
        bounds,
      );
      positioned.x = pushed.x;
      positioned.y = pushed.y;
      selfBox.x = positioned.x;
      selfBox.y = positioned.y;
    }
  }

  return { x: positioned.x, y: positioned.y, rotate };
}

function getTargetRotation(
  index: number,
  x: number,
  y: number,
  allCards: CardState[],
  metrics: CardMetrics,
) {
  return resolveFinalLayout(index, x, y, allCards, metrics).rotate;
}

export function ValueProps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const cardsRef = useRef<CardState[]>([]);
  const dragRef = useRef<DragState | null>(null);
  const animationRef = useRef<number | null>(null);
  const maxZRef = useRef(valueProps.length);

  const [cards, setCards] = useState<CardState[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [settlingIndex, setSettlingIndex] = useState<number | null>(null);

  useEffect(() => {
    cardsRef.current = cards;
  }, [cards]);

  const getCardMetrics = useCallback((index: number): CardMetrics | null => {
    const container = containerRef.current;
    const cardEl = cardRefs.current[index];
    if (!container) {
      return null;
    }

    const { width: containerWidth, height: containerHeight } =
      container.getBoundingClientRect();
    const cardWidth = cardEl?.offsetWidth ?? getCardWidth(containerWidth);
    const cardHeight =
      cardEl?.offsetHeight ?? getEstimatedCardHeight(containerWidth);

    return {
      containerWidth,
      containerHeight,
      cardWidth,
      cardHeight,
      bounds: getValidBounds(
        containerWidth,
        containerHeight,
        cardWidth,
        cardHeight,
      ),
    };
  }, []);

  const updateCard = useCallback((index: number, patch: Partial<CardState>) => {
    setCards((current) => {
      const next = current.map((card, cardIndex) =>
        cardIndex === index ? { ...card, ...patch } : card,
      );
      cardsRef.current = next;
      return next;
    });
  }, []);

  const initPositions = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.getBoundingClientRect().width;
    const containerHeight = container.getBoundingClientRect().height;
    const cardWidth = getCardWidth(containerWidth);
    const cardHeight = getEstimatedCardHeight(containerWidth);
    const bounds = getValidBounds(
      containerWidth,
      containerHeight,
      cardWidth,
      cardHeight,
    );
    const metrics: CardMetrics = {
      containerWidth,
      containerHeight,
      cardWidth,
      cardHeight,
      bounds,
    };

    const initialCards = valueProps.map((_, index) => {
      const layout = INITIAL_LAYOUTS[index];
      const x = layout.x * Math.max(0, containerWidth - cardWidth);
      const y = layout.y * Math.max(0, containerHeight - cardHeight);

      return {
        x,
        y,
        rotate: layout.rotate,
        zIndex: index + 1,
      };
    });

    const resolvedCards = initialCards.map((card, index) => {
      const resolved = resolveFinalLayout(index, card.x, card.y, initialCards, metrics);
      return { ...card, ...resolved };
    });

    cardsRef.current = resolvedCards;
    setCards(resolvedCards);
    maxZRef.current = valueProps.length;
  }, []);

  useEffect(() => {
    initPositions();
    window.addEventListener("resize", initPositions);
    return () => {
      window.removeEventListener("resize", initPositions);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initPositions]);

  const bringToFront = useCallback(
    (index: number) => {
      maxZRef.current += 1;
      updateCard(index, { zIndex: maxZRef.current });
    },
    [updateCard],
  );

  const updateMotion = useCallback(
    (index: number, x: number, y: number) => {
      const metrics = getCardMetrics(index);
      if (!metrics) return;

      const current = cardsRef.current[index];
      const targetRotate = getTargetRotation(
        index,
        x,
        y,
        cardsRef.current,
        metrics,
      );
      const rotate = lerpRotation(current?.rotate ?? targetRotate, targetRotate);

      updateCard(index, { x, y, rotate });
    },
    [getCardMetrics, updateCard],
  );

  const settleCard = useCallback(
    (index: number, x: number, y: number) => {
      const metrics = getCardMetrics(index);
      if (!metrics) return;

      const clamped = clampPosition(x, y, metrics.bounds);
      const resolved = resolveFinalLayout(
        index,
        clamped.x,
        clamped.y,
        cardsRef.current,
        metrics,
      );

      setSettlingIndex(index);
      updateCard(index, resolved);

      window.setTimeout(() => {
        setSettlingIndex((current) => (current === index ? null : current));
      }, 560);
    },
    [getCardMetrics, updateCard],
  );

  const animateToPosition = useCallback(
    (
      index: number,
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      onComplete: () => void,
    ) => {
      let progress = 0;

      const step = () => {
        progress = Math.min(1, progress + BOUNDS_ANIMATION_STEP);
        const eased = easeOutCubic(progress);
        const x = fromX + (toX - fromX) * eased;
        const y = fromY + (toY - fromY) * eased;

        updateMotion(index, x, y);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
          return;
        }

        animationRef.current = null;
        onComplete();
      };

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(step);
    },
    [updateMotion],
  );

  const runInertia = useCallback(
    (
      index: number,
      startX: number,
      startY: number,
      velocityX: number,
      velocityY: number,
    ) => {
      const metrics = getCardMetrics(index);
      if (!metrics) return;

      const { bounds } = metrics;
      let x = startX;
      let y = startY;
      let vx = velocityX;
      let vy = velocityY;

      const step = () => {
        vx *= FRICTION;
        vy *= FRICTION;

        const nextX = x + vx;
        const nextY = y + vy;
        const clamped = clampPosition(nextX, nextY, bounds);

        if (clamped.x !== nextX) vx = 0;
        if (clamped.y !== nextY) vy = 0;

        x = clamped.x;
        y = clamped.y;

        updateMotion(index, x, y);

        if (Math.abs(vx) < MIN_VELOCITY && Math.abs(vy) < MIN_VELOCITY) {
          animationRef.current = null;
          settleCard(index, x, y);
          return;
        }

        animationRef.current = requestAnimationFrame(step);
      };

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(step);
    },
    [getCardMetrics, settleCard, updateMotion],
  );

  const releaseCard = useCallback(
    (
      index: number,
      x: number,
      y: number,
      velocityX: number,
      velocityY: number,
    ) => {
      const metrics = getCardMetrics(index);
      if (!metrics) return;

      const clamped = clampPosition(x, y, metrics.bounds);
      const needsBoundsCorrection =
        Math.abs(clamped.x - x) > 1 || Math.abs(clamped.y - y) > 1;

      const continueRelease = (releaseX: number, releaseY: number) => {
        const speed = Math.hypot(velocityX, velocityY);
        if (speed > MIN_VELOCITY) {
          runInertia(index, releaseX, releaseY, velocityX, velocityY);
          return;
        }

        settleCard(index, releaseX, releaseY);
      };

      if (needsBoundsCorrection) {
        animateToPosition(index, x, y, clamped.x, clamped.y, () => {
          continueRelease(clamped.x, clamped.y);
        });
        return;
      }

      continueRelease(clamped.x, clamped.y);
    },
    [animateToPosition, getCardMetrics, runInertia, settleCard],
  );

  const handlePointerDown = (
    index: number,
    event: React.PointerEvent<HTMLLIElement>,
  ) => {
    const card = cards[index];
    if (!card) return;

    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setSettlingIndex(null);

    bringToFront(index);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      index,
      startX: event.clientX,
      startY: event.clientY,
      origX: card.x,
      origY: card.y,
      currentX: card.x,
      currentY: card.y,
      samples: [{ x: event.clientX, y: event.clientY, t: performance.now() }],
    };
    setDraggingIndex(index);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLLIElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    drag.samples.push({
      x: event.clientX,
      y: event.clientY,
      t: performance.now(),
    });
    if (drag.samples.length > 6) {
      drag.samples.shift();
    }

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const nextX = drag.origX + dx;
    const nextY = drag.origY + dy;

    drag.currentX = nextX;
    drag.currentY = nextY;

    updateMotion(drag.index, nextX, nextY);
  };

  const handlePointerUp = (
    index: number,
    event: React.PointerEvent<HTMLLIElement>,
  ) => {
    const drag = dragRef.current;
    if (!drag || drag.index !== index) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
    setDraggingIndex(null);

    const samples = drag.samples;
    const first = samples[0];
    const last = samples[samples.length - 1];
    const dt = last.t - first.t;

    let velocityX = 0;
    let velocityY = 0;
    if (dt > 0) {
      velocityX = ((last.x - first.x) / dt) * 16 * VELOCITY_SCALE;
      velocityY = ((last.y - first.y) / dt) * 16 * VELOCITY_SCALE;
    }

    releaseCard(index, drag.currentX, drag.currentY, velocityX, velocityY);
  };

  return (
    <section className="h-screen w-full max-w-[1800px] p-3">
      <div ref={containerRef} className="relative h-full">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[44px] border-4 border-white/15" />
        <section
          id="value"
          aria-label="Value propositions"
          className="relative z-0 h-full overflow-hidden rounded-[44px] bg-[#050505]"
        >
          <ul className="relative h-full">
            {valueProps.map((item, index) => {
              const Icon = ICONS[item.icon];
              const card = cards[index];
              const isDragging = draggingIndex === index;
              const isSettling = settlingIndex === index;
              const isAnimating = isDragging || isSettling;

              return (
                <li
                  key={item.title}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className={cn(
                    "absolute left-0 top-0 flex w-[280px] touch-none select-none flex-col gap-6 rounded-[24px] border-2 border-white/10 bg-[#131314] p-6 pb-8 md:w-[400px] xl:w-[640px] xl:border-2 xl:p-12 xl:pb-14",
                    isDragging ? "cursor-grabbing" : "cursor-move",
                  )}
                  style={{
                    transform: `translate3d(${card?.x ?? 0}px, ${card?.y ?? 0}px, 0) rotate(${card?.rotate ?? 0}deg)`,
                    zIndex: card?.zIndex ?? index + 1,
                    transition: isSettling ? SETTLE_TRANSITION : undefined,
                    willChange: isAnimating ? "transform" : undefined,
                  }}
                  onPointerDown={(event) => handlePointerDown(index, event)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={(event) => handlePointerUp(index, event)}
                  onPointerCancel={(event) => handlePointerUp(index, event)}
                >
                  <Icon
                    className="h-6 w-6 text-white md:h-8 md:w-8 xl:h-12 xl:w-12"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="font-inter-tight text-2xl font-medium leading-7 text-white md:text-[32px] md:leading-[1.2] xl:text-4xl xl:leading-[1.1]">
                    {item.title}
                  </h3>
                  <div
                    className={cn(
                      "inline-flex h-6 w-fit items-center rounded-full px-3 py-0.5 font-sans text-sm text-white xl:h-8 xl:text-base",
                      valuePropCategoryColors[item.category],
                    )}
                  >
                    {item.category}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}
