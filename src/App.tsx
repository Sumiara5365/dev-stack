import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologyCard from "./components/TechnologyCard";
import type { Technology } from "./types/technology";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
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

  return (
    <>
      <Navbar />
      <Banner />

      <main className="technology-container">
        <div className="section-heading">
          <h1>Explore The  <span>Technologies</span></h1>
          <p>Pick one Technology per category to build your ideal stack</p>
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
                />
              ))}
            </div>


          </div>
        )}
      </main>
    </>
  );
}

export default App;