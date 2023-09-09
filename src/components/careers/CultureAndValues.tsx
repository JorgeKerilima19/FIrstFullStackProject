import { careerFeature } from "../types";

const values: careerFeature[] = [
  {
    id: 0,
    name: "Growth",
    description:
      "There is no need to beat the hell out of you to be better image of yourself",
  },
  {
    id: 1,
    name: "Growth",
    description:
      "There is no need to beat the hell out of you to be better image of yourself",
  },
  {
    id: 2,
    name: "Growth",
    description:
      "There is no need to beat the hell out of you to be better image of yourself",
  },
];

export const CultureAndValues = () => {
  return (
    <section className="pl-5 md:pl-10 pt-20">
      <h3 className="text-4xl font-semibold pb-16">
        Culture and <span className="text-red-700">values</span>
      </h3>
      <p className="text-lg">
        We strongly believe that values are more important than some things. We
        expect the same from new people as well
      </p>

      <section className="py-16 flex flex-wrap gap-16">
        {values.map((value) => (
          <article key={value.id} className="w-full md:max-w-[30%]">
            <header className="text-xl font-semibold pb-5">{value.name}</header>
            <p className="text-lg">{value.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};
