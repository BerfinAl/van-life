 import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav-header">
        <NavLink to="/"> #VANLIFE </NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="nav-link" to="host">Host  </NavLink>
        <NavLink className="nav-link" to="about">About </NavLink>
        <NavLink className="nav-link" to="vans">Vans </NavLink>
      </div>
    </nav>
  );
}
