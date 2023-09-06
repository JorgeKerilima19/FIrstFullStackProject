import img1 from "../assets/images/dev1.jpg";
import img2 from "../assets/images/dev2.jpg";
import { Clients, Team } from "../components";

export const About = () => {
  return (
    <>
      <section className="min-h-vh flex gap-10 items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl">About Us</h2>
          <span className="font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            tempus purus. Morbi semper, Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Et itaque sint eveniet asperiores.
          </span>
        </div>
      </section>
      <h3 className="text-3xl bg-gray-200 px-5 md:px-16 py-12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic earum sit
        quae quis impedit! Dignissimos. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Veritatis voluptatum, reprehenderit aperiam veniam
        perferendis aliquid optio possimus officiis laudantium molestiae.
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-1">
        <img
          className="w-full object-cover max-h-80 md:max-h-96 md:w-3/6"
          src={img1}
          alt=""
        />
        <img
          className="w-full object-cover max-h-80 md:max-h-96 md:w-3/6"
          src={img2}
          alt=""
        />
      </div>
      <Clients />
      <Team />
    </>
  );
};
