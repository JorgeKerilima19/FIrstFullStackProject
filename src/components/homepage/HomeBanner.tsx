import TypewriterComponent from "typewriter-effect";
import img from "../../assets/images/banner.jpg";
import { Navbar } from ".";

export const HomeBanner = () => {
  return (
    <>
      <div className="banner absolute w-full h-full -z-10">
        <img className="w-full h-full object-cover absolute" src={img} alt="" />
      </div>
      <div className="pl-10 flex text-7xl gap-2 flex-wrap">
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
    </>
  );
};
