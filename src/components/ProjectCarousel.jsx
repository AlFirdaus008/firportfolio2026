import { useCallback, useEffect, useRef, useState } from "react";
import FeaturedProject from "./FeaturedProject";
import { getCarouselSnapPosition } from "../utils/carousel";

export function HorizontalCarousel({ items, renderItem, id, label, labelledBy, itemClassName = "min-w-0 flex-[0_0_88%] snap-start sm:flex-[0_0_62%] lg:flex-[0_0_42%] xl:flex-[0_0_38%]" }) {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const draggedRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ canPrevious: false, canNext: items.length > 1 });

  const stepSize = () => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return 0;
    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
    return track.firstElementChild.offsetWidth + gap;
  };

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const canPrevious = track.scrollLeft > 1;
    const canNext = track.scrollLeft + track.clientWidth < track.scrollWidth - 1;
    setPosition((current) => current.canPrevious === canPrevious && current.canNext === canNext
      ? current : { canPrevious, canNext });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    return () => observer.disconnect();
  }, [items.length, updatePosition]);

  const scrollTo = (left) => {
    trackRef.current?.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const move = (direction) => {
    const track = trackRef.current;
    if (track) scrollTo(track.scrollLeft + direction * stepSize());
  };

  const startDrag = (event) => {
    draggedRef.current = false;
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, active: false };
  };

  const drag = (event) => {
    const state = dragRef.current;
    if (!state || state.pointerId !== event.pointerId) return;
    if (event.buttons !== 1) { finishDrag(); return; }
    const distance = event.clientX - state.x;
    if (!state.active && Math.abs(distance) < 6) return;
    const track = event.currentTarget;
    if (!state.active) {
      state.active = true;
      draggedRef.current = true;
      track.setPointerCapture(event.pointerId);
      track.style.scrollSnapType = "none";
      setDragging(true);
    }
    event.preventDefault();
    track.scrollLeft = state.scrollLeft - distance;
  };

  const finishDrag = () => {
    const state = dragRef.current;
    dragRef.current = null;
    const track = trackRef.current;
    if (!state || !track) return;
    if (track.hasPointerCapture(state.pointerId)) track.releasePointerCapture(state.pointerId);
    if (state.active) {
      track.style.scrollSnapType = "";
      const step = stepSize();
      if (step) scrollTo(getCarouselSnapPosition(track.scrollLeft, step, track.scrollWidth - track.clientWidth));
      setDragging(false);
    }
  };

  const onKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      scrollTo(event.key === "Home" ? 0 : event.currentTarget.scrollWidth);
    }
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : label} className="mt-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p id={`${id}-help`} className="text-xs text-neutral-500 sm:text-sm">Swipe or drag to explore</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" aria-label={`Previous: ${label}`} aria-controls={id} disabled={!position.canPrevious} onClick={() => move(-1)} className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua disabled:cursor-default disabled:opacity-30">
            <img src="/assets/arrow-right.svg" alt="" className="size-4 rotate-180" />
          </button>
          <button type="button" aria-label={`Next: ${label}`} aria-controls={id} disabled={!position.canNext} onClick={() => move(1)} className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua disabled:cursor-default disabled:opacity-30">
            <img src="/assets/arrow-right.svg" alt="" className="size-4" />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        id={id}
        role="list"
        aria-label={label}
        aria-describedby={`${id}-help`}
        tabIndex={0}
        onScroll={updatePosition}
        onKeyDown={onKeyDown}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onPointerLeave={() => { if (!dragRef.current?.active) dragRef.current = null; }}
        onLostPointerCapture={finishDrag}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => { if (draggedRef.current && event.detail > 0) { event.preventDefault(); event.stopPropagation(); } }}
        className={`flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5 pt-2 select-none rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: "thin", scrollbarColor: "#282b4b transparent" }}
      >
        {items.map((item) => (
          <div key={item.id} role="listitem" className={itemClassName}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCarousel({ projects, onOpen }) {
  return <HorizontalCarousel items={projects} id="selected-project-carousel" label="Selected projects" labelledBy="projects-heading" renderItem={(project) => <FeaturedProject project={project} onOpen={(event) => onOpen(project, event)} />} />;
}
