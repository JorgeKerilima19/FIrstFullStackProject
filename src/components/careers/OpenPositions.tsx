import { Link } from "react-router-dom";

import { availableJobs } from "../../helpers/data/openPositions";

export const OpenPositions = () => {
  return (
    <section className="pl-5 md:pl-10 pt-16 grid">
      <div>
        <h3 className="text-4xl font-semibold pb-16">Open positions</h3>
        <p className="text-xl">
          We love to make beautiful code and smart designs, we look for others
          to the same
        </p>
      </div>
      <div className="pt-16 w-full grid gap-5 md:w-4/5 m-auto">
        {availableJobs.map((el, index) => (
          <article
            key={index}
            className="border-2 grid md:grid-cols-2 text-lg p-3 md:p-5 gap-5"
          >
            <div className="grid gap-2">
              <header className="font-semibold text-xl">{el.jobTitle}</header>
              <span className="text-base text-green-800 font-medium">
                {el.department}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <span className="col-span-1 text-lg font-semibold">
                {el.jobLocation}
              </span>
              <Link
                className="row-span-2 order-2 md:order-none bg-red-700 grid items-center text-white h-9 md:h-3/5 self-center"
                to=""
              >
                <button>Apply</button>
              </Link>
              <span className="col-span-1 text-base">{el.jobType}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
