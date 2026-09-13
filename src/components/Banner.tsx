
import BannerStack from "../assets/banner-stack.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">

        <div className="banner-text">
          

          <h1>
            Build Your Ideal{" "}
            <span>Development Stack</span>{" "}
            
          </h1>

          <p className="banner-description">
            Explore frontend, backend, database and tooling options. Compare them side by side and put together the stack that fits your next project.
          </p>

          <div className="banner-buttons">
            <button className="primary-btn">
              Explore Technologies
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="banner-image">
          <img
            src={BannerStack}
            alt="Banner Stack"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;

