import "./Products.css";
import { Link } from "react-router-dom";

const candleProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Candle Design ${i + 1}`,
  image: `./images/candle/candle${i + 1}.png`,
}));

export default function CandleProducts() {
  return (
    <div className="products-container">
      <div className="header-with-back">
        <h2>Candle Souvenirs</h2>
        <Link to="/products" className="back-button">
          Back
        </Link>
      </div>
      <div className="product-grid">
        {candleProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
