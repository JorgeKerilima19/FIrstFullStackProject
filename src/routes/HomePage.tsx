import TypewriterComponent from "typewriter-effect";
import { Navbar } from "../components/homepage";

export const HomePage = () => {
  return (
    <div className="relative min-h-vh flex flex-col justify-center gap-12">
      <div className="flex text-7xl gap-2 pl-10">
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
    </div>
  );
};
