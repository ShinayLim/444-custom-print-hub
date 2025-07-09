// File: src/pages/MagnetProducts.jsx
import "./Products.css";
import { Link } from "react-router-dom";

const magnetProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Magnet Design ${i + 1}`,
  image: `/images/magnet/magnet${i + 1}.png`, // Adjust to .png if needed
}));

export default function MagnetProducts() {
  return (
    <div className="products-container">
      <div className="header-with-back">
        <h2>Ref Magnet Souvenirs</h2>
        <Link to="/products" className="back-button">
          Back
        </Link>
      </div>

      <div className="product-grid">
        {magnetProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
