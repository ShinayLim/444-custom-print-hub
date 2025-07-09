import "./Pricelist.css";

const candlePrices = [
  { name: "Rose Candle", price: "₱50 each" },
  { name: "Heart Candle", price: "₱55 each" },
];

export default function CandlePricelist() {
  return (
    <div className="pricelist-container">
      <h2>Candle Souvenir Pricelist</h2>
      <ul>
        {candlePrices.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
