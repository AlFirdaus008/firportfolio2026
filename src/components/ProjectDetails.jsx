import { motion as Motion } from "motion/react";
import { useEffect, useRef } from "react";
import { getProjectDestination } from "../utils/projectLinks";
import ShareProjectLink from "./ShareProjectLink";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  caseStudy,
  image,
  video,
  gallery,
  galleryTitle = "Project Gallery",
  tags,
  href,
  dashboardUrl,
  links,
  category,
  closeModal,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  projectPath,
}) => {
  const modalRef = useRef(null);
  const panelRef = useRef(null);
  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [projectPath]);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key !== "Tab") return;
      const controls = [...(modalRef.current?.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), iframe, video[controls], [tabindex="0"]') || [])]
        .filter((control) => control.getClientRects().length > 0);
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === modalRef.current)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [closeModal]);
  const destination = getProjectDestination({ dashboardUrl, href, links });
  const coverImage = (
    <img
      src={image}
      alt={title}
      className="block w-full h-auto max-h-[70dvh] object-contain"
    />
  );

  const isVideo = (url) => {
    return url?.match(/\.(mp4|webm|ogg)$/i);
  };

  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const getInstagramEmbedUrl = (url) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+).*/;
    const match = url?.match(regExp);
    return match ? `https://www.instagram.com/p/${match[1]}/embed` : null;
  };

  return (
    <Motion.div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm bg-black/70 p-4 cursor-pointer"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Previous Button */}
      {hasPrev && (
        <button
          type="button"
          aria-label="Previous project"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-[60] p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg group hidden sm:block"
        >
          <img
            src="assets/arrow-right.svg"
            className="w-6 h-6 brightness-0 invert rotate-180 group-hover:-translate-x-1 transition-transform"
          />
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          type="button"
          aria-label="Next project"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-[60] p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg group hidden sm:block"
        >
          <img
            src="assets/arrow-right.svg"
            className="w-6 h-6 brightness-0 invert group-hover:translate-x-1 transition-transform"
          />
        </button>
      )}

      <Motion.div
        ref={panelRef}
        className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto border shadow-2xl rounded-2xl bg-[#161a31] border-white/10 scrollbar-hide cursor-default"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close project details"
          onClick={closeModal}
          className="sticky top-4 right-4 z-50 float-right min-h-11 min-w-11 p-2 ml-auto rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg group"
        >
          <img
            src="assets/close.svg"
            className="w-6 h-6 brightness-0 invert group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Mobile Navigation (Visible only on small screens) */}
        <div className="clear-both flex justify-between items-center gap-3 px-4 py-3 sm:hidden">
          {hasPrev ? (
            <button
              type="button"
              aria-label="Previous project"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm"
            >
              <img
                src="assets/arrow-right.svg"
                className="w-5 h-5 brightness-0 invert rotate-180"
              />
              Previous
            </button>
          ) : (
            <div />
          )}
          {hasNext ? (
            <button
              type="button"
              aria-label="Next project"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm"
            >
              Next
              <img
                src="assets/arrow-right.svg"
                className="w-5 h-5 brightness-0 invert"
              />
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* Hero Media (YouTube / Video / Instagram / Image) */}
        <div className={`w-full bg-black flex items-center justify-center overflow-hidden rounded-t-2xl ${video ? "aspect-video" : ""}`}>
          {video ? (
            getYouTubeEmbedUrl(video) ? (
              <iframe
                width="100%"
                height="100%"
                src={getYouTubeEmbedUrl(video)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : getInstagramEmbedUrl(video) ? (
              <iframe
                width="100%"
                height="100%"
                src={getInstagramEmbedUrl(video)}
                title="Instagram Embed"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                className="w-full h-full bg-white"
              ></iframe>
            ) : (
              <video
                src={video}
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-contain"
              />
            )
          ) : destination ? (
            <a
              href={destination.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${destination.label}: ${title} (opens in a new tab)`}
              title={destination.label}
              className="group relative block w-full focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-aqua"
            >
              {coverImage}
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-midnight/90 px-3 py-2 text-xs text-white backdrop-blur-sm sm:bottom-4 sm:right-4 sm:text-sm">
                {destination.label}
                <img src="/assets/arrow-up.svg" alt="" className="size-3 rotate-45" />
              </span>
            </a>
          ) : coverImage}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <h2 id="project-detail-title" className="break-words text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            {projectPath && <ShareProjectLink key={projectPath} projectPath={projectPath} />}

            <p className="font-medium text-neutral-300 leading-relaxed text-lg">
              {description}
            </p>

            <div className="space-y-6">
              {caseStudy ? caseStudy.map((section) => (
                <section key={section.heading}>
                  <h3 className="mb-2 text-base font-semibold text-white">{section.heading}</h3>
                  <p className="text-base leading-relaxed text-neutral-400">{section.text}</p>
                </section>
              )) : subDescription.map((subDesc, index) => (
                <p
                  key={index}
                  className="text-neutral-400 text-base leading-relaxed"
                >
                  {subDesc}
                </p>
              ))}
            </div>

            {/* Tech Stack & Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <div key={tag.id} className="relative group">
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="rounded-lg size-10 object-contain p-1 bg-white/5 border border-white/10"
                    />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                {links ? (
                  links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium text-white shadow-lg border border-white/5"
                    >
                      {link.label}
                      <img
                        src="assets/arrow-up.svg"
                        className="size-4 rotate-45"
                      />
                    </a>
                  ))
                ) : (
                  href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium text-white shadow-lg border border-white/5"
                    >
                      {category === "technical"
                        ? "View GitHub"
                        : "View Project"}
                      <img
                        src="assets/arrow-up.svg"
                        className="size-4 rotate-45"
                      />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {gallery && gallery.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <h6 className="text-xl font-bold text-white mb-6">
                {galleryTitle}
              </h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gallery.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden border border-white/5 bg-black/20 group h-64"
                  >
                    {getYouTubeEmbedUrl(item) ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={getYouTubeEmbedUrl(item)}
                        title={`Gallery Item ${index}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : getInstagramEmbedUrl(item) ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={getInstagramEmbedUrl(item)}
                        title={`Gallery Item Instagram ${index}`}
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        className="w-full h-full bg-white"
                      ></iframe>
                    ) : isVideo(item) ? (
                      <video
                        src={item}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={item}
                        alt={`${galleryTitle}: ${title}, photo ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default ProjectDetails;
