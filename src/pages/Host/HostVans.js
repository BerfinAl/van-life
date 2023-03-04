import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then(({ vans }) => setHostVans(vans))
      .catch((err) => console.log(err));
  }, []);


  const hostVansElements =
    hostVans &&
    hostVans.map((hostVan) => {
      return (
        <Link to={`${hostVan.id}`} key={hostVan.id}>
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
