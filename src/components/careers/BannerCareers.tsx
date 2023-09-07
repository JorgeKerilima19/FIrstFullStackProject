import Eli from "../../assets/images/team/Elipheleyt.jpg";
import Seong from "../../assets/images/team/Seong.jpg";
import Vesta from "../../assets/images/team/Vesta.jpg";

import dev from "../../assets/images/dev1.jpg";

export const BannerCareers = () => {
  return (
    <div className="-z-0 absolute md:relative -top-1/4 opacity-20 md:opacity-90 overflow-hidden md:min-w-3/5 w-full min-h-vh transform translate-y-[50%] md:translate-y-0">
      <img
        className="relative md:absolute top-1/4 -right-[35%] rounded-full w-128 max-w-screen-md h-128 object-cover"
        src={dev}
        alt="Office"
      />
      <div className="absolute top-2/4 left-1/4 md:left-0 rounded-full w-10 h-10 bg-red-700"></div>
      <img
        src={Eli}
        className="hidden lg:block absolute top-10 -right-4 rounded-full w-36 h-36 object-cover"
        alt="teamMember"
      />
      <img
        src={Seong}
        className="hidden md:block absolute top-1/4 left-[40%] rounded-full w-48 h-48 object-cover"
        alt="teamMember"
      />
      <img
        src={Vesta}
        className="hidden lg:block absolute left-5 bottom-4 rounded-full w-72 h-72 object-cover"
        alt="teamMember"
      />
    </div>
  );
};
