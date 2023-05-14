import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({request}) {
  await requireAuth(request);
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();

  const hostVansElements = hostVans.map((hostVan) => {
    return (
      <Link to={hostVan.id} key={hostVan.id}>
        <div className="host-van">
          <img src={hostVan.imageUrl} alt="van-img" />
          <div>
            <h4 className="host-van-name">{hostVan.name}</h4>
            <p>${hostVan.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-vans-page container">
      <h1 className="host-vans-heading">Your listed vans</h1>
      <div className="host-vans">{hostVansElements}</div>
    </div>
  );
}
