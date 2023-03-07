import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function NotFound() {

const error = useRouteError()

  return (
    <div className="error-page">
      <h2 className="error-page-heading">     
        {`Error: ${error.message}`}
      </h2>
      <Link className="error-page-btn" to="/">
        Return to home
      </Link>
    </div>
  );
}