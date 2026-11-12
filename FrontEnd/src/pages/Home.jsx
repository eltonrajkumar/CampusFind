
import './Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          CAMPUS LOST & FOUND PLATFORM
        </span>

        <h1>
          Lost Something on Campus?
          <span> Let's Find It Together.</span>
        </h1>

        <p>
          A simple way to report lost belongings, discover
          found items, and reconnect people with their
          valuable possessions.
        </p>

        <div className="hero-buttons">
          <button className="browse-btn">
            Browse Items
          </button>

          <button className="report-btn">
            Report Found Item
          </button>
        </div>

      </div>
    </section>
  );
}

export default Home;
