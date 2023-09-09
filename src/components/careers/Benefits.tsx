import { careerFeature } from "../types";

const perksAndBenefits: careerFeature[] = [
  {
    id: 0,
    name: "Vacation and Sick Coverage",
    description: "Paid vacations up to 21 days and 14 paid sick days per year ",
  },
];

export const Benefits = () => {
  return (
    <section className="pt-16 bg-gray-200 pl-5 md:pl-10">
      <h3 className="text-4xl font-semibold pb-16">
        Perks and <span className="text-red-700">benefits</span>
      </h3>
      <p className="text-lg">
        There is no reason push yourself too much doing what you enjoy
      </p>
      <section className="py-16 flex flex-wrap gap-16">
        {perksAndBenefits.map((benefit) => (
          <article key={benefit.id} className="w-full md:max-w-[30%]">
            <header className="text-xl font-semibold pb-5">
              {benefit.name}
            </header>
            <p className="text-lg">{benefit.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};
