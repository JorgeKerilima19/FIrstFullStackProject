import { ChildProps } from "../Interfaces";

export const FeatureCard = ({ feature }: ChildProps) => {
  return (
    <article className="w-full sm:w-80">
      <img src={feature.img} alt="" />
      <header className="text-2xl font-semibold py-5">{feature.title}</header>
      <span className="text-lg font-normal">{feature.description}</span>
    </article>
  );
};
