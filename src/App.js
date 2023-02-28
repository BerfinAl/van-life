import "./style.css";
import { Routes, Route } from "react-router-dom";
import "./server";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
