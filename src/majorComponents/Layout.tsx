import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
