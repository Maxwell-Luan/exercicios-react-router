import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="ms-header">
      <div className="ms-header-content">
        <div>
          <Link to="/">
            <h1>MeuSite</h1>
          </Link>
        </div>
        <nav className="ms-nav-menu">
          <NavLink end className={({isActive}) => isActive ? "ms-active-menu" : ""} to="/">
            <p>Início</p>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "ms-active-menu" : ""} to="/promotion-page">
            <p>Promoção</p>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "ms-active-menu" : ""} to="/subscription-page">
            <p>Participar</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
