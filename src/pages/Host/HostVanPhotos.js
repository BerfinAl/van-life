import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const van = useOutletContext();

  return !van ? (
    <h2> Loading... </h2>
  ) : (
    <div className="host-van-photos">
      <img src={van.imageUrl} alt="van-img" />
    </div>
  );
}
