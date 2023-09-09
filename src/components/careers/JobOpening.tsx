import img from "../../assets/images/dev2.jpg";

import { Link } from "react-router-dom";

export const JobOpening = () => {
  return (
    <section className="flex flex-wrap justify-between items-center gap-3 py-10 border-t-gray-300 border-t-2 border-b-gray-300 border-b-2 pl-5 md:pl-10">
      <div className="w-full md:w-2/5 grid gap-5">
        <h3 className="font-medium text-3xl pb-8">
          We want make you proud of your choice
        </h3>
        <span className="text-lg">
          We work to create a comfortable working space where every team member
          can feel free to safe their opinions
        </span>
        <Link
          className="bg-red-700 border-transparent border-2 hover:border-red-700 hover:bg-white hover:text-red-700 transition duration-300 text-white py-2 px-16 w-2/3 m-auto text-center"
          to={""}
        >
          <button className="text-lg">See open positions</button>
        </Link>
      </div>
      <img
        className="rounded-3xl max-w-[95%] sm:max-w-[40%] md:max-w-md"
        src={img}
        alt="devOffice"
      />
    </section>
  );
};
