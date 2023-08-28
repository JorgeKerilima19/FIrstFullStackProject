import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
