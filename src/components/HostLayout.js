import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="nav-links host">
        <NavLink className="nav-link host" to="." end>
          Dashboard
        </NavLink>
        <NavLink className="nav-link host" to="income">
          Income
        </NavLink>
        <NavLink className="nav-link host" to="vans">
          Vans
        </NavLink>
        <NavLink className="nav-link host" to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
