import { Link } from "react-router-dom";

export const Invitation = () => {
  return (
    <div className="text-4xl py-20 font-semibold">
      <h2 className="pb-10">Let's built something together</h2>
      <h3>
        Best journeys start with{" "}
        <Link className="text-red-700 underline underline-offset-8" to={"/"}>
          saying hi
        </Link>
      </h3>
    </div>
  );
};
