import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </>
  );
}
