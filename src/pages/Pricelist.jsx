import { Link } from "react-router-dom";
import "./Pricelist.css";

export default function Pricelist() {
  return (
    <div className="pricelist-container">
      <h2>Select Pricelist</h2>
      <div className="cta-buttons">
        <Link to="/pricelist/candle" className="btn">
          Candle Pricelist
        </Link>
        <Link to="/pricelist/magnet" className="btn">
          Ref Magnet Pricelist
        </Link>
      </div>
    </div>
  );
}
