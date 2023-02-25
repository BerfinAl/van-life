import "./style.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <nav>
        <div className="nav-header"> <Link to="/" > #VANLIFE </Link> </div>
        <div className="nav-links">
          <Link to="/about">About </Link>
          <Link to="/vans">Vans </Link>
        </div>
      </nav>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </div>
  );
}

export default App;
