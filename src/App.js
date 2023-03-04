import "./style.css";
import { Routes, Route } from "react-router-dom";
import "./server";


import Home from "./pages/Home";
import About from "./pages/About";

import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import HostVanLayout from "./components/HostVanLayout";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<HostVanDetail />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />

            </Route>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
