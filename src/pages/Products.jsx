import { Link } from "react-router-dom";
import "./Products.css";

export default function Products() {
  return (
    <div className="products-container">
      <h2>Choose a Product Category</h2>
      <div className="cta-buttons">
        <Link to="/products/candle" className="btn">
          Candle Souvenirs
        </Link>
        <Link to="/products/magnet" className="btn">
          Ref Magnet Souvenirs
        </Link>
      </div>
    </div>
  );
}
