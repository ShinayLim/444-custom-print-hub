import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to 444 Custom Print Hub</h1>
        <p>
          📌Mayamot, Antipolo City <br /> At 444 Custom Print Hub, we are
          committed to delivering exceptional quality <br /> and service to meet
          all your printing and design needs.
        </p>
        <div className="cta-buttons">
          <Link to="/products" className="btn">
            Browse Products
          </Link>
          <Link to="/pricelist" className="btn">
            Check Pricelist
          </Link>
        </div>
      </div>
    </div>
  );
}
