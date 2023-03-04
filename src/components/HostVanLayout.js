import { useEffect, useState } from "react";

import { NavLink, Outlet, useParams, Link } from "react-router-dom";

export default function HostVanLayout() {
  const { id } = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((err) => console.log(console.log(err)));
  }, []);


  return (
    <div className="host-van-detail-page container">

  {
    !van  
      ? ( <h2>Loading...</h2>)
      : ( 
        <>
          <div className="back-to-vans">
            <Link to=".." relative="path">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              Back to all vans
            </Link>
          </div>

          <div className="host-van-layout">
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
              <NavLink
                className="nav-link host"
                to={`pricing`}
              >
                Pricing
              </NavLink>
              <NavLink className="nav-link host" to={`photos`}>
                Photos
              </NavLink>
            </nav>

            <Outlet context={van} />
          </div>
        </>
      )}
    </div>
  );
}
