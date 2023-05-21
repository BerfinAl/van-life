import React from "react";
import ReactDOM from "react-dom/client";

import { SkeletonTheme } from "react-loading-skeleton";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./style.css";

// import "./server";

import Home from "./pages/Home";
import About from "./pages/About";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login";

import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import HostVanLayout, {
  loader as hostVanLayoutLoader,
} from "./components/HostVanLayout";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            await requireAuth(request);
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />

        <Route
          path="vans/:id"
          element={<HostVanLayout />}
          loader={hostVanLayoutLoader}
        >
          <Route
            index
            element={<HostVanDetail />}
            loader={async ({ request }) => {
              await requireAuth(request);
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => {
              await requireAuth(request);
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => {
              await requireAuth(request);
              return null;
            }}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SkeletonTheme baseColor="#d9d9d9">
    <App />
  </SkeletonTheme>
);
