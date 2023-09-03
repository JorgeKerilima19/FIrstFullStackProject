import TypewriterComponent from "typewriter-effect";
import { Navbar, Features, AboutHome } from "../components/homepage";
import { Clients, Invitation } from "../components";

import img from "../assets/images/banner.jpg";

export const HomePage = () => {
  return (
    <>
      <section className="pl-10 relative min-h-vh flex flex-col justify-center gap-12">
        <div className="banner absolute w-full h-full -z-10">
          <img
            className="w-full h-full object-cover absolute"
            src={img}
            alt=""
          />
        </div>
        <div className="flex text-7xl gap-2">
          <span>Info for those </span>
          <TypewriterComponent
            options={{
              strings: ["Smart", "Worried"],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-red-800",
            }}
          />
        </div>
        <Navbar />
      </section>
      <section className="pl-10 relative min-h-vh flex flex-col justify-center gap-12 pt-20 bg-gray-100">
        <Features />
      </section>
      <section className="pl-10 flex gap-12 flex-wrap py-20 text-lg">
        <AboutHome />
      </section>
      <section className="pl-10 text-xl py-20 flex flex-col gap-8 bg-gray-100">
        <Clients />
      </section>
      <Invitation />
    </>
  );
};
