import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className="home container">
      <div className="home-detail-box">
        <h2> You got the travel plans, we got the travel vans</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="home-button" to="/vans">Find your van</Link>
      </div>
    </div>
  );
}
