import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const van = useOutletContext();

  return !van ? (
    <h2> Loading... </h2>
  ) : (
    <p className="price">
      ${van.price}.00/<span>day</span>
    </p>
  );
}
