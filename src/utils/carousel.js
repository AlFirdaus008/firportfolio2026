export const getCarouselSnapPosition = (position, step, max) => {
  const current = Math.max(0, Math.min(position, max));
  if (step <= 0) return current;
  const nearestCard = Math.min(max, Math.round(current / step) * step);
  // A wide viewport may reach the final slide before a whole card-width scroll.
  return Math.abs(max - current) < Math.abs(nearestCard - current) ? max : nearestCard;
};
