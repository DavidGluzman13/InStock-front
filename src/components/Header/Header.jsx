import logo from "../../assets/logo/InStock-Logo.svg";
import { NavLink, Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <Link to="/">
          <img className="navigation__logo" src={logo} alt="BrainFlix-logo" />
        </Link>
        <div className="navigation__buttons">
          <NavLink to="/warehouses">
            <h3 className="navigation__link">Warehouses</h3>
          </NavLink>
          <NavLink to="/inventories">
            <h3 className="navigation__link">Inventory</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
