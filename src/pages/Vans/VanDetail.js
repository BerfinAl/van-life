import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch(err => console.log(console.log(err)))
  }, []);

  return (
    <div className="container">
      {!van ? (
        <h2>Loading...</h2>
      ) : (
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
                <path
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              Back to all vans
            </Link>
          </div>

          <div className="van-details">
            <img src={van.imageUrl} alt="van-img"/>
            <div>
              <div className={`van-type details ${van.type}`}>
                {`${van.type.substring(0, 1).toUpperCase()}${van.type.substring(
                  1
                )}`}
              </div>

              <h2 className="details-page-name"> {van.name}</h2>

              <h4 className="price">
                ${van.price}
                <span>/day</span>
              </h4>
              <p>{van.description}</p>
              <button className="rent-btn"> Rent this van</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
