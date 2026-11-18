import RecognitionIcon from "./RecognitionIcon";
import "./experience.css";

export default function ExperienceDisclosure({ label = "Click for more", children, className = "" }) {
  return (
    <details className={`experience-disclosure ${className}`}>
      <summary className="experience-action">
        <span className="min-w-0">{label}</span>
        <RecognitionIcon name="chevron" className="experience-disclosure-icon" />
      </summary>
      <div className="mt-4 min-w-0">{children}</div>
    </details>
  );
}
