import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen px-3 py-20 md:px-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
