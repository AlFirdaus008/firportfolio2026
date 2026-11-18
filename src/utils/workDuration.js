const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatWorkPeriod(startMonth) {
  const [year, month] = startMonth.split("-").map(Number);
  return `${monthNames[month - 1]} ${year} – Present`;
}

// Only months are supplied, so calculate elapsed calendar months in Jakarta.
export function getWorkDuration(startMonth, now = new Date()) {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Jakarta", year: "numeric", month: "numeric",
  }).formatToParts(now);
  const current = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const [year, month] = startMonth.split("-").map(Number);
  const total = Math.max(0, (Number(current.year) - year) * 12 + Number(current.month) - month);
  if (total === 0) return "Less than a month";
  const years = Math.floor(total / 12);
  const months = total % 12;
  return [years && `${years} year${years === 1 ? "" : "s"}`, months && `${months} month${months === 1 ? "" : "s"}`].filter(Boolean).join(" ");
}
