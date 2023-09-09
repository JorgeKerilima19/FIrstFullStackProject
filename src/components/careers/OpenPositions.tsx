import { availableJobs } from "../../helpers/data/openPositions";

export const OpenPositions = () => {
  return (
    <section>
      <div>
        {availableJobs.map((el) => (
          <span>{el.jobTitle}</span>
        ))}
      </div>
    </section>
  );
};
