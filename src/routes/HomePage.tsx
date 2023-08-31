import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

export const HomePage = () => {
  return (
    <div className="min-h-vh flex flex-col justify-center gap-12">
      <div className="flex text-5xl gap-2 pl-10">
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
      <div>
        <nav>
          <ul className="flex gap-5 justify-center">
            <Link to={""}>NavItem</Link>
            <Link to={""}>NavItem</Link>
            <Link to={""}>NavItem</Link>
            <Link to={""}>NavItem</Link>
            <Link to={""}>NavItem</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};
