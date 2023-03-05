import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Loading from "../../components/Loading";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  const location = useLocation();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((err) => console.log(console.log(err)));
  }, []);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return !van ? (
    <Loading />
  ) : (
    <div className="container">
      <div className="back-button">
        <Link to={`..?${search}`} relative="path">
          &larr;
          <span>Back to {type} vans</span>
        </Link>
      </div>

      <div className="van-details">
        <img src={van.imageUrl} alt="van-img" />
        <div>
          <div className={`van-type details ${van.type}`}>
            {`${van.type.substring(0, 1).toUpperCase()}${van.type.substring(
              1
            )}`}
          </div>

          <h2 className="van-details-name"> {van.name}</h2>

          <h4 className="van-details-price">
            ${van.price}
            <span>/day</span>
          </h4>
          <p>{van.description}</p>
          <button className="rent-btn"> Rent this van</button>
        </div>
      </div>
    </div>
  );
}
