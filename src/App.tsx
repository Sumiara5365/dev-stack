import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologyCard from "./components/TechnologyCard";
import type { Technology } from "./types/technology";
import YourStack from "./components/YourStack";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

const addToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack((previousStack) => [
    ...previousStack,
    technology,
  ]);

  toast.success(`${technology.name} added to your stack!`);
};

  const removeFromStack = (id: string) => {
  const technology = stack.find(
    (item) => item.id === id
  );

  setStack((previousStack) =>
    previousStack.filter((item) => item.id !== id)
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack.`);
  }
};

const removeAll = () => {
  if (stack.length === 0) {
    return;
  }

  setStack([]);

  toast.info("All technologies removed from your stack.");
};

  return (
    <>
      <Navbar />
      <Banner />

      <main className="technology-container">
        <div className="section-heading">
          <h1>
            Explore The <span>Technologies</span>
          </h1>

          <p>
            Pick one Technology per category to build your ideal stack
          </p>
        </div>

        {loading ? (
          <div className="loading">
            <p>Loading technologies...</p>
          </div>
        ) : (
          <div className="technology-section">

            <div className="technology-grid">
              {technologies.map((technology) => (
                <TechnologyCard
  key={technology.id}
  technology={technology}
  onAdd={addToStack}
  isAdded={stack.some(
    (item) => item.id === technology.id
  )}
/>
              ))}
            </div>

           <YourStack
  stack={stack}
  onRemove={removeFromStack}
  onRemoveAll={removeAll}
/>

          </div>
        )}
      </main>
      
      <ToastContainer />

             
    </>
  );
}

export default App;