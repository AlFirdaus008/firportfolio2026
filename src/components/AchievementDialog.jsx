import { useEffect, useRef } from "react";
import RecognitionIcon from "./RecognitionIcon";

export default function AchievementDialog({ achievement, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="achievement-dialog-title"
      className="achievement-dialog"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy text-white">
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="text-sm text-sand">{achievement.award} · {achievement.year}</p>
            <h3 id="achievement-dialog-title" className="mt-1 text-xl font-bold">{achievement.title}</h3>
          </div>
          <button type="button" autoFocus onClick={onClose} aria-label="Close certificate" className="recognition-focus shrink-0 rounded-full bg-white/5 p-3 text-neutral-300 transition hover:bg-white/10 hover:text-white">
            <RecognitionIcon name="close" />
          </button>
        </div>
        <div className="bg-midnight p-2 sm:p-4">
          <img src={achievement.image} alt={`${achievement.award} certificate for ${achievement.title}`} className="max-h-[60dvh] w-full object-contain" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
          <p className="text-sm text-neutral-400">{achievement.organizer}</p>
          <a href={achievement.image} target="_blank" rel="noreferrer" className="recognition-focus inline-flex items-center gap-2 rounded-lg text-sm text-sand hover:text-white">Open original <RecognitionIcon className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </dialog>
  );
}
