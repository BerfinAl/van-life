import { NavLink, Outlet, Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../api";

import { requireAuth } from "../utils";

export async function loader({ params, request }) {
console.log(params)
await requireAuth(request)
  return getHostVans(params.id);
}

export default function HostVanLayout() {
  const van = useLoaderData();

  return (
    <div className="host-van-details-page">
      <div className="back-button">
        <Link to=".." relative="path">
          &larr;
          <span>Back to all vans</span>
        </Link>
      </div>

      <div className="host-van-details-box">
        <img src={van.imageUrl} alt="van-img" />

        <div className="host-van-details-basics">
          <div className={`van-type details ${van.type}`}>
            {`${van.type.substring(0, 1).toUpperCase()}${van.type.substring(
              1
            )}`}
          </div>
          <h2> {van.name}</h2>
          <p className="van-details-price">
            ${van.price}
            <span>/day</span>
          </p>
        </div>

        <nav className="nav-links host-van-nav">
          <NavLink className="nav-link host" to={`/host/vans/${van.id}`} end>
            Details
          </NavLink>
          <NavLink className="nav-link host" to={`pricing`}>
            Pricing
          </NavLink>
          <NavLink className="nav-link host" to={`photos`}>
            Photos
          </NavLink>
        </nav>

        <Outlet context={van} />
      </div>
    </div>
  );
}
