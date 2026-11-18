import { useState } from "react";

export default function ShareProjectLink({ projectPath }) {
  const [status, setStatus] = useState("");
  const [manualLink, setManualLink] = useState("");

  const copyLink = async () => {
    const url = new URL(projectPath, window.location.origin).href;
    try {
      await navigator.clipboard.writeText(url);
      setManualLink("");
      setStatus("Link copied.");
    } catch {
      setManualLink(url);
      setStatus("Copy the project link from the field below.");
    }
  };

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="button" onClick={copyLink} className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
          Copy Project Link
        </button>
        <span role="status" className="text-xs text-neutral-400">{status}</span>
      </div>
      {manualLink && <label className="mt-3 block text-sm text-neutral-400">Project link<input readOnly value={manualLink} onFocus={(event) => event.target.select()} className="mt-2 block min-h-11 w-full rounded-lg border border-white/15 bg-black/20 px-3 text-sm text-white focus-visible:outline-2 focus-visible:outline-aqua" /></label>}
    </div>
  );
}
