import { useEffect, useState } from "react";

import { NavLink, Outlet, useParams, Link } from "react-router-dom";
import Loading from "./Loading";

export default function HostVanLayout() {
  const { id } = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((err) => console.log(console.log(err)));
  }, []);

  if (!van) {
    return <Loading />;
  }

  return (

    <div className="host-van-detail-page">
      <div className="back-button">
        <Link to=".." relative="path">
          &larr;
          <span>Back to all vans</span>
        </Link>
      </div>

      <div className="host-van-details-box">
        <img src={van.imageUrl} alt="van-img" />

        <div className="host-van-detail-basics">
          <div className={`van-type details ${van.type}`}>
            {`${van.type.substring(0, 1).toUpperCase()}${van.type.substring(
              1
            )}`}
          </div>
          <h2> {van.name}</h2>
          <p className="price">
            ${van.price}
            <span>/day</span>
          </p>
        </div>

        <nav className="nav-links host-van-nav">
          <NavLink className="nav-link host" to={`/host/vans/${id}`} end>
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
