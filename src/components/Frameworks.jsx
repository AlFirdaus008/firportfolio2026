import { OrbitingCircles } from "./OrbitingCircles";
import { useMediaQuery } from "react-responsive";

export function Frameworks() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const innerSkills = [
    "python",
    "sql",
    "kaggle",
    "git",
    "javascript",
    "visualstudiocode",
    "html5",
    "css3",
    "figma",
  ];

  const outerSkills = [
    "pandas",
    "tensorflow",
    "tableau",
    "react",
    "tailwindcss",
    "threejs",
    "vitejs",
    "illustrator",
    "aftereffects",
    "premiere",
    "photoshop",
    "numpy",
    "microsoft",
    "jupyter",
  ];

  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles
        className="border-none bg-transparent"
        radius={isMobile ? 50 : 90}
        duration={20}
        iconSize={isMobile ? 20 : 25}
      >
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        radius={isMobile ? 100 : 190}
        duration={35}
        iconSize={isMobile ? 30 : 50}
        reverse
      >
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
