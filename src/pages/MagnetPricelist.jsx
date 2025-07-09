import "./Pricelist.css";

const magnetPrices = [
  { name: "Boracay Magnet", price: "₱40 each" },
  { name: "Jeepney Magnet", price: "₱45 each" },
];

export default function MagnetPricelist() {
  return (
    <div className="pricelist-container">
      <h2>Ref Magnet Souvenir Pricelist</h2>
      <ul>
        {magnetPrices.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
