import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav-header">
        <Link className="nav-link" to="/"> #VANLIFE </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/about">About </Link>
        <Link className="nav-link" to="/vans">Vans </Link>
      </div>
    </nav>
  );
}
