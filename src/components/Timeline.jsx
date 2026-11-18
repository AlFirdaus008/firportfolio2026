"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ExperienceEvidence from "./ExperienceEvidence";
import ExperienceDisclosure from "./ExperienceDisclosure";

export const Timeline = ({ data, title }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const measure = () => setHeight(element.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="mt-10" ref={containerRef}>
      <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
      <div ref={ref} className="relative pb-10">
        {data.map((item) => (
          <div
            key={`${item.title}-${item.job}`}
            className="flex justify-start pt-10 md:gap-8 md:pt-14"
          >
            <div className="sticky top-28 flex shrink-0 flex-col items-center self-start md:w-[36%] md:flex-row">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-3.75 bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="hidden flex-col gap-3 md:flex md:pl-10">
                <p className="text-sm text-sand">{item.date}</p>
                <h4 className="text-xl font-medium text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-neutral-400">{item.job}</p>
              </div>
            </div>

            <div className="relative min-w-0 flex-1 pl-9 md:pl-4">
              <div className="mb-4 text-left md:hidden">
                <p className="text-sm text-sand">{item.date}</p>
                <h4 className="mt-2 text-xl font-medium text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.job}</p>
              </div>
              {item.contents.slice(0, 2).map((content, index) => (
                <p className="mb-3 text-sm leading-relaxed text-neutral-400 md:text-base" key={index}>
                  {content}
                </p>
              ))}
              {item.supportingMaterial && <ExperienceEvidence experience={item} />}
              {!item.supportingMaterial && (item.contents.length > 2 || item.evidence || item.documentation?.length > 0) && (
                <ExperienceDisclosure className="mt-4 text-sm text-neutral-400 md:text-base">
                  {item.contents.slice(2).map((content, index) => <p className="mb-3 leading-relaxed" key={index}>{content}</p>)}
                  {item.evidence && <a href={item.evidence} target="_blank" rel="noreferrer" className="experience-action">Certificate <img src="/assets/arrow-up.svg" alt="" className="size-4 rotate-45" /><span className="sr-only"> (opens in a new tab)</span></a>}
                  {item.documentation?.length > 0 && <div className="mt-4 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
                    {item.documentation.map((image, index) => (
                      <a key={image} href={encodeURI(image)} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border border-white/10 bg-black/20 p-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
                        <img src={encodeURI(image)} alt={`${item.title}, documentation photo ${index + 1}`} loading="lazy" decoding="async" className="block h-auto max-h-64 w-full object-contain" />
                        <span className="sr-only">Open photo {index + 1} at full size in a new tab</span>
                      </a>
                    ))}
                  </div>}
                </ExperienceDisclosure>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-sand/70 via-neutral-500/30 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
