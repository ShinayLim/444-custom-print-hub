import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CandleProducts from "./pages/CandleProducts";
import MagnetProducts from "./pages/MagnetProducts";
import Pricelist from "./pages/Pricelist";
import CandlePricelist from "./pages/CandlePricelist";
import MagnetPricelist from "./pages/MagnetPricelist";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <li>
              <NavLink to="/">444</NavLink>
            </li>
          </div>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricelist"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Pricelist
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/candle" element={<CandleProducts />} />
          <Route path="/products/magnet" element={<MagnetProducts />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/pricelist/candle" element={<CandlePricelist />} />
          <Route path="/pricelist/magnet" element={<MagnetPricelist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
