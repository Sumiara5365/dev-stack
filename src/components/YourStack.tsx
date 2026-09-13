import type { Technology } from "../types/technology";
import "./YourStack.css";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-header">
        <h2>Your Stack</h2>
        <p>{stack.length} Technology Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
          <span>Add technologies to build your stack.</span>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="stack-item-icon"
                />

                <div className="stack-item-info">
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>

                <button
                  className="remove-stack-btn"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;