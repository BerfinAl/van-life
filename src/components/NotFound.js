import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error-page">
      <h2 className="error-page-heading">
        Sorry, the page you were looking for was not found.
      </h2>
      <Link className="error-page-btn" to="/">
        Return to home
      </Link>
    </div>
  );
}
