import type { Technology } from "../types/technology";
import "./TechnologyCard.css";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">
      <div className="technology-card-top">
        <img
          className="technology-icon"
          src={technology.icon}
          alt={technology.name}
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h2 className="technology-name">
        {technology.name}
      </h2>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="technology-chip">
          {technology.category}
        </span>

        <span className="technology-chip">
          {technology.difficulty}
        </span>

        <span className="technology-rating">
          ⭐ {technology.rating}
        </span>
      </div>

      <div className="technology-card-bottom">
        <button
          className="add-stack-btn"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;