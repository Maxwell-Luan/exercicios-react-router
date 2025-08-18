import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <div className="ms-header">
      <div className="ms-header-title">
        <Link to="/">
          <h1>MeuSite</h1>
        </Link>
      </div>
    </div>
  );
}
