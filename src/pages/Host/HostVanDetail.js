import { useOutletContext } from "react-router-dom";

export default function HostVanDetail() {
const van = useOutletContext();

  return ( 
      <div className="host-van-all-info">
        <p> <b>Name:</b> {van.name}</p>
        <p> <b>Category:</b> {`${van.type.substring(0,1).toUpperCase()}${van.type.substring(1)}`} </p>
        <p> <b>Description:</b> {van.description} </p>
        <p> <b>Visibility:</b> Public </p>
      </div>
    )
}
