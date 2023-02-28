import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .then(() => console.log(vans));
  }, []);

  const vanElemenets = vans.map((van) => {
    return (
      <Link to={`${van.id}`}>
        <div className="van-el" key={van.id}>
          <img src={van.imageUrl} alt="van" />
          <p>
            {van.name}
            <span className="van-price">
              ${van.price} <span>/day</span>
            </span>
          </p>
          <div className={`van-type ${van.type}`}>
            {`${van.type.substring(0, 1).toUpperCase()}${van.type.substring(
              1
            )}`}
          </div>
        </div>
      </Link>
    );
  });

  const types = vans.reduce((arr, van) => {
    if (!arr.includes(van.type)) {
      return [...arr, van.type];
    }
    return arr;
  }, []);

  const filterTypes = types.map((type) => {
    return (
      <div key={type} className="filter-type">
        {type}
      </div>
    );
  });

  return (
    <div className="vans-page container">
      <h1> Explore our van options</h1>
      <div className="filters">
        {filterTypes} <a> Clear filters</a>{" "}
      </div>
      <div className="vans">{vanElemenets}</div>
    </div>
  );
}
