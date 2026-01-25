import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  video,
  gallery,
  tags,
  href,
  closeModal,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm bg-black/70 p-4 cursor-pointer"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Previous Button */}
      {hasPrev && (
        <button
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

      <motion.div
        className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto border shadow-2xl rounded-2xl bg-[#161a31] border-white/10 scrollbar-hide cursor-default"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="sticky top-4 right-4 z-50 float-right p-2 ml-auto rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg group"
        >
          <img
            src="assets/close.svg"
            className="w-6 h-6 brightness-0 invert group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Mobile Navigation (Visible only on small screens) */}
        <div className="flex justify-between items-center px-4 py-2 sm:hidden absolute top-1/2 w-full -translate-y-1/2 pointer-events-none">
          {hasPrev ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="p-2 rounded-full bg-black/50 border border-white/10 pointer-events-auto"
            >
              <img
                src="assets/arrow-right.svg"
                className="w-5 h-5 brightness-0 invert rotate-180"
              />
            </button>
          ) : (
            <div />
          )}
          {hasNext ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="p-2 rounded-full bg-black/50 border border-white/10 pointer-events-auto"
            >
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
        <div className="w-full bg-black aspect-video flex items-center justify-center overflow-hidden rounded-t-2xl">
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
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <h5 className="text-3xl font-bold text-white">{title}</h5>

            <p className="font-medium text-neutral-300 leading-relaxed text-lg">
              {description}
            </p>

            <div className="space-y-3">
              {subDescription.map((subDesc, index) => (
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

              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium text-white shadow-lg border border-white/5"
                >
                  View Project
                  <img src="assets/arrow-up.svg" className="size-4 rotate-45" />
                </a>
              )}
            </div>
          </div>

          {/* Gallery Section */}
          {gallery && gallery.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <h6 className="text-xl font-bold text-white mb-6">
                Project Gallery
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
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
