import type { Technology } from "../types/technology";


interface TechnologyCardProps {
  technology: Technology;
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div>
      <img src={technology.icon} alt={technology.name} />

      <span>{technology.badge}</span>

      <h2>{technology.name}</h2>

      <p>{technology.description}</p>

      <span>{technology.category}</span>
      <span>{technology.difficulty}</span>

      <p>⭐ {technology.rating}</p>

      <button>Add to Stack</button>
    </div>
  );
}

export default TechnologyCard;