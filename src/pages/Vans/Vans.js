import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getVans } from "../../api";
import Loading from "../../components/Loading";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const vanType = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const filteredVans =
    vanType && vans ? vans.filter((van) => van.type === vanType) : vans;

  const vanElemenets =
    filteredVans &&
    filteredVans.map((van) => {
      return (
        <Link
          to={van.id}
          key={van.id}
          state={{ search: searchParams.toString(), type: vanType }}
        >
          <div className="van">
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

  const types =
    vans &&
    vans.reduce((arr, van) => {
      if (!arr.includes(van.type)) {
        return [...arr, van.type];
      }
      return arr;
    }, []);

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  const filterTypes =
    types &&
    types.map((type) => {
      return (
        <Link
          key={type}
          className={`filter ${type} ${vanType === type && "selected"}`}
          to={genNewSearchParamString("type", type)}
        >
          {`${type.substring(0, 1).toUpperCase()}${type.substring(1)}`}
        </Link>
      );
    });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
        <h1>There was an error: {error.message}</h1>
    );
  }

  return (
    <div className="vans-page container">
      <h1> Explore our van options</h1>
      <div className="filters">
        {filterTypes}
        {vanType && (
          <Link
            to={genNewSearchParamString("type", null)}
            className="clear-filters"
          >
            Clear filters
          </Link>
        )}
      </div>
      <div className="vans">{vanElemenets}</div>
    </div>
  );
}
